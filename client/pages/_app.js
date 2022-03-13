import '../styles/globals.css'
import Main from '../components/layouts/main'
import React from 'react'

export const AppState = React.createContext();

function MyApp({ Component, pageProps }) {
  const [state, setState] = React.useState({
    isSidebarOpen: true,
    'sidebar-menu-item': 'Dashboard',
  });

  const getLayout = Component.getLayout 
  return (
    getLayout ? getLayout(
      <AppState.Provider value={[state, setState]}>
      <Component {...pageProps}  />
    </AppState.Provider>) : 
      <AppState.Provider value={[state, setState]}>
     <Main>
      <Component {...pageProps}  />
      </Main>
    </AppState.Provider> 
    
  )
}

export default MyApp
