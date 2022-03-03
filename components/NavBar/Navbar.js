import Image from 'next/image';
import navbarstyle from './Navbar.module.css'
import SearchBar from "../SearchBar/SearchBar";
import { useState } from "react";
import { FiPlusCircle, FiBell, FiUser } from 'react-icons/fi';

const NavBar = ({route}) => {

  const [search, setSearch] = useState("")

  const Search = () => {
      console.log(search);
    setSearch("");
  }

  return(
    <div className = {navbarstyle.base}>
    <div className = {navbarstyle.search}>    
        <SearchBar l = { -150 } onClick = {() => Search()} value = {search} setSearch = {setSearch}/></div>
    <div className = {navbarstyle.groupIcons}>
        <FiPlusCircle className = {navbarstyle.pluscircle}/>
        <FiBell className = {navbarstyle.bell}/>
        <FiUser className = {navbarstyle.user}/>
    </div>
    </div>
  )
}

export default NavBar;
