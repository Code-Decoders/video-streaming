import { useEffect, useState } from "react";
import styles from '../../styles/Login.module.css'
import Layout from '../../components/layouts/secondary'
import Image from 'next/image'
import MetaMask from '../../public/images/metamask-logo-png-transparent 1.png'
import { Router, useRouter } from 'next/router'
import Web3 from 'web3'
import HDWalletProvider from "@truffle/hdwallet-provider";
import GamolyNFT from '../../../build/contracts/GamolyNFT.json'
import GamolyContract from "../../../build/contracts/Gamoly.json"
import { useContext } from "react/cjs/react.development";
import { AppState } from "../_app";
import { create } from "../../lib/livepeer";
import random from 'random-name'

const Login = () => {

    const localProvider = process.env.NEXT_PUBLIC_RPC_URL

    const [state, setState] = useContext(AppState);
    const router = useRouter()

    const login = async () => {
        try {
            state.authInstance.loginWithSocial("google").then(async (res) => {
                const privateKey = await state.authInstance.getUserInfo().privateKey;
                // const privateKey = '2701eaf6b262cb5b661904ec25696db2caae653e6968f7066b9b0efd3684527d';
                // const provider = new Web3.providers.HttpProvider(localProvider)

                const localKeyProvider = new HDWalletProvider(privateKey, localProvider);

                const web3 = new Web3(localKeyProvider)
                //
                const account = web3.eth.accounts.privateKeyToAccount(privateKey);
                let storage = new web3.eth.Contract(GamolyContract.abi, "0x3067cF23576876Bb56034fea42FB7811da9b74C1")
                let marketplace = new web3.eth.Contract(GamolyNFT.abi, "0xA1f8f435C53564d88FA353Ad19Ad9bC7b0e0F2E3")
                // let contract = new web3.eth.Contract(SimpleContract.abi, "0xE2a0458fb2872b14923D0253437e1Fdfb30199C3")
                let myStream = await storage.methods.get().call();
                console.log(myStream)
                if (myStream) {
                    var response = await create(account.address)
                    await storage.methods.set([[`https://cdn.livepeer.com/hls/${response.data.playbackId}/index.m3u8`, "", "", '', false], random.first() + ' ' + random.last(), 'https://i.imgur.com/Cmdcmsf.png', 0]).send({ from: account.address, });
                    console.log("my ", myStream);
                }
                setState(val => {
                    return {
                        ...val,
                        web3: web3,
                        account: account,
                        contracts: {
                            storage: storage.methods,
                            marketplace: marketplace.methods
                        }
                    }
                })


                router.push('/');
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
                className={styles['login_illustration']} />
        </div>
        <div className={styles.dividerBar} />
        <div style={{ display: 'flex', flex: '1', justifyContent: 'center', alignItems: 'center' }}>
            <div className={styles.rightPane}>
                <div>
                    <div style={{ color: "white", fontSize: "70px", fontWeight: 'bolder' }}>
                        Welcome to Gamoly
                    </div>
                    <div style={{ fontSize: "24px", textAlign: 'center' }}>
                        {"Let's get started"}
                    </div>
                </div>
                <div className={styles['continue']}>
                    Continue with:
                </div>
                <div onClick={login} className={styles['metamask-button']}>
                    <img src={'https://dashboard.arcana.network/assets/google-sso.5a80c744.svg'} alt="google" />
                    <div>
                        Google
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