import React, { useContext } from 'react'
import styles from '../styles/Sidebar.module.css';
import { FiChevronLeft, FiFile, FiFeather, FiUsers } from 'react-icons/fi'
import { AppState } from '../pages/_app';
import SidebarButton from './Sidebar.Button';
import { useRouter } from 'next/router';

const Sidebar = () => {

    const [state, setState] = useContext(AppState);
    const path = '';
    const router = useRouter()

    return (
        <div className={styles[`sidebar-container`]} style={state.isSidebarOpen ? {} : { width: '7%' }}>
            <div className={styles['sidebar-row-first']}>
                <div className={styles['sidebar-circle-button']} style={state.isSidebarOpen ? {} : { marginBottom: '75px' }} onClick={() => {
                    setState(prevState => ({
                        ...prevState,
                        isSidebarOpen: !prevState.isSidebarOpen
                    }))
                }}>
                    <FiChevronLeft color='white' height={13} width={6} />
                </div>
            </div>
            {state.isSidebarOpen ? <div className={styles['sidebar-header']} style={{ marginBottom: '10px' }}>Home</div> : <></>}
            <SidebarButton title={'Dashboard'} icon={<FiFile />} actived={router.pathname == '/'} link={'/'} />
            <SidebarButton title={'Browse'} icon={<FiFeather />} actived={router.pathname == '/browse'} link={'/browse'} />
            <SidebarButton title={'Community'} icon={<FiUsers />} actived={router.pathname == '/community'} link={'/api'} />
            <SidebarButton title={'Your Videos'} icon={<FiFile />} actived={router.pathname == '/yourvideos'} link={'/api'} />
            {state.isSidebarOpen ? <div className={styles['sidebar-header']} style={{ marginBottom: '10px', marginTop: '41px' }}>Following</div> : <></>}
        </div>
    )
}

export default Sidebar