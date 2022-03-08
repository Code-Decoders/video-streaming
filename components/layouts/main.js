import { useRouter } from 'next/router';
import { useContext } from 'react';
import { AppState } from '../../pages/_app';
import Navbar from '../NavBar/Navbar';
import Sidebar from '../Sidebar/Sidebar';
import styles from './layout.module.css';

const Main = ({ children }) => {

  const [state] = useContext(AppState)
  const router = useRouter()
  return (
    <div style={{ display: 'flex', }}>
      <style jsx global>
        {
        `::-webkit-scrollbar {
          height: 10px;
            width: 10px;
        }
        ::-webkit-scrollbar-thumb {
          /* -webkit-border-radius: 10px; */
          border-radius: 5px;
          background:var(--secondary-tool);
      }
        ::-webkit-scrollbar-track {
          background-color: black;
      }
        `
        }
        
        </style>
      <Sidebar />
      <div className={styles['page-container']} style={state.isSidebarOpen ? { marginLeft: '20%' } : { marginLeft: '7%', width: "93%"}}>
        <Navbar />
        <main style={{ backgroundColor: "var(--secondary)", height: "Calc(100vh - 100px)", }}>
          {children}
        </main>
      </div>
    </div>
  )
}

export default Main;

