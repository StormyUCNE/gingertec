import React, { createContext, useState, useContext } from "react";
import logo from "/src/Imgs/NavbarImges/Logo-Gingertec.svg"
import usalogo from "/src/Imgs/NavbarImges/UnitedStateflag.png"
import spainlogo from "/src/Imgs/NavbarImges/Spainflag.png"
import HambLogo from "/src/Imgs/NavbarImges/menuicon.png"
import close from "/src/Imgs/NavbarImges/close.png"
import { motion } from "framer-motion";
import { useLanguage } from "/src/Languages/LanguageContext.jsx";
function Navbar() {
    const [toggle, setToggle] = useState(false);
    const { texts, toggleToEnglish, toggleToSpanish } = useLanguage();
    const ToggleMenu = () => setToggle(!toggle);
  return (
    <>
        <motion.nav initial={{opacity:0, translateY:"-100px"}} animate={{opacity:1, translateY:"0px"}} transition={{duration:3, delay:2}} className='Navbar'>
            <div className='logo'>
                <img src={logo} alt={logo} />
            </div>

            <div className={`Menu MenuAdd ${toggle ? "MenuAdd" : "MenuRemove"}`}>
                <ul>
                    <li>{texts.navbar.NavbarOption1}</li>
                    <li>{texts.navbar.NavbarOption2}</li>
                    <li>{texts.navbar.NavbarOption3}</li>
                    <li>{texts.navbar.NavbarOption4}</li>
                    <li>{texts.navbar.NavbarOption5}</li>
                    <li>{texts.navbar.NavbarOption6}</li>
                    <li>{texts.navbar.NavbarOption7}</li>
                </ul>
                <img className='hamblogo' onClick={ToggleMenu} src={toggle ? close : HambLogo} alt={HambLogo} />
            </div>
          
            <div className='Lenguages'>
                <div className='Lengen' onClick={toggleToEnglish}>
                    <img src={usalogo} alt={usalogo} />
                    <p>en</p>
                </div>
                <div className='Lenges' onClick={toggleToSpanish}>
                    <img src={spainlogo} alt={spainlogo} />
                    <p>es</p>
                </div>
            </div>
        </motion.nav>
    </>
  )
}

export default Navbar