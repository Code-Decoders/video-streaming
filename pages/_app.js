import '../styles/globals.css'
import Layout from '../components/layouts/main'
import React from 'react'

export const AppState = React.createContext();

function MyApp({ Component, pageProps }) {
  const [state, setState] = React.useState({
    isSidebarOpen: true,
    'sidebar-menu-item': 'Dashboard',
  });
  return (
    <AppState.Provider value={[state, setState]}>
      <Layout>
        <Component {...pageProps}  />
      </Layout>
    </AppState.Provider>
  )
}

export default MyApp
