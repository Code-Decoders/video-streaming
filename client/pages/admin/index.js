import styles from "../../styles/Admin.module.css";
import image from "../../public/images/image.svg";
import { useDropzone } from "react-dropzone";
import Image from "next/image";
import { useState, useContext, useEffect } from "react";
import { AppState } from "../_app";
import { NFTStorage } from "nft.storage";
import Layout from "../../components/layouts/secondary";

const NFT_STORAGE_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweDNEZjE4RmY2NUQzMzRDMzIzZkEyQkFEOTcwQTMxODQ0MkI3ODU2QTkiLCJpc3MiOiJuZnQtc3RvcmFnZSIsImlhdCI6MTY0ODY2MDAxMzUyMiwibmFtZSI6IkdhbW9seSJ9.cpX0gQvXfBUXpg0R9nvTe8hXk4WKCUDMThdPLigX8L0";

const Admin = () => {
  const [data, setData] = useState({
    name: "",
    description: "",
    price: "",
  });

  const [appState] = useContext(AppState);
  const [create, setCreate] = useState("Create!");
  const [disabled, setDisabled] = useState(false);
  const [files, setFiles] = useState([]);

  const storeFile = async () => {
    var file = files[0];
    const storage = new NFTStorage({ token: NFT_STORAGE_KEY });
    console.log(file);
    var lien = await storage.store({
      image: file,
      name: file.name,
      description: data.description,
    });
    var fileData = (await storage.check(lien.ipnft)).cid;
    console.log(fileData);
    return fileData;
  };

  const { acceptedFiles, getRootProps, getInputProps, isDragActive } =
    useDropzone({
      onDrop: (acceptedFiles) => {
        const file = acceptedFiles[0];
        setFiles(
          acceptedFiles.map((file) => {
            return Object.assign(file, {
              preview: URL.createObjectURL(file),
            });
          })
        );
        console.log(file.size.toString());
        console.log(file.name);
        setData((prevData) => {
          return {
            ...prevData,
            name: file.name,
          };
        });
      },
    });

  const createNFT = async (e) => {
    e.preventDefault();
    setDisabled(true);
    setCreate("Creating..");
    try {
      const marketplace = appState.contracts.marketplace;
      const storage = appState.contracts.storage;
      console.log(appState.contracts);
      const admin = appState.admin;
      const address = appState.contracts.storageAddress;
      const marketplaceAddress = appState.contracts.marketplaceAddress;
      console.log(admin.address);
      const cid = await storeFile();
      const tokenId = await marketplace.methods
        .getLatestTokenId()
        .call({ from: admin.address });
      await marketplace.methods
        .createNFT(address, cid)
        .send({ from: admin.address });
      console.log(tokenId);
      var nft = await storage
        .createNFT(
          data.name,
          data.description,
          marketplaceAddress,
          tokenId,
          data.price
        )
        .send({ from: admin.address });
      console.log(nft);
      setCreate("Created!");
    } catch (err) {
      console.log(err);
      setCreate("Error");
    }
  };

  const onChange = (e) => {
    setData((prevData) => {
      return {
        ...prevData,
        [e.target.name]: e.target.value,
      };
    });
  };

  useEffect(
    () => () => {
      files.forEach((file) => URL.revokeObjectURL(file.preview));
    },
    [files]
  );

  const thumbs = files.map((file) => (
    <div style={{ width: "100px", height: "100px" }} key={file.name}>
      <div style={{ width: "100px", height: "100px" }}>
        <Image src={file.preview} style={{ width: "100px", height: "100px" }} />
      </div>
    </div>
  ));

  const submit = (e) => {
    e.preventDefault();
    console.log("Submit clicked ");
  };

  return (
    <Layout title={"Admin"}>
      <div style={{ paddingLeft: "40px" }}>
        <div className={styles.header}>Create new NFT</div>
        <div style={{ fontSize: "24px", paddingTop: "20px" }}>
          Image, videos and much more....
        </div>
        <form onSubmit={createNFT}>
          <div style={{ color: "var(--secondary-tool)" }}>
            File types supported: JPG, PNG, GIF, SVG, MP4, WEBM Max size: 40M.
          </div>
          <div
            style={{ cursor: !files[0] ? "pointer" : "auto", width: "620px" }}
            {...getRootProps()}
          >
            <input style={{ cursor: "pointer" }} {...getInputProps()} />
            {files[0] == null ? (
              !isDragActive ? (
                <div className={styles.filebox}>
                  <Image src={image} />
                  <div
                    style={{
                      fontWeight: "bold",
                      color: "var(--secondary-tool)",
                      paddingTop: "20px",
                    }}
                  >
                    Drag & drop files here
                    <br />
                  </div>
                  <div
                    style={{
                      fontWeight: "bold",
                      color: "var(--secondary-tool)",
                      fontSize: "15px",
                    }}
                  >
                    or browse media on your device
                  </div>
                </div>
              ) : (
                <div className={styles.filebox}>
                  <Image src={files[0] == null ? image : files.preview} />
                  <div
                    style={{
                      fontWeight: "bold",
                      color: "var(--secondary-tool)",
                      paddingTop: "20px",
                    }}
                  >
                    Drop here
                    <br />
                  </div>
                  <div
                    style={{
                      fontWeight: "bold",
                      color: "var(--secondary-tool)",
                      fontSize: "15px",
                    }}
                  >
                    or browse media on your device
                  </div>
                </div>
              )
            ) : (
              <div className={styles.filebox}>
                <Image src={files[0].preview} height="1000px" width="1000px" />
              </div>
            )}
          </div>
          <div
            style={{
              flexDirection: "row",
              display: "flex",
              alignItems: "start",
              gap: "90px",
              paddingBottom: "30px",
            }}
          >
            <div style={{ marginTop: "80px" }}>
              <div style={{ fontSize: "24px", fontWeight: "bold" }}>Name*</div>
              <div className={styles["text-base"]}>
                <input
                  required
                  type={"text"}
                  className={styles["text-input"]}
                  onChange={onChange}
                  placeholder="Item Name"
                  value={data.name}
                  name={"name"}
                />
              </div>
              <div
                style={{
                  fontSize: "24px",
                  fontWeight: "bold",
                  marginTop: "30px",
                }}
              >
                Description
              </div>
              <div className={styles["text-base"]}>
                <input
                  type={"text"}
                  className={styles["text-input"]}
                  onChange={onChange}
                  placeholder="...."
                  value={data.description}
                  name={"description"}
                />
              </div>
              <div
                style={{
                  fontSize: "24px",
                  fontWeight: "bold",
                  marginTop: "30px",
                }}
              >
                Price*
              </div>
              <div className={styles["text-base"]}>
                <input
                  required
                  className={styles["text-input"]}
                  onChange={onChange}
                  type={"number"}
                  placeholder="price"
                  name={"price"}
                  value={data.price}
                />
              </div>
            </div>
            <div
              style={{
                cursor: "pointer",
                marginTop: "112px",
                width: "150px",
                height: "50px",
                backgroundColor: "var(--tool)",
                borderRadius: "10px",
                justifyContent: "center",
                display: "flex",
                alignItems: "center",
              }}
            >
              <button
                type="submit"
                style={{
                  border: "none",
                  cursor: "pointer",
                  backgroundColor: "var(--tool)",
                  color: "white",
                  fontSize: "24px",
                }}
              >
                {create}
              </button>
            </div>
          </div>
        </form>
      </div>
    </Layout>
  );
};

export default Admin;
