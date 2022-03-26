import AdminPlayer from '../../components/Admin_player/admin_player'
import StreamTile from '../../components/Stream_tile/stream_tile'
import styles from '../../styles/Home.module.css'
import { useEffect, useState } from 'react'
import axios from 'axios';
import { useRouter } from 'next/router';
import { create } from '../../lib/livepeer';
import { useContext } from 'react/cjs/react.development';
import { AppState } from '../_app';

const Create = () => {
    const router = useRouter()
    const [data, setData] = useState({
        title: "",
        type: "",
        description: "",
        isActive: false,
    })

    const [state, setState] = useState(null);

    const [stream, setStream] = useState(null);

    const [appState] = useContext(AppState);

    async function getData() {
        var response = await create(appState.account.address);
        console.log(response)
        var myStream = await appState.contracts.stream.methods.get(appState.account.address).call();
        setStream(myStream);
        console.log(myStream)
        setData(val => {
            return {
                ...val,
                title: myStream.stream.title,
                type: '',
                description: myStream.stream.description,
                isActive: myStream.stream.isActive,
            }
        })
        if (response.data[0])
            setState(response.data[0])
    }

    useEffect(() => {
        getData()
    }, [])

    async function createStream() {
        await appState.contracts.stream.methods.set(appState.account.address, [[`https://cdn.livepeer.com/hls/${state.playbackId}/index.m3u8`, data.title, data.description, !stream.stream.isActive], stream.name, stream.avatar]).send({ from: appState.account.address, });
        setData(val => {
            return {
                ...val,
                isActive: !val.isActive,
            }
        })
    }


    const change = (e) => {
        e.preventDefault();
        setData(prevData => {
            return {
                ...prevData,
                [e.target.name]: e.target.value,
            }
        })
    }

    if (!state) {
        return <div>Loading...</div>
    }

    return (
        <div style={{ padding: '40px' }}>
            <div style={{ display: "flex", gap: '0 40px', alignItems: 'center' }}>
                <div style={{ display: 'flex', flex: 1.2, justifyContent: "center", flexDirection: "column" }}>
                    <AdminPlayer src={`https://cdn.livepeer.com/hls/${state.playbackId}/index.m3u8`} />
                </div>
                <div className={styles.inputbase} >
                    <input value={data.title} onChange={change} name={"title"} className={styles.input} placeholder="Title" />
                    <input value={data.type} onChange={change} name={"type"} className={styles.input} placeholder="Type" />
                    <textarea value={data.description} onChange={change} name={"description"} className={styles.input} style={{ height: '100px' }} placeholder="Description" />
                </div>
            </div>
            <div style={{ display: 'flex', alignItems: 'flex-start' }}>

                <div style={{ flex: 1 }}>
                    <StreamTile id="1" name="Stream Id" content={state.id} />
                    <StreamTile id="2" name="Stream Key" content={state.streamKey} />
                    <StreamTile id="3" name="RTMP Ingest URL" content="rtmp://rtmp.livepeer.com/live" />
                    <StreamTile id="4" name="SRT Ingest URL" content={`srt://rtmp.livepeer.com:2935?streamid=${state.streamKey}`} />
                    <StreamTile id="5" name="Playback URL" content={`https://cdn.livepeer.com/hls/${state.playbackId}/index.m3u8`} />
                </div>
                <div onClick={createStream} style={{ background: 'transparent', border: '1px solid var(--primary)', padding: '8px 10px', color: !data.isActive ? 'red' : 'white', borderRadius: '5px', width: '200px', display: 'flex', justifyContent: 'center' }}>{!data.isActive ? 'Go Live' : 'End Stream'}</div>
            </div>
        </div>
    )
}
export default Create
