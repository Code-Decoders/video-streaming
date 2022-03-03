import Image from 'next/image';
import navbarstyle from './Navbar.module.css'
import SearchBar from "../SearchBar/SearchBar";
import { useState } from "react";
import { FiPlusCircle, FiBell, FiUser } from 'react-icons/fi';

const NavBar = ({route, plusClick, bellClick, userClick}) => {

  const [search, setSearch] = useState("")

  const Search = () => {
      console.log(search);
    setSearch("");
  }

  return(
    <div className = {navbarstyle.base}>
    <div className = {navbarstyle.search}>    
        <SearchBar r = "40px" onClick = {() => Search()} value = {search} setSearch = {setSearch}/></div>
    <div className = {navbarstyle.groupIcons}>
        <FiPlusCircle className = {navbarstyle.pluscircle} onClick = {plusClick}/>
        <FiBell className = {navbarstyle.bell} onClick = {bellClick}/>
        <div className = {navbarstyle.userclass}>
        <FiUser className = {navbarstyle.user} onClick = {userClick}/></div>
    </div>
    </div>
  )
}

export default NavBar;
