import styles from './nft_cards.module.css'
import Image from 'next/image'
import { FiMoreVertical, FiShare } from 'react-icons/fi'

const NFTCard = ({img, name, desc}) => {

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
                <FiMoreVertical style = {{ color: "var(--tool)" }}/>
            </div>
            </div>
            <div className={styles.bio}>
                <div style = {{ backgroundColor: "var(--primary)", width: "207px", paddingLeft: "10px"}}>{desc}</div>
                <div style = {{ backgroundColor: "var(--primary)", height: "65px", width: "35px"}} className = {styles['center-align']}>
                    <FiShare style = {{ height: "20px", width: "20px", color: "var(--tool)", cursor: "pointer"}}/></div>
            </div>
        </div>
    )

}

export default NFTCard
