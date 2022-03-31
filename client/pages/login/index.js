import { useEffect, useState } from "react";
import styles from '../../styles/Login.module.css'
import Layout from '../../components/layouts/secondary'
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
                let storage = new web3.eth.Contract(GamolyContract.abi, "0x843d77f791B4EC9e60C9398470Ca4b2243199F84")
                let marketplace = new web3.eth.Contract(GamolyNFT.abi, "0xd69051F60219dcDBa58DbFF0de7a956ebB2e0A34")
                // let contract = new web3.eth.Contract(SimpleContract.abi, "0xE2a0458fb2872b14923D0253437e1Fdfb30199C3")
                let myStream = await storage.methods.get(account.address).call();
                console.log(myStream)
                if (myStream.name == '') {
                    var response = await create(account.address)
                    await storage.methods.set([[`https://cdn.livepeer.com/hls/${response.data.playbackId}/index.m3u8`, "", "", '', false], random.first() + ' ' + random.last(), 'https://i.imgur.com/Cmdcmsf.png', account.address, 0]).send({ from: account.address, });
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
        if (state.authInstance) {
            state.authInstance.isLoggedIn() ? router.push('/') : console.log('');
        }
    })

    return (
        <div className={styles.pane}>
                <div style={{ color: "white", fontSize: "2.5em", fontWeight: 'bold' }}>
                    Welcome
                </div>
                <img src={'/images/logo.png'} height={60}/>
            <div onClick={login} className={styles['metamask-button']}>
                <img src={'https://dashboard.arcana.network/assets/google-sso.5a80c744.svg'} style={{marginRight: '1em'}} alt="google" />
                <div style={{fontSize:'1.125em'}}>
                    Google
                </div>
            </div>
        </div>)
}


Login.getLayout = (page) => {

    return (
        <Layout title={"Login"}>
            {page}
        </Layout>
    )
}

export default Login