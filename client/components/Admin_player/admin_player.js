import styles from './admin_player.module.css';
import { FiPlay, FiVolume1, FiMaximize } from 'react-icons/fi'
import { useEffect, useRef } from 'react';
import videojs from 'video.js'
import "video.js/dist/video-js.css";
const AdminPlayer = ({ src }) => {
    const ref = useRef();

    const getVideoJS = async () => {
        if (ref) {
            const player = videojs(ref.current, {
                autoplay: true,
                controls: true,
                sources: [{
                    src: src,
                }],
            })
            player.on("error", () => {
                player.src(src);
            });
        }
    }
    useEffect(() => {
        getVideoJS()
    }, [ref])

    return (
        <video style={{ height: "300px", width: "600px", borderRadius: "10px"}} className='h-full w-full video-js vjs-theme-city' id={'video-id'} ref={ref} controls playsInline />

    )
}

export default AdminPlayer
