import {useEffect, useState} from "react";
import styles from '../../styles/Login.module.css'
import Layout from '../../components/layouts/secondary'
import Image from 'next/image'
import Illustration from '../../public/images/login_illustration.png'
import MetaMask from '../../public/images/metamask-logo-png-transparent 1.png'


 const Login = () => {

    const [authInstance, setAuthInstance] = useState(null);

    const getAuth = async () => {
      const AuthProvider = (await import("@arcana/auth")).AuthProvider;
      AuthProvider.handleRedirectPage(window.location);
      const Auth = new AuthProvider({
        appID: '568',
        network: "testnet",
        oauthCreds: [
          {
            type: "google",
            clientId: "194404779871-s8hde43bkdc0du6afi37na3g6hn9h4kh.apps.googleusercontent.com",
          },
        ],
        redirectUri: "http://localhost:3000/",
      })
      setAuthInstance(Auth);
    }

    useEffect( () => {
       getAuth()
    }, [])

    const login = async () => {
      await authInstance.loginWithSocial("google");
    }

    console.log(authInstance)

    return <div> <div className = {styles.base}>
    <div style = {{paddingTop: "180px", display: "flex", flexDirection: "column",alignItems: "space-around", height: "100vh", gap: "100px"}}>
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
              Let&apos;s get started
            </div>
            <div className = {styles['continue']}>
              Continue with:
            </div>
            <div onClick={login} className = {styles['metamask-button']} >
                <Image src = {MetaMask} alt = "metamask logo" />
                <div>
                    Metamask
                </div>
            </div>
    </div>
    </div></div>
        }

      
Login.getLayout = (page) => {
  
          return(
            <Layout title = {"Login"}>
            {page}
            </Layout>
          )
        }
        
  export default Login