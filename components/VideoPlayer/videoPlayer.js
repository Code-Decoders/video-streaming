import Image from "next/image";
import styles from "./VideoPlayer.module.css";
import { FiChevronDown, FiMoreVertical, FiUpload } from "react-icons/fi";
import Tag from "./tag";
import miniImage from "../../public/images/mini_video_tile.png";
import { data } from "../../public/dummy_data/data";
import MiniVideoTile from "../MiniVideoTile/miniVideoTile";
import VideoTile from "../VideoTile/videoTile";

const VideoPlayer = ({ image, name, title, game }) => {
  return (
    <div style={{ marginRight: "2%" }}>
      <div className={styles["video-player"]}>
        <Image src={image} alt="no Image" />
      </div>
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
  );
};

export default VideoPlayer;
