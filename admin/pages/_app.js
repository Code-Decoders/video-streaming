import Layout from '../components/layouts/main'
import '../styles/globals.css'
import Web3 from 'web3'
import HDWalletProvider from '@truffle/hdwallet-provider'
import { useState, useEffect, useContext } from 'react'
import * as React from 'react'
import GamolyNFT from '../../build/contracts/GamolyNFT.json'
import Gamoly from '../../build/contracts/Gamoly.json'

export const AppState = React.createContext()


const  Webpage = ({ Component, pageProps, router }) => {
    const privateUrl = "https://rpc-mumbai.maticvigil.com/v1/d82ed08c584cd547c34157c5723417839b6d1253"

    const [account, setAccount] = useState()

    const getAccount = async () => {
        const privateKey = "51b87ddf603988a4d2baabddf049d0e8c5ed801b83968ab4efc2b04641b2ac0a"

        const privateKeyProvider = new HDWalletProvider(privateKey, privateUrl)
        const web3 = new Web3(privateKeyProvider)
        const acc = web3.eth.accounts.privateKeyToAccount(privateKey)

        const storage = new web3.eth.Contract(GamolyNFT.abi)

        console.log(acc)
        setAccount(val => {
            return{
                ...val,
                account: acc
            }
        })
    }

    useEffect(() => {
        getAccount()
        console.log(account)
    }, [])

    return(
            <AppState.Provider value = {[account, setAccount]}>
        <Layout>
            <Component {...pageProps}/>
        </Layout>
            </AppState.Provider>
    )
}

export default Webpage

