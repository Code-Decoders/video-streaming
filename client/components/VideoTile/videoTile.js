import styles from './videoTile.module.css';
import Image from 'next/image';
import Link from 'next/link';

const VideoTile = ({ image, title, user, game }) => {
  return (
    <div style={{ color: 'white' }} className={styles.videobase}>
      <Link href={`/live/${user}?title=${title}&game=${game}&link=${"http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4"}`} passHref scroll={false}>
        <Image objectFit="contain" src={image} alt="image tile" className={styles.videoimage} /></Link>
      <div style={{ fontSize: "14px", paddingTop: "10px" }}>
        {title}
      </div>
      <div style={{ fontSize: "12px", paddingTop: "5px" }}>
        {user}
      </div>
      <div style={{ fontSize: "12px", color: "var(--secondary-tool)" }}>
        {game}
      </div>
    </div>
  )
}

export default VideoTile
