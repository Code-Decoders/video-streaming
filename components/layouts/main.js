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
      <Sidebar />
      <div className={styles['page-container']} style={state.isSidebarOpen ? { marginLeft: '20%' } : { marginLeft: '7%' }}>
        <Navbar />
        <main style={{ backgroundColor: "var(--secondary)", height: "Calc(100vh - 100px)", }}>
          {children}
        </main>
      </div>
    </div>
  )
}

export default Main;