import styles from './videoTile.module.css';
import Image from 'next/image';
import Link from 'next/link';

const VideoTile = ({image, title, user, game}) => {
  return(
    <div style = {{color: 'white'}} className = {styles.videobase}>
        <div className = {styles.videoimage}>
        <Link href = {`/live/${user}?title=${title}&game=${game}`} passHref scroll = {false}>
        <Image objectFit = "contain" src = {image} alt = "image tile"/></Link>
        </div>
        <div style = {{ fontSize: "14px",paddingTop: "5px" }}>
        {title}
        </div>
      <div style = {{ fontSize: "12px", paddingTop: "5px" }}>
        {user}
      </div>
      <div style = {{ fontSize: "12px", color: "var(--secondary-tool)" }}>
        {game}
      </div>
    </div>
  )    
}

export default VideoTile
