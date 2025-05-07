import React, { useEffect, useState } from 'react'
import { useLanguage } from '../../../Languages/LanguageContext'
import ProjectsImg from "/src/Imgs/ProjectsImgs/ProjectsTitleback.jpg"
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectCoverflow } from 'swiper/modules';
import ProjectsImges from "/src/assets/Components/Projects/ProjectsImgs.js";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
function Projects() {
    const {texts} = useLanguage();
    const [scroll, setScroll] = useState(0);
    const ScrollEffect =()=>{
        setScroll(window.scrollY);
    }
    useEffect(()=>{
        window.addEventListener("scroll", ScrollEffect);
    },[])
  return (
    <>
        <div className='ProjectTitle'>
            <div className='ProjectTitleContainer'>
                <img src={ProjectsImg} style={{transform: `translateY(${scroll * 0.3}px`,transition: 'transform 0.2s ease-out'}} className='BackgroudTitleProject'/>
                <motion.h1 initial={{opacity:0}} whileInView={{opacity:1}} transition={{duration:10}} style={{color:"white"}}>{texts.Projects.titlePart1} <span>{texts.Projects.titlePart2}</span></motion.h1>
            </div>
        </div>
        <section className='ProjectSlider'>
            <Swiper modules={[Navigation, Autoplay, EffectCoverflow]} effect='coverflow'  navigation autoplay={{delay: 8000, disableOnInteraction: false, pauseOnMouseEnter: true}} spaceBetween={50}slidesPerView={3}
                    breakpoints={{
                        900:{
                            slidesPerView:2
                        },
                        768:{
                            slidesPerView:2,
                        },
                        144:{
                            slidesPerView:1
                        },
                        1029:{
                            slidesPerView:2
                        },
                        1030:{
                            slidesPerView:3,
                        }
                    }} coverflowEffect={{
                        rotate: 50,
                        stretch: 0,
                        depth: 100,
                        modifier: 1,
                        slideShadows: true}}> 
                    {ProjectsImges.ProjectImgs.map((Images, index) => (
                        <SwiperSlide>
                            <motion.div initial={{opacity:0, translateY:"50px"}} whileInView={{opacity:1, translateY:"0px"}} transition={{duration:5}} key={index} className='projectCard'>

                                <img src={Images.Img} alt={Images.Img} />

                            </motion.div>
                        </SwiperSlide>            
                    ))}
                </Swiper>
        </section>      
    
    </>
  )
}

export default Projects