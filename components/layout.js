import Sidebar from "./Sidebar";
import styles from '../styles/layout.module.css'
import { useContext } from "react";
import { AppState } from "../pages/_app";

export default function Layout({ children }) {
    const [state, setState] = useContext(AppState)
    return (
        <div style={{ display: 'flex', }}>
            <Sidebar />
            <main className={styles['page-container']} style={state.isSidebarOpen ? {marginLeft: '20%'} : {marginLeft: '7%'}}>{children}</main>
        </div>
    )
}