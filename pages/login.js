import Layout from '../components/layouts/secondary';
import Image from 'next/image';
import Illustration from '../public/images/login_illustration.png';
import styles from '../styles/Login.module.css';
import MetaMask from '../public/images/metamask-logo-png-transparent 1.png';

export default function login() {
  return(
    <div className = {styles.base}>
    <div style = {{marginTop: "10%", display: "flex", flexDirection: "column",alignItems: "space-around", height: "100vh", gap: "100px"}}>
      <div className = {styles.bannerTextStyle}>
        Login with your web3 wallet!
    </div>
    <div  className = {styles['login_illustration']} >
    <Image src = {Illustration} alt = ""/>
    </div>
    </div>
    <div style = {{ height: "100vh", width: "5px", backgroundColor: "black"}}>
    </div>
    <div className = {styles.rightPane}>
            <div style = {{color: "white", fontSize: "70px", width: "620px"}}>
              Welcome to Video Player
            </div>
            <div style = {{ fontSize: "24px"}}>
              Let's get started
            </div>
            <div className = {styles['continue']}>
              Continue with:
            </div>
            <div className = {styles['metamask-button']}>
                <Image src = {MetaMask} alt = "metamask logo" />
                <div>
                    Metamask
                </div>
            </div>
    </div>
    </div>
  )
}

login.getLayout = (page) => {
  return(
    <Layout title = {"Login"}>
    {page}
    </Layout>
  )
}




