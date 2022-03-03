import styles from '../styles/Home.module.css'
import VideoTile from '../components/VideoTile/videoTile';
import { FiChevronRight } from 'react-icons/fi';
import { data } from '../public/dummy_data/data';

export default function Home() {

  return (
    <div style={{ height: "100%", color: "black", paddingLeft: "30px", marginTop: "50px"}}>
    <div style = {{ color: "white", justifyContent: "space-between", fontWeight: "bold", paddingBottom: "20px", fontSize: "20px", display: "flex", alignItems: "center"}}>
    <div style = {{ flex: "1" }}> Live now</div>
    <div style = {{ color: "var(--secondary-tool)", fontWeight: "none", display: "flex", alignContent: "center", cursor: "pointer"}}>
      See All <FiChevronRight style={{ width: "24px", height: "24px", paddingLeft: "5px",}}/>
    </div>
    </div>
    <div className = {styles.livenow}>
    {
    
    data.map((video, index) => {
      return (
        <VideoTile
          key={index}
          image={video.image}
          title={video.title}
          player={video.player}
          game={video.game}
        />
      );
    })}
    </div>
    
    </div>
  )
}
