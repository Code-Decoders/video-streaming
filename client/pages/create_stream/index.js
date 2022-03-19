import AdminPlayer from '../../components/Admin_player/admin_player'
import StreamTile from '../../components/Stream_tile/stream_tile'
import styles from '../../styles/Home.module.css'
import { useState } from 'react'

const CreateStream = () => {

    const [data, setData] = useState({
        title: "",
        type: "",
        username: "",
    })

    const change = (e) => {
        e.preventDefault();
        setData(prevData => {
            return{
                ...prevData,
                [e.target.name]: e.target.value,
            }
        })
    }

    return(
        <div style = {{ display: "flex", justifyContent: "space-between", alignItems: "center", paddingLeft: "40px",}}>
            <div style = {{ width: "50%", display: 'flex', justifyContent: "center", flexDirection: "column"}}>
                <AdminPlayer/>
                <div>
                    <StreamTile id = "1" name = "Stream Id" content = "adc5468b-6b89-4c09-ada9-0a34bef54eb5"/>
                    <StreamTile id = "2" name = "Stream Key" content = "81d5-8vvs-4g3v-duyf"/>
                    <StreamTile id = "3" name = "RTMP Ingest URL" content = "rtmp://rtmp.livepeer.com/live"/>
                    <StreamTile id = "4" name = "SRT Ingest URL" content = "srt://rtmp.livepeer.com:2935?streamid=adc5-90gj-72hv-ykff"/>
                    <StreamTile id = "5" name = "Playback URL" content = "https://cdn.livepeer.com/hls/adc57gd4cv93rhom/index.m3u8"/>
                </div>
            </div>
            <div className = {styles.inputbase} >
                 <input value = {data.title} onChange = {change} name = {"title"} className = {styles.input} placeholder = "Title"/>
                 <input value = {data.type} onChange = {change} name = {"type"} className = {styles.input} placeholder = "Type" />
                 <input value = {data.username} onChange = {change} name = {"username"} className = {styles.input} placeholder = "Username" />
            </div>
        </div>
    )
}
export default CreateStream
