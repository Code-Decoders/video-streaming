import Head from 'next/head'

const Main = ({children}) => {
    return(
        <div>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <title> Admin </title>
            </Head>
            <div>
                {children}                  
            </div>
        </div>
    )
}

export default Main                
