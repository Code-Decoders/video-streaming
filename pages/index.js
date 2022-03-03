import styles from '../styles/Home.module.css'
import VideoTile from '../components/VideoTile/videoTile';
import demoImage from '../public/images/demo_image.png';

export default function Home() {
  return (
     <div style = {{ height: "100%", color: "black"}}>
    <VideoTile image = {demoImage}/>
    </div>
  )
}
