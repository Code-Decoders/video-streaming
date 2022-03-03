import styles from "./SearchBar.module.css";
import { FiSearch } from 'react-icons/fi';
import Image from 'next/image'

const SearchBar = ({setSearch, position, t, b, r, l, value, onClick}) => {
  return(
    <div className = {styles.navbase} height = "70px" style = {{ position: position ?? "relative", top: t ?? undefined, left: l ?? undefined, right: r ?? undefined }}>
    <input className = {styles.searchInput} value = {value} placeholder = "Search" onChange = {(e) => setSearch(e.target.value)}/>
      <FiSearch className = {styles.searchIcon} onClick = {onClick}/>
    </div>
  )
}


export default SearchBar;
