import React from 'react'
import { useState, useEffect } from 'react';
import { useLanguage } from "/src/Languages/LanguageContext.jsx";
import Review from "/src/Imgs/ReviewContents/Imgs/Reviewback.png"
import { motion } from 'framer-motion';
import { text } from 'framer-motion/client';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectCoverflow } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
function Reviews() {
    const {texts} = useLanguage();
     const[scroll, setScroll] = useState(0);
    const ScrollFunction =()=>{
        setScroll(window.scrollY);
    }
    useEffect(()=>{
        window.addEventListener("scroll", ScrollFunction)
    },[])
  return (
    <>
            <div className='ReviewTitle'>
                <div className='TitleTextContainer'>
                    <img src={Review} style={{transform: `translateY(${scroll * 0.2}px`,transition: 'transform 0.2s ease-out'}} className='BackgroudTitleReview'/>
                    <motion.h1 initial={{opacity:0}} whileInView={{opacity:1}} transition={{duration:10}} style={{color:"white"}}>{texts.Reviews.titlePart1} <span>{texts.Reviews.titlePart2}</span></motion.h1>
                </div>
            </div>
            <section className='ReviewsSlider'>
            <Swiper modules={[Navigation, Pagination, Autoplay, EffectCoverflow]} effect='coverflow'  navigation pagination={{ clickable: true }} autoplay={{delay: 8000, disableOnInteraction: false, pauseOnMouseEnter: true}} spaceBetween={50}slidesPerView={3}
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
                    {texts.Reviews?.People?.map((person, index) => (
                        <SwiperSlide>
                            <motion.div initial={{opacity:0, translateY:"50px"}} whileInView={{opacity:1, translateY:"0px"}} transition={{duration:5}} key={index} className='reviewCard'>
                                <div className='profileinformation'>
                                    <img src={person.profile} alt={person.profile} />
                                    <h3>{person.name}</h3>
                                    <h4>{person.charge}</h4>
                                </div>
                                <p>{person.comment}</p> 
                            </motion.div>
                        </SwiperSlide>            
                    ))}
                </Swiper>
            </section>
        </>
  )
}

export default Reviews