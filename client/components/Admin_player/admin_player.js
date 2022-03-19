import styles from './admin_player.module.css';
import { FiPlay } from 'react-icons/fi'
import volume from '../../public/icons/volume.svg';
import maximize from '../../public/icons/maximize.svg';
import Image from 'next/image';

const AdminPlayer = () => {
    return(
        <div className = {styles.player}>
            <video className = {styles.video}/>
            <div/>
            <div className = {styles.controllers}>
                <div style = {{ display: "flex", alignItems: "center", width: "80px", justifyContent: "space-between" }}>
                    <FiPlay style = {{ color: "black", height: "20px", width: "20px"}} />
            <Image src = {volume} alt = "volume"/>
                </div>
            <Image src = {maximize} alt = "maximize"/>
            </div>
        </div>
    )
}

export default AdminPlayer
