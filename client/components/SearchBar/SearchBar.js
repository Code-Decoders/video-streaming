import styles from "./SearchBar.module.css";
import { FiSearch } from 'react-icons/fi';
import Image from 'next/image'

const SearchBar = ({setSearch, style, value, onClick}) => {
  return(
    <div className = {styles.navbase} height = "70px" style = {style}>
      <input className = {styles.searchInput} value = {value} placeholder = "Search" onChange = {(e) => setSearch(e.target.value)}/>
      <FiSearch className = {styles.searchIcon} onClick = {onClick}/>
    </div>
  )
}


export default SearchBar;
