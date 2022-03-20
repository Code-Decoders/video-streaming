import AdminPlayer from '../../components/Admin_player/admin_player'
import StreamTile from '../../components/Stream_tile/stream_tile'
import styles from '../../styles/Home.module.css'
import { useEffect, useState } from 'react'
import axios from 'axios';
import { useRouter } from 'next/router';
import { create } from '../../lib/livepeer';

const Create = () => {
    const router = useRouter()
    const [data, setData] = useState({
        title: "",
        type: "",
        description: "",
    })

    const [state, setState] = useState(null);

    async function createStream() {
        var name = prompt('Enter your Stream Name: ', 'Stream Name')
        if (name == null || name == "") {
            alert("Stream Name is required");
            router.back()
        }
        setData(val => {
            return { ...val, title: name }
        })
        var response = await create(name);
        if (response.data)
            setState(response.data)
    }

    useEffect(() => {
        createStream()
    }, [])


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
                    <input value={data.title} onChange={change} name={"title"} className={styles.input} placeholder="Title" disabled />
                    <input value={data.type} onChange={change} name={"type"} className={styles.input} placeholder="Type" />
                    <textarea value={data.username} onChange={change} name={"description"} className={styles.input} style={{ height: '100px' }} placeholder="Description" />
                </div>
            </div>
            <div>
                <StreamTile id="1" name="Stream Id" content={state.id} />
                <StreamTile id="2" name="Stream Key" content={state.streamKey} />
                <StreamTile id="3" name="RTMP Ingest URL" content="rtmp://rtmp.livepeer.com/live" />
                <StreamTile id="4" name="SRT Ingest URL" content={`srt://rtmp.livepeer.com:2935?streamid=${state.streamKey}`} />
                <StreamTile id="5" name="Playback URL" content={`https://cdn.livepeer.com/hls/${state.playbackId}/index.m3u8`} />
            </div>
        </div>
    )
}
export default Create
