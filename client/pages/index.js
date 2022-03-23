import styles from '../styles/Home.module.css'
import VideoTile from '../components/VideoTile/videoTile';
import { FiChevronRight } from 'react-icons/fi';
import { AppState } from './_app';
import { useState, useEffect } from 'react'

import { data } from '../public/dummy_data/data';
import { useContext } from 'react/cjs/react.development';
import MiniVideoTile from '../components/MiniVideoTile/miniVideoTile';
import { useRouter } from 'next/router';
import miniImage from '../public/images/mini_video_tile.png'

export default function Home() {
  const [state] = useContext(AppState);
  useEffect(() => {
    const getData = async () => {
      if (state.contracts) {
        console.log(state.contracts)

        /// state.contract is the contract instance
        /// state.account is the account instance
        /// state.web3 is the web3 instance
        /// state.account.address is the account address
        await state.contracts.stream.methods.set(state.account.address, [["", "", "", false], "ravi", "urserpic"]).send({ from: state.account.address, });
        let my = await state.contracts.stream.methods.get(state.account.address).call();
        console.log("myAccount.address ", state.account.address);
        console.log("my ", my);
      }
    }
    getData();
  }, [state])



  return (
    <div style={{ height: "100%", color: "black" }}>
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
                  //  console.log(authInstance.isLoggedIn());
                  //  await authInstance.logout()
                  //  console.log(authInstance.isLoggedIn());
                }}
              />
            )
          }
          )
        }
      </div>
      <div style={{ marginTop: '31px' }} className={styles['live-now-bar-style']}>
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
