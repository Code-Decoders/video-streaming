import {useEffect, useState} from "react";
import styles from '../../styles/Login.module.css'
import Layout from '../../components/layouts/secondary'
import Image from 'next/image'
import MetaMask from '../../public/images/metamask-logo-png-transparent 1.png'
import {Router, useRouter} from 'next/router'
import Web3 from 'web3'
import HDWalletProvider from "@truffle/hdwallet-provider";
import SimpleContract from "../../../build/contracts/MyStream.json"
import { useContext } from "react/cjs/react.development";
import { AppState } from "../_app";

const Login = () => {

    const localProvider = process.env.NEXT_PUBLIC_RPC_URL

    const [state, setState] = useContext(AppState);
    const router = useRouter()

    const login = async () => {
        try {
            state.authInstance.loginWithSocial("google").then(async (res) => {
                const privateKey = await state.authInstance.getUserInfo().privateKey;

                // const provider = new Web3.providers.HttpProvider(localProvider)

                const localKeyProvider = new HDWalletProvider(privateKey, localProvider);

                const web3 = new Web3(localKeyProvider)
                //
                const myAccount = web3.eth.accounts.privateKeyToAccount(privateKey);
                let streaming = new web3.eth.Contract(SimpleContract.abi, "0xE2a0458fb2872b14923D0253437e1Fdfb30199C3")
                // let contract = new web3.eth.Contract(SimpleContract.abi, "0xE2a0458fb2872b14923D0253437e1Fdfb30199C3")

                setState(val => {
                  return {
                    ...val,
                    web3: web3,
                    account: myAccount,
                    contracts: {
                        stream: streaming
                    },
                  }  
                })
                
                
                // router.push('/');
            });
        } catch (err) {
            window.alert(err);
        }
    }

    useEffect(() => {
        state.authInstance.isLoggedIn() ? router.push('/') : console.log('');
    })

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