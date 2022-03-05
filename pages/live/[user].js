import { useRouter } from "next/router";
import video from "../../public/images/demo_image.png";
import Image from "next/image";
import VideoPlayer from '../../components/VideoPlayer/videoPlayer';

const Live = () => {
  
  const router = useRouter();
  const name = router.query.user;
  const title = router.query.title	
  const game = router.query.game;
  return(
    <div style = {{ marginLeft: "40px" }}>
	 <div>
    <VideoPlayer image = {video} name = {name} title = {title} game = {game}/>	
	  </div >
    </div>
  )
}
export default Live;
