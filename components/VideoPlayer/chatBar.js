import { useState } from 'react';
import styles from './VideoPlayer.module.css';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

const SideBar = () => {

  const [isOpen, setIsOpen] = useState(true);

  return(
    <div className = {styles['chat-bar-base']} style = {isOpen ? { width: "80%"}: {width: "10%"}}>
          <div onClick = {() => {setIsOpen(!isOpen)}} className = {styles['chat-bar-button']}>
            {isOpen ? <FiChevronRight style = {{ height: "20px", width: "25px"}}/>
              : <FiChevronLeft style = {{ height: "20px", width: "25px"}}/>}
          </div>

    </div>
  )
}

export default SideBar
