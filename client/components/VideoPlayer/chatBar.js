import { useState } from 'react';
import styles from './VideoPlayer.module.css';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

const SideBar = () => {

  const [isOpen, setIsOpen] = useState(true);

  return(
    <div className = {styles['chat-bar-base']} style = {isOpen ? { width: "80%"}: {width: "10%"}}>
    <div style = {{ display: "flex",
        paddingLeft: "15px",
        justifyContent: "start",
        alignItems: "center",
        gap: "13%",
        height: "65px",
}}>
        <div onClick = {() => {setIsOpen(!isOpen)}} className = {styles['chat-bar-button']}>
            {isOpen ? <FiChevronRight style = {{ height: "20px", width: "25px"}}/>
              : <FiChevronLeft style = {{ height: "20px", width: "25px"}}/>}       
    </div>
      { isOpen ? <div style = {{animationDelay: "0.4s",justifySelf: "center", color: "white", fontSize: "20px"}}>
          Stream Chat
      </div> : <></>}
    </div>
    </div>
  )
}

export default SideBar
