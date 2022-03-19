import styles from '../styles/Home.module.css'
import VideoTile from '../components/VideoTile/videoTile';
import { FiChevronRight } from 'react-icons/fi';
import { AppState } from './_app';
import { useState,useEffect } from 'react'
import { data } from '../public/dummy_data/data';
import { useContext } from 'react/cjs/react.development';
import MiniVideoTile from '../components/MiniVideoTile/miniVideoTile';
import { useRouter } from 'next/router';
import miniImage from '../public/images/mini_video_tile.png'

export default function Home() {

  const router = useRouter();

  const [authInstance, setAuthInstance] = useState(null);


  useEffect( () => {
    const getAuth = async () => {
      const AuthProvider = (await import("@arcana/auth")).AuthProvider;
      const authProvider = new AuthProvider.init({
        appID: '568',
        network: "testnet",
        oauthCreds: [
          {
            type: "google",
            clientId: "194404779871-s8hde43bkdc0du6afi37na3g6hn9h4kh.apps.googleusercontent.com",
          },
        ],
        redirectUri: `${window.location.origin}/auth/redirect`,
      })
      setAuthInstance(authProvider);
    }
    getAuth()
    }, [router])
  
    const checkAuth = async () => {
     await authInstance.isLoggedIn() ? console.log('logged in') : router.push('/login')
    }


  return (
    <div style={{ height: "100%", color: "black", marginTop: "50px"}}>
      <div className={styles['live-now-bar-style']}>
        <div style={{ flex: "1", fontSize: "30px", wordSpacing: '2px' }}> Live now</div>
        <div className={styles['see-all']}>
          See All <FiChevronRight style={{ width: "24px", height: "24px", }} />
        </div>
      </div>

      <div className={styles.livenow}>
        {

          data.map((video, index) => {
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
      <div style={{ display: "flex ", wordSpacing: "2px", padding: "0px 30px 20px 30px", marginTop: "40px", color: "white", fontWeight: "bold" }}>
        <div style={{ flex: "1", fontSize: "30px" }}> {"Games we think you'll like"}</div>
      </div>
      <div style={{ display: "flex", gap: "30px", marginTop: "10px", padding: '0 30px', width: '100%', overflowX: 'scroll' }}>
        {
          Array(6).fill('0').map((v, index) => {
            var video = data[0];
            return (
              <MiniVideoTile
                key={index}
                image={miniImage}
                title={video.title}
                player={video.player}
                game={video.game}
                followClicked={async () => {
                 console.log(authInstance.isLoggedIn());
                 await authInstance.logout()
                 console.log(authInstance.isLoggedIn());
                }}
              />
            )
          }
          )
        }
      </div>
      <div style={{marginTop: '31px' }} className = {styles['live-now-bar-style']}>
        <div style={{ flex: "1", fontSize: "30px", wordSpacing: '2px' }}>Recommended Streams</div>
      </div>

      <div className={styles.livenow}>
        {

          data.map((video, index) => {
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
  )
}
