import { useRouter } from "next/router";
import { useContext } from "react";
import { AppState } from "../../pages/_app";
import Navbar from "../NavBar/Navbar";
import Sidebar from "../Sidebar/Sidebar";
import styles from "./layout.module.css";
import Head from "next/head";

const Main = ({ children }) => {
  const [state] = useContext(AppState);
  return (
    <div>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title> Video Streaming </title>
      </Head>
      <div style={{ display: "flex" }}>
        <Sidebar />
        <div
          className={styles["page-container"]}
          style={
            state.isSidebarOpen
              ? { marginLeft: "20%" }
              : { marginLeft: "7%", width: "93%" }
          }
        >
          <Navbar />
          <main
            style={{
              backgroundColor: "var(--secondary)",
              height: "Calc(100vh - 100px)",
            }}
          >
            {children}
          </main>
        </div>
      </div>
    </div>
  );
};

export default Main;
