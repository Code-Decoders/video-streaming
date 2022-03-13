import { useEffect, useState } from "react";
import styles from '../../styles/Login.module.css'
import Layout from '../../components/layouts/secondary'
import Image from 'next/image'
import Illustration from '../../public/images/login_illustration.png'
import MetaMask from '../../public/images/metamask-logo-png-transparent 1.png'
import { useRouter } from 'next/router'


const Login = () => {

  const [authInstance, setAuthInstance] = useState(null);
  const router = useRouter();

    const getAuth = async () => {
      const AuthProvider = (await import("@arcana/auth")).AuthProvider;
      const Auth = new AuthProvider({
        appID: '568',
        network: "testnet",
        oauthCreds: [
          {
            type: "google",
            clientId: "194404779871-s8hde43bkdc0du6afi37na3g6hn9h4kh.apps.googleusercontent.com",
          },
        ],
        redirectUri: `${window.location.origin}/auth/redirect`,
      })
      setAuthInstance(Auth);
    }
    
    useEffect( () => {
      getAuth()
    }, [])
    
    const login = async () => {
      try{
        await authInstance.loginWithSocial("google").then((res) => router.push('/'));
      }catch(err) {
          window.alert(err);
      } 
    }

  console.log(authInstance)

  return <div className={styles.base}>
    <div className={styles.leftPane}>
      <h1 className={styles.bannerTextStyle}>
        Login with your web3 wallet!
      </h1>
      <img src={'https://dashboard.arcana.network/assets/sidebar-illustration.ea9e51ec.png'} alt="" className={styles['login_illustration']} />
    </div>
    <div className={styles.dividerBar} />
    <div style={{ display: 'flex', flex: '1', justifyContent: 'center', alignItems: 'center' }}>
      <div className={styles.rightPane}>
        <div>
          <div style={{ color: "white", fontSize: "70px",fontWeight: 'bolder' }}>
            Welcome to Gamoly
          </div>
          <div style={{ fontSize: "24px", textAlign: 'center' }}>
            {"Let's get started"}
          </div>
        </div>
        <div className={styles['continue']}>
          Continue with:
        </div>
        <div onClick={login} className={styles['metamask-button']} >
          <Image src={MetaMask} alt="metamask logo" />
          <div>
            Metamask
          </div>
        </div>
      </div>
    </div>
  </div>
}


Login.getLayout = (page) => {

  return (
    <Layout title={"Login"}>
      {page}
    </Layout>
  )
}

export default Login