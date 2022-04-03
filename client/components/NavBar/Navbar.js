import Image from 'next/image';
import navbarstyle from './Navbar.module.css'
import SearchBar from "../SearchBar/SearchBar";
import { AppState } from '../../pages/_app';
import { useState } from "react";
import { FiPlusCircle, FiBell, FiUser } from 'react-icons/fi';
import { useContext } from "react";
import Link from 'next/link';

const NavBar = ({ bellClick }) => {

  const [search, setSearch] = useState("")
  const [state] = useContext(AppState)

  const Search = () => {
    console.log(search);
    setSearch("");
  }

  return (
    <div className={navbarstyle.base}>
      <div className={navbarstyle.search}>
        <SearchBar onClick={() => Search()} value={search} setSearch={setSearch} /></div>
      <Link href={'/create'}>
        <FiPlusCircle style={{ cursor: "pointer"}} className={navbarstyle.icon} />
      </Link>
      <FiBell style = {{ cursor: "pointer"}} className={navbarstyle.icon} onClick={bellClick} />
      <div className={navbarstyle.userclass}>
        <FiUser style = {{ cursor: "pointer"}} className={navbarstyle.icon} />
      </div>
    </div>
  )
}

export default NavBar;
