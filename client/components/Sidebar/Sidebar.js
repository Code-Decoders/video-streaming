import React, { useContext } from 'react'
import styles from './Sidebar.module.css';
import { FiChevronRight, FiChevronLeft, FiFile, FiFeather, FiUsers } from 'react-icons/fi'
import { RiShoppingBasket2Line } from 'react-icons/ri'
import { AppState } from '../../pages/_app';
import SidebarButton from './Sidebar.Button';
import { useRouter } from 'next/router';
import SidebarTile from './Sidebar.Tile';

const Sidebar = () => {

    const [state, setState] = useContext(AppState);
    const path = '';
    const router = useRouter()

    return (
        <div className={styles[`sidebar-container`]} style={state.isSidebarOpen ? {} : { width: '7%' }}>
            <div className={styles['sidebar-row-first']}>
                <div className={styles['sidebar-circle-button']} onClick={() => {
                    setState(prevState => ({
                        ...prevState,
                        isSidebarOpen: !prevState.isSidebarOpen
                    }))
                }}>
                    {state.isSidebarOpen ? <FiChevronLeft color='white' height={13} width={6} /> : <FiChevronRight color='white' height={13} width={6} />}
                </div>
            </div>
            <SidebarButton title={'Home'} icon={<FiFile/>} actived={router.pathname == '/'} link={'/'} />
            <SidebarButton title={'Browse'} icon={<FiFeather />} actived={router.pathname == '/browse'} link={'/browse'} />
            <SidebarButton title={'Community'} icon={<FiUsers />} actived={router.pathname == '/community'} link={'/api'} />
            <SidebarButton title={'MarketPlace'} icon={<RiShoppingBasket2Line />} actived={router.pathname == '/marketplace'} link={'/marketplace'} />
            {state.isSidebarOpen ? <div className={styles['sidebar-header']} style={{ marginBottom: '16px', marginTop: '41px' }}>Following</div> : <></>}
            <SidebarTile title={'Ann Bell'} subtitle={'Valorant'} live={false} />
            <SidebarTile title={'Ann Bell'} subtitle={'Valorant'} live={false} />
            <SidebarTile title={'Ann Bell'} subtitle={'Valorant'} live={true} />
            <SidebarTile title={'Ann Bell'} subtitle={'Valorant'} live={true} />
            <SidebarTile title={'Ann Bell'} subtitle={'Valorant'} live={false} />
            <SidebarTile title={'Ann Bell'} subtitle={'Valorant'} live={false} />
        </div>
    )
}

export default Sidebar
