import styles from './videoTile.module.css';
import Image from 'next/image';


const VideoTile = ({image}) => {
  return(
    <div>
        <div>
        <Image src = {image}/>            
        </div>
    </div>
  )
}

export default VideoTile
