import { useRouter } from 'next/router';
import { useContext } from 'react';
import { AppState } from '../../pages/_app';
import Navbar from '../NavBar/Navbar';
import Sidebar from '../Sidebar/Sidebar';
import styles from './layout.module.css';

<<<<<<< HEAD
const Main = ({children, router}) => {
  return(
    <div>
      <Head>
          <meta name = "viewport" content = "initial-scale=1"/>
          <meta name = "author" content = "CodeDecoders"/>
          <title>Video Streaming </title>
      </Head>
      <div>
      <Navbar route = {router.asPath}/>
      <div style = {{ backgroundColor: "var(--secondary)", height: "Calc(100vh - 100px)"}}>
        {children}
=======
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
>>>>>>> 0dd96deb98e02d694b1b908545efd9b33da61c88
      </div>
    </div>
  )
}

export default Main;
