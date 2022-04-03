import Layout from '../components/layouts/main'
import Web3 from 'web3'
import { useContext, useEffect, useState } from 'react'
import HDWalletPrvoider from '@truffle/hdwallet-provider'

const Website = ({ Component, pageProps, router }) => {
    return(
        <Layout>
            <Component {...pageProps}/>
        </Layout>
    )
}

export default Website
