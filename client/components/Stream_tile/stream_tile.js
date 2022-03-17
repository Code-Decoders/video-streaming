import { FiCheck } from 'react-icons/fi';
import styles from './stream_tile.module.css'
const StreamTile = ({name, content, id}) => {
    return(
        <div style = {{ display: "flex", width: "79%", alignItems: "center", paddingTop: '30px',  width: "100%"}}>
            <div style = {{ color: "white", flex: "1", display: "flex", flexDirection: "column" }}>
                <b style = {{ paddingBottom: "10px" }}>  {name}</b>
            {content}
        </div>
            <div>
                <div className={styles.button} onClick = {() => {
                    navigator.clipboard.writeText(content)
                    document.getElementById(`${'copy' + id}`).innerHTML = "Copied";
                }}>
                    <FiCheck/>
                   <div id={`${'copy' + id}`}>Copy</div> 
                </div>
            </div>
        </div>
    )
}

export default StreamTile
