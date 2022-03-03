import Image from 'next/image';
import navbarstyle from './Navbar.module.css'
import SearchBar from "../SearchBar/SearchBar";
import { useState } from "react";
import { FiPlusCircle, FiBell, FiUser } from 'react-icons/fi';

<<<<<<< HEAD
const NavBar = ({route, plusClick, bellClick, userClick}) => {
=======
const NavBar = () => {
>>>>>>> f6f1a782ddb0032ed344090fb6c23537f0839a1e

  const [search, setSearch] = useState("")


  const Search = () => {
    console.log(search);
    setSearch("");
  }

<<<<<<< HEAD
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
=======
  return (
    <div className={navbarstyle.base}>
      <div className={navbarstyle.search}>
        <SearchBar onClick={() => Search()} value={search} setSearch={setSearch} /></div>
      <FiPlusCircle className={navbarstyle.pluscircle} />
      <FiBell className={navbarstyle.bell} />
      <div className={navbarstyle.userclass}>
        <FiUser className={navbarstyle.user} />
      </div>
>>>>>>> f6f1a782ddb0032ed344090fb6c23537f0839a1e
    </div>
  )
}

export default NavBar;
