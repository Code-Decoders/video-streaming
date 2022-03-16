import marketplace from '../../public/images/kindpng_7183640.png';
import Image from 'next/image';
import navbarstyle from './Navbar.module.css'
import SearchBar from "../SearchBar/SearchBar";
import { AppState } from '../../pages/_app';
import { useState } from "react";
import { FiPlusCircle, FiBell, FiUser } from 'react-icons/fi';
import { useContext } from "react";
import {useRouter} from 'next/router'

const NavBar = () => {
  const router = useRouter();
  const [search, setSearch] = useState("")
  const [state] = useContext(AppState)

  const Search = () => {
    console.log(search);
    setSearch("");
  }

  return (
    <div className={navbarstyle.base}>
      <div className={navbarstyle.search}>
        <SearchBar onClick={() => Search()} value={search} setSearch={setSearch} />
          <Image height = "25px" onClick = {() => router.push("/marketplace")} width = "50px" src = {marketplace} alt = "MarketPlace"/>
      </div>
      <FiPlusCircle className={navbarstyle.pluscircle} />
      <FiBell className={navbarstyle.bell} />
      <div className={navbarstyle.userclass}>
        <FiUser className={navbarstyle.user} />
      </div>
    </div>
  )
}

export default NavBar;
