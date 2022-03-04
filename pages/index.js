import styles from '../styles/Home.module.css'
import VideoTile from '../components/VideoTile/videoTile';
import { FiChevronRight } from 'react-icons/fi';
import { AppState } from './_app';
import { data } from '../public/dummy_data/data';
import { useContext } from 'react/cjs/react.development';
import MiniVideoTile from '../components/MiniVideoTile/miniVideoTile';
import miniImage from '../public/images/mini_video_tile.png'

export default function Home() {

  const [state] = useContext(AppState);


  const liveNowBarStyle = { color: "white", justifyContent: "space-between", fontWeight: "bold", paddingBottom: "20px", fontSize: "20px", display: "flex", alignItems: "center"};

  return (
    <div style={{ height: "100%", color: "black", paddingLeft: "30px", marginTop: "50px"}}>
    <div style = {{...liveNowBarStyle}}>
    <div style = {{ flex: "1" , fontSize: "30px", wordSpacing: '2px'}}> Live now</div>
    <div style = {{ color: "var(--secondary-tool)", fontWeight: "none", alignContent: "center", cursor: "pointer", justifyContent: "space-between", display: "flex"}}>
      See All <FiChevronRight style={{ width: "24px", height: "24px",}}/>
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
    <div style = {{display: "flex ",wordSpacing: "2px",paddingBottom: "20px", marginTop: "40px", color: "white", fontWeight: "bold" }}>    
     <div style = {{ flex: "1", fontSize: "30px" }}> Games we think you'll like</div>
    <div style = {{fontSize: "20px", color: "var(--secondary-tool)", fontWeight: "none", alignContent: "center", cursor: "pointer", justifyContent: "space-between", display: "flex"}}>
      See All <FiChevronRight style={{ width: "24px", height: "24px",}}/>
    </div>
    </div>
    <div style = {{ display: "flex", gap: "30px", marginTop: "10px"}}>
    {
      data.map((video, index) => {
            return(
              <MiniVideoTile
                key = {index}
                 image={miniImage}
                 title={video.title}
                 player={video.player}
                 game={video.game}

              />
            )
        }
      )
    }
    </div>
    </div>
  )
}
