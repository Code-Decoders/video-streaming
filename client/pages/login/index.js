import {useEffect, useState} from "react";
import styles from '../../styles/Login.module.css'
import Layout from '../../components/layouts/secondary'
import Image from 'next/image'
import Illustration from '../../public/images/login_illustration.png'
import MetaMask from '../../public/images/metamask-logo-png-transparent 1.png'
import {useRouter} from 'next/router'
import Web3 from 'web3'
import HDWalletProvider from "@truffle/hdwallet-provider";
import SimpleContract from "../../../build/contracts/MyStream.json"

const Login = () => {

    const localProvider = `https://rpc-mumbai.maticvigil.com/v1/d82ed08c584cd547c34157c5723417839b6d1253`

    const [authInstance, setAuthInstance] = useState(null);
    const router = useRouter();

    const getAuth = async () => {
        const AuthProvider = (await import("@arcana/auth")).AuthProvider;
        const authProvider = new AuthProvider({
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
        setAuthInstance(authProvider);
    }

    useEffect(() => {
        getAuth()
    }, [])


    console.log("authInstance", authInstance)
    const login = async () => {
        try {
            authInstance.loginWithSocial("google").then(async (res) => {
                const privateKey = await authInstance.getUserInfo().privateKey;

                // const provider = new Web3.providers.HttpProvider(localProvider)

                const localKeyProvider = new HDWalletProvider(privateKey, localProvider);

                const web3 = new Web3(localKeyProvider)
                //
                const myAccount = web3.eth.accounts.privateKeyToAccount(privateKey);

                let contract = new web3.eth.Contract(SimpleContract.abi, "0xE2a0458fb2872b14923D0253437e1Fdfb30199C3")
                await contract.methods.set(myAccount.address, [["", "", "", false], "ravi", "urserpic"]).send({from: myAccount.address,});
                let my = await contract.methods.get(myAccount.address).call();
                console.log("provider ", web3.eth.accounts);
                console.log("myAccount.address ", myAccount.address);
                console.log("my ", my);
                // router.push('/');
            });
        } catch (err) {
            window.alert(err);
        }
    }

    return <div className={styles.base}>
        <div className={styles.leftPane}>
            <h1 className={styles.bannerTextStyle}>
                Login with your web3 wallet!
            </h1>
            <img src={'https://dashboard.arcana.network/assets/sidebar-illustration.ea9e51ec.png'} alt=""
                 className={styles['login_illustration']}/>
        </div>
        <div className={styles.dividerBar}/>
        <div style={{display: 'flex', flex: '1', justifyContent: 'center', alignItems: 'center'}}>
            <div className={styles.rightPane}>
                <div>
                    <div style={{color: "white", fontSize: "70px", fontWeight: 'bolder'}}>
                        Welcome to Gamoly
                    </div>
                    <div style={{fontSize: "24px", textAlign: 'center'}}>
                        {"Let's get started"}
                    </div>
                </div>
                <div className={styles['continue']}>
                    Continue with:
                </div>
                <div onClick={login} className={styles['metamask-button']}>
                    <Image src={MetaMask} alt="metamask logo"/>
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