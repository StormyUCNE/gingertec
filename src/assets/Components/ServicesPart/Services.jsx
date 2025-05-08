import React, { useEffect, useState } from 'react'
import { useLanguage } from "/src/Languages/LanguageContext.jsx";
import HeadPhones from "/src/Imgs/ServicesContents/Img/HeadPhones.png"
import WebDesign from "/src/Imgs/ServicesContents/Img/WebDesignImg.jpg"
import GraphicDesign from "/src/Imgs/ServicesContents/Img/GraphicDesignImg.jpg"
import Consulting from "/src/Imgs/ServicesContents/Img/ConsultingImg.jpg"
import { motion } from 'framer-motion';
function Services() {
    const {texts} = useLanguage();

    const[scroll, setScroll] = useState(0);

    const ScrollFunction =()=>{
        setScroll(window.scrollY);
    }

    useEffect(()=>{
        window.addEventListener("scroll", ScrollFunction);
        return () => window.removeEventListener("scroll", ScrollFunction); 
    },[])
  return (
    <>
      <div className='Services'>
        <div className='ServicesGeneral'>
            <img src={HeadPhones} style={{transform: `translate(${scroll * 0.4}px, ${scroll * 0.4}px)`,transition: 'transform 0.2s ease-out'}} className='BackgroudServices'/>
            <motion.h1 initial={{opacity:0}} whileInView={{opacity:1}} transition={{duration:10}} style={{color:"white"}}>{texts.Services.title}</motion.h1>
        </div>
      </div>

      <section className='GeneralCard'>
          <div className='cards' style={{transform: `translateX(${scroll * 0.7}px)`, transition: 'transform 0.2s ease-out'}} >
            <div className='card cardone'>
                <img src={WebDesign} alt={WebDesign}/>
                <div className='textcard'>
                  <h4>{texts.Services.card1text1}</h4>
                  <span>
                    <h1>{texts.Services.card1text2}</h1>
                    <p>
                       {texts.Services.card1text3}
                    </p>
                    <a href="https://api.whatsapp.com/send/?phone=18294619483&text&type=phone_number&app_absent=0" target='blank'><button>{texts.Services.card1button}e</button></a>
                  </span>
                </div>
            </div>
            <div className='card cardtwo'>
                <img src={GraphicDesign} alt={GraphicDesign} />
                <div className='textcard'>
                  <h4>{texts.Services.card2text1}</h4>
                  <span>
                    <h1>{texts.Services.card2text2}</h1>
                    <p>
                        {texts.Services.card3text3}
                    </p>
                    <a href="https://api.whatsapp.com/send/?phone=18294619483&text&type=phone_number&app_absent=0" target='blank'><button>{texts.Services.card2button}</button></a>
                  </span>
                </div>
            </div>
            <div className='card cardthree'>
                <img src={Consulting} alt={Consulting}/>
                <div className='textcard'>
                  <h4>{texts.Services.card3text1}</h4>
                  <span>
                    <h1>{texts.Services.card3text2}</h1>
                    <p>
                        {texts.Services.card3text3}
                    </p>
                    <a href="https://api.whatsapp.com/send/?phone=18294619483&text&type=phone_number&app_absent=0" target='blank'><button>{texts.Services.card3button}</button></a>
                  </span>
                </div>
            </div>
          </div>
          
        </section>
    </>
  )
}

export default Services