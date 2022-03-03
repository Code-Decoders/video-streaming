import styles from './videoTile.module.css';
import Image from 'next/image';


const VideoTile = ({image, title, player, game}) => {
  return(
    <div style = {{color: 'white'}} className = {styles.videobase}>
        <div className = {styles.videoimage}>
        <Image borderRadius = "20px" objectFit = "cover" src = {image} alt = "image tile"/>       
        </div>
        <div style = {{ fontSize: "25px",paddingTop: "5px" }}>
        {title}
        </div>
      <div style = {{ fontSize: "15px", paddingTop: "5px" }}>
        {player}
      </div>
      <div style = {{ fontSize: "15px", color: "var(--secondary-tool)" }}>
        {game}
      </div>
    </div>
  )    
}

export default VideoTile
