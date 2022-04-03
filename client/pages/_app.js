import '../styles/globals.css'
import Main from '../components/layouts/main'
import React, { useEffect } from 'react'
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

  const router = useRouter()

  const getContext = async () => {
    const AuthProvider = (await import("@arcana/auth")).AuthProvider;
    console.log(process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID)
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

      const localKeyProvider = new HDWalletProvider(privateKey, localProvider);

      const web3 = new Web3(localKeyProvider)
      //
      const myAccount = web3.eth.accounts.privateKeyToAccount(privateKey);
      let storage = new web3.eth.Contract(GamolyContract.abi, "0x843d77f791B4EC9e60C9398470Ca4b2243199F84")
      let marketplace = new web3.eth.Contract(GamolyNFT.abi, "0xd69051F60219dcDBa58DbFF0de7a956ebB2e0A34")
      // let streaming = new web3.eth.Contract(SimpleContract.abi, "0xE2a0458fb2872b14923D0253437e1Fdfb30199C3")
      // await contract.methods.set(myAccount.address, [["", "", "", false], "ravi", "urserpic"]).send({from: myAccount.address,});
      console.log("Storage: ", storage._address)
      console.log("Markeplace: ", marketplace._address)
      setState(val => {
        return {
          ...val,
          web3: web3,
          account: myAccount,
          contracts: {
            storage: storage.methods,
            storageAddress: storage._address,
            marketplace: marketplace,
          },
        }
      })  
    }
    else
      router.push('/login');
  }

  console.log(state)

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
