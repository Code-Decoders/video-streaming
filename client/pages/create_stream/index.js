import AdminPlayer from '../../components/Admin_player/admin_player'
import StreamTile from '../../components/Stream_tile/stream_tile'
import styles from '../../styles/Home.module.css'

const CreateStream = () => {
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
            <div className = {styles.inputbase} style = {{ width: "50%", gap: "45px", display: "flex", flexDirection: "column", justifyContent: "start", alignSelf: "start", paddingTop: "5%", width: "520px", marginRight: "10%" }}>
                 <input className = {styles.input} placholder = "Name" />
                 <input className = {styles.input} placholder = "Type" />
                 <input className = {styles.input} placholder = "Username" />
            </div>
        </div>
    )
}
export default CreateStream
