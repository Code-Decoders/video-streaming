import { FiCheck } from "react-icons/fi";
import styles from "./stream_tile.module.css";
const StreamTile = ({ name, content, id }) => {
  return (
    <div
      style={{
        display: "flex",
        width: "70%",
        alignItems: "center",
        paddingTop: "30px",
      }}
    >
      <div style={{ color: "white", flex: "1" }}>
        <b>{name}</b>
        <p>{content}</p>
      </div>
      <div
        className={styles.button}
        onClick={() => {
          navigator.clipboard.writeText(content);
          document.getElementById(`${"copy" + id}`).innerHTML = "Copied";
          setTimeout(() => {
            document.getElementById(`${"copy" + id}`).innerHTML = "Copy";
          }, 5000);
        }}
      >
        <FiCheck />
        <div id={`${"copy" + id}`}>Copy</div>
      </div>
    </div>
  );
};

export default StreamTile;
