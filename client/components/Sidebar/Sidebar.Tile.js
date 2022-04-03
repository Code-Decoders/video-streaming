import React, { useContext } from "react";
import { AppState } from "../../pages/_app";
import styles from "./Sidebar.module.css";

const SidebarTile = ({ title, subtitle, live }) => {
  const [state] = useContext(AppState);
  return (
    <div className={styles["following-tile-container"]}>
      <div className={styles["following-leading-contanier"]}></div>
      {state.isSidebarOpen && (
        <div className={styles["following-main-container"]}>
          <div className={styles["following-tile-title"]}>{title}</div>
          <div className={styles["following-tile-subtitle"]}>{subtitle}</div>
        </div>
      )}
      {state.isSidebarOpen && live && (
        <div className={styles["following-tile-live"]}>Live</div>
      )}
    </div>
  );
};

export default SidebarTile;
