import Image from "next/image";
import styles from "./VideoPlayer.module.css";
import { FiChevronDown, FiMoreVertical, FiUpload } from "react-icons/fi";
import Tag from "./tag";
import miniImage from "../../public/images/mini_video_tile.png";
import { data } from "../../public/dummy_data/data";
import MiniVideoTile from "../MiniVideoTile/miniVideoTile";
import VideoTile from "../VideoTile/videoTile";
import SideBar from './chatBar';
import { useRef } from 'react';
import videojs from "video.js";
import "video.js/dist/video-js.css";
import { useEffect } from "react/cjs/react.development";

const VideoPlayer = ({ link, image, name, title, game }) => {

  const ref = useRef()

  const getVideoPlayer = () => {
    if (ref) {
      const player = videojs(ref.current, {
        autoplay: true,
        controls: true,
        sources: [{
          src: link,
        }]
      })
      player.on('error', () => {
        player.src(link);
      })
    }
  }

  useEffect(() => {
    getVideoPlayer()
  }, [])

  return (
    <div style={{ display: "flex" }}>
      <div style={{ marginRight: "2%" }}>
        <video src={link} style={{ width: '100%', height: '100%' }} alt="no Video" className='h-full w-full video-js vjs-theme-city' id={'video-id'} ref={ref} controls playsInline />
        <div className={styles["desc"]}>
          <div className={styles["user-profile"]}>
            <div className={styles["name"]}>
              <div
                style={{
                  height: "50px",
                  width: "50px",
                  backgroundColor: "pink",
                  borderRadius: "50%",
                  marginLeft: "10px",
                }}
              ></div>
              <div>
                {name}
                <div style={{ fontWeight: "bold", fontSize: "15px" }}>
                  {title}
                </div>
                <div style={{ fontSize: "15px", color: "pink" }}>{game}</div>
              </div>
            </div>
            <div className={styles["subscribe"]}>
              Subscribe 20% off <FiChevronDown />
            </div>
          </div>
          <div style={{ display: "flex", marginBottom: "20px" }}>
            <div className={styles.tags}>
              <Tag>Hello there</Tag>
              <Tag>Action</Tag>
              <Tag>RPG</Tag>
            </div>
            <div className={styles["icon-style"]}>
              <FiUpload style={{ height: "30px", width: "30px" }} />
              <FiMoreVertical style={{ height: "30px", width: "30px" }} />
            </div>
          </div>
        </div>
        <div className={styles.livenow}>
          {data.map((video, index) => {
            return (
              <VideoTile
                key={index}
                image={video.image}
                title={video.title}
                user={video.player}
                game={video.game}
              />
            );
          })}
        </div>
      </div>
      <SideBar />
    </div>
  );
};

export default VideoPlayer;
