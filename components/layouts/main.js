import Head from 'next/head';
import Navbar from '../NavBar/Navbar';

const Main = ({children, router}) => {
  return(
    <div>
      <Head>
          <meta name = "viewport" content = "initial-scale=1"/>
          <meta name = "author" content = "CodeDecoders"/>
          <title>Video Streaming </title>
      </Head>
      <div>
      <Navbar route = {router.asPath}/>
      <div style = {{ backgroundColor: "var(--secondary)", height: "Calc(100vh - 100px)"}}>
        {children}
      </div>
    </div>
    </div>
  )
}

export default Main;
