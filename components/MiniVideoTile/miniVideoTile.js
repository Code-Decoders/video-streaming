import styles from './miniVideoTile.module.css';
import Image from 'next/image';
import { FiPlus } from 'react-icons/fi';

const MiniVideoTile = ({ image, game, type = "fps" }) => {
  return (
    <div className={styles.miniVideoTilebase}>
      <div style={{ cursor: "pointer" }}>
        <Image layout='responsive' objectFit="fill" src={image} alt="image tile" className={styles.miniVideoImage} />
      </div>
      <div style={{ fontSize: "14px", fontWeight: "bold", color: "white", cursor: 'pointer' }}>
        {game}
      </div>
      <div style={{ fontSize: '12px', color: "var(--secondary-tool)", fontWeight: "bold" }}>
        {type.toUpperCase()}
      </div>
      <div className={styles.follow}>
        Follow<FiPlus style={{ height: "20px", width: "20px" }} />
      </div>
    </div>
  )
}

export default MiniVideoTile
