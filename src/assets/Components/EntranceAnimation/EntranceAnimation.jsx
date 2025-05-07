import React from 'react'
import { motion, AnimatePresence } from "framer-motion";
import logo from "/src/Imgs/NavbarImges/Logo-Gingertec.svg"
function EntranceAnimation() {
  return (
    <motion.div initial={{opacity:1, display: "block"}} animate={{opacity:0, zIndex:"50", display:"none"}} transition={{duration:2, delay: 3}} className='EntranceAnimation'>
        <motion.img initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} transition={{duration:5}} src={logo} alt={logo} />
    </motion.div>
  )
}

export default EntranceAnimation