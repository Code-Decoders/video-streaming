import '../styles/globals.css'
import Main from '../components/layouts/main'
import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router';
import Web3 from 'web3';
import HDWalletProvider from '@truffle/hdwallet-provider';
import GamolyNFT from '../../build/contracts/GamolyNFT.json'
import Gamoly from "../../build/contracts/Gamoly.json"
export const AppState = React.createContext();

function MyApp({ Component, pageProps }) {
  const [state, setState] = React.useState({
    isSidebarOpen: true,
    'sidebar-menu-item': 'Dashboard',
  });

  const localProvider = process.env.NEXT_PUBLIC_RPC_URL
  const [admin, setAdmin] = useState()

  const router = useRouter()

  const getContext = async () => {
    const AuthProvider = (await import("@arcana/auth")).AuthProvider;
    const authProvider = new AuthProvider({
      appID: process.env.NEXT_PUBLIC_APP_ID,
      network: "testnet",
      oauthCreds: [
        {
          type: "google",
          clientId: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID,
        },
      ],
      redirectUri: `${window.location.origin}/auth/redirect`,
    })
    setState(val => {
      return {
        ...val,
        authInstance: authProvider,
      }
    })

    if (authProvider.isLoggedIn()) {
      const privateKey =
        authProvider.getUserInfo().privateKey;
      // const privateKey = '2701eaf6b262cb5b661904ec25696db2caae653e6968f7066b9b0efd3684527d';

      // const provider = new Web3.providers.HttpProvider(localProvider)
      const adminKeyProvider = new HDWalletProvider("51b87ddf603988a4d2baabddf049d0e8c5ed801b83968ab4efc2b04641b2ac0a", localProvider);
      const web2 = new Web3(adminKeyProvider)
      const adminAccount = web2.eth.accounts.privateKeyToAccount("51b87ddf603988a4d2baabddf049d0e8c5ed801b83968ab4efc2b04641b2ac0a")
      console.log(adminAccount)

      const localKeyProvider = new HDWalletProvider(privateKey, localProvider);

      const web3 = new Web3(localKeyProvider)
      //
      const myAccount = web3.eth.accounts.privateKeyToAccount(privateKey);
      let storage = new web3.eth.Contract(Gamoly.abi, "0x4b176eDFf60321e8F7b879D3fA86844B5664bA51")
      let marketplace = new web3.eth.Contract(GamolyNFT.abi, "0xd69051F60219dcDBa58DbFF0de7a956ebB2e0A34")
      // let streaming = new web3.eth.Contract(SimpleContract.abi, "0xE2a0458fb2872b14923D0253437e1Fdfb30199C3")
      // await contract.methods.set(myAccount.address, [["", "", "", false], "ravi", "urserpic"]).send({from: myAccount.address,});
      setState(val => {
        return {
          ...val,
          web3: web3,
          account: myAccount,
          admin: adminAccount,
          contracts: {
            storage: storage.methods,
            storageAddress: storage._address,
            marketplaceAddress: marketplace._address,
            marketplace: marketplace,
          },
        }
      })  
    }
    else
      router.push('/login');
  }


  useEffect(() => {
    getContext()
  }, [])

  const getLayout = Component.getLayout
  return (
    getLayout ? getLayout(
      <AppState.Provider value={[state, setState]}>
        <Component {...pageProps} />
      </AppState.Provider>) :
      <AppState.Provider value={[state, setState]}>
        <Main>
          <Component {...pageProps} />
        </Main>
      </AppState.Provider>

  )
}

export default MyApp
