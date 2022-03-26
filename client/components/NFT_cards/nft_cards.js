import styles from './nft_cards.module.css'
import Image from 'next/image'
import buyIcon from '../../public/icons/buy.svg'
import { FiShare } from 'react-icons/fi'
import { RiShoppingCart2Line } from 'react-icons/ri'

const NFTCard = ({img, name, desc, share, buy}) => {

    return(
        <div className={styles.base}>
            <div className={styles.image}>
                <Image height = "200px" layout = 'fixed' width = "243px" src = {img} alt = {name}/>
                </div>
            <div className={styles.title}>
                <div style = {{ backgroundColor: "var(--primary)", paddingLeft: "10px", width: "207px", fontWeight: "bold", fontSize: "24px", height: "40px", justifyContent: "start"}}
                    className = {styles['center-align']}>
                {name}
            </div>
                <div style = {{ backgroundColor: "var(--primary)", cursor: "pointer", fontSize: "24px", height: "40px", width: "35px"}} className = {styles['center-align']}>
                <RiShoppingCart2Line onClick={buy}  style={{color: "var(--tool)"}}/>
            </div>
            </div>
            <div className={styles.bio}>
                <div style = {{ backgroundColor: "var(--primary)", width: "207px", paddingLeft: "10px"}}>{desc}</div>
                <div style = {{ backgroundColor: "var(--primary)", height: "65px", width: "35px"}} className = {styles['center-align']}>
                    <FiShare onClick={share} style = {{ height: "20px", width: "20px", color: "var(--tool)", cursor: "pointer"}}/></div>
            </div>
        </div>
    )

}

export default NFTCard
