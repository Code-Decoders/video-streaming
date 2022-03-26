import React, { useContext } from 'react'
import styles from './Sidebar.module.css'
import { AppState } from '../../pages/_app'
import Link from 'next/link'

const SidebarButton = ({ title, icon, actived, link }) => {
    const [state, setState] = useContext(AppState)
    if (state.isSidebarOpen)
        return (
            <Link href={link}>
                <a>
                    <div className={actived ? styles['sidebar-button-active'] : styles['sidebar-button']} onClick={() => {
                        setState(prevState => ({
                            ...prevState,
                            'sidebar-menu-item': title
                        }))
                    }}>
                        {icon}
                        <div>{title}</div>
                    </div>
                </a>
            </Link>
        )
    else
        return (<Link href={link}>
            <a>
                <div className={actived ? styles['sidebar-button-active'] : styles['sidebar-button']} style={{ background: 'transparent', color: !state.isSidebarOpen && actived ? 'var(--tool)' : null }} onClick={() => {
                    setState(prevState => ({
                        ...prevState,
                        'sidebar-menu-item': title
                    }))
                }}>
                    {icon}
                </div>
            </a>
        </Link>)
}

export default SidebarButton