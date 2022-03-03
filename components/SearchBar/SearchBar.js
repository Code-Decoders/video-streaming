import styles from "./SearchBar.module.css";
import { FiSearch } from 'react-icons/fi';
import Image from 'next/image'

const SearchBar = ({setSearch, style, value, onClick}) => {
  return(
<<<<<<< HEAD
    <div className = {styles.navbase} height = "70px" style = {{ position: position ?? "relative", top: t ?? undefined, left: l ?? undefined, right: r ?? undefined }}>
    <input className = {styles.searchInput} value = {value} placeholder = "Search" onChange = {(e) => setSearch(e.target.value)}/>
=======
    <div className = {styles.navbase} height = "70px" style = {style}>
      <input className = {styles.searchInput} value = {value} placeholder = "Search" onChange = {(e) => setSearch(e.target.value)}/>
>>>>>>> f6f1a782ddb0032ed344090fb6c23537f0839a1e
      <FiSearch className = {styles.searchIcon} onClick = {onClick}/>
    </div>
  )
}


export default SearchBar;
