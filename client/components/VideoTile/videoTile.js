import styles from './videoTile.module.css';
import Image from 'next/image';
import Link from 'next/link';

const VideoTile = ({ image, title, user, game, stream }) => {
  // console.log(stream.name)
  return (
    <div style={{ color: 'white' }} className={styles.videobase}>
      <Link href={`/live/${stream != undefined ? stream.name : user}`} passHref scroll={false}>
        <Image objectFit="contain" src={image} alt="image tile" className={styles.videoimage} /></Link>
      <div style={{ fontSize: "14px", paddingTop: "10px" }}>
        {stream != undefined ? stream.stream.title : title}
      </div>
      <div style={{ fontSize: "12px", paddingTop: "5px" }}>
        {stream != undefined ? stream.name : user}
      </div>
      <div style={{ fontSize: "12px", color: "var(--secondary-tool)" }}>
        {stream != undefined ? stream.stream.category : game}
      </div>
    </div>
  )
}

export default VideoTile
