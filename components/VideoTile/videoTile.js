import styles from './videoTile.module.css';
import Image from 'next/image';


const VideoTile = ({image, title, player, game}) => {
  return(
    <div style = {{color: 'white'}} className = {styles.videobase}>
        <div className = {styles.videoimage}>
        <Image borderRadius = "20px" objectFit = "contain" src = {image} alt = "image tile"/>       
        </div>
        <div style = {{ fontSize: "14px",paddingTop: "5px" }}>
        {title}
        </div>
      <div style = {{ fontSize: "12px", paddingTop: "5px" }}>
        {player}
      </div>
      <div style = {{ fontSize: "12px", color: "var(--secondary-tool)" }}>
        {game}
      </div>
    </div>
  )    
}

export default VideoTile
