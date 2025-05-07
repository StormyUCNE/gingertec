import React from 'react'
import { useLanguage } from "/src/Languages/LanguageContext.jsx";
import BrandingWoman from "/src/Imgs/HeroImges/BrandingWoman.png"
import IconFlotan1 from "/src/Imgs/HeroImges/IconFlotan1.png"
import IconFlotan2 from "/src/Imgs/HeroImges/IconFlotan2.png"
import { motion } from 'framer-motion';
function Hero() {
    const { texts } = useLanguage();
  return (
    <>
        <section className='HeroGeneral'>
            <div className='LeftContent'>
                <motion.h1 initial={{opacity:0, translateY:"-100px"}} animate={{opacity:1, translateY:"0px"}} transition={{duration:3, delay:7}}  className='text1Hero'>{texts.hero.HeroText1}</motion.h1>
                <motion.h1 initial={{opacity:0, translateX:"-100px"}} animate={{opacity:1, translateX:"0px"}} transition={{duration:4, delay:8}} className='text2Hero'>{texts.hero.HeroText2} <span>{texts.hero.HeroText3}</span></motion.h1>
                <motion.h1 initial={{opacity:0, translateX:"-100px"}} animate={{opacity:1, translateX:"0px"}} transition={{duration:5,  delay:9}} className='text4Hero'>🤝{texts.hero.HeroText4}</motion.h1>
                <motion.h1 initial={{opacity:0, translateX:"-100px"}} animate={{opacity:1, translateX:"0px"}} transition={{duration:6,  delay:10}} className='text5Hero'>😊{texts.hero.HeroText5}</motion.h1>
            </div>
            <div className='RightContent'>
              <motion.div initial={{opacity:0, scale:0}} animate={{opacity:1, scale:1}} transition={{duration:3, delay:4}} className='Radious'></motion.div>
              <div className='IntoRadious' >
                  <motion.img initial={{opacity:0, translateY:"100px"}} animate={{opacity:1, translateY:"0px"}} transition={{duration:3, delay:7}} src={BrandingWoman} alt={BrandingWoman} />
                  <motion.img initial={{opacity:0, scale:0}} animate={{opacity:1, scale:1}} transition={{duration:3, delay:8}} src={IconFlotan1} alt={IconFlotan1} />
                  <motion.img initial={{opacity:0, scale:0}} animate={{opacity:1, scale:1}} transition={{duration:3, delay:9}} src={IconFlotan2} alt={IconFlotan2} />
              </div>
              
            </div>
        </section>
    </>
  )
}

export default Hero