'use client';

import {Swiper,SwiperSlide} from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css'
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import './globals.css'



export default function MainCarousel(){
    return(
        <>  
        <Swiper
         navigation={true}
         loop={true}
         autoplay={{
            delay: 250000,				
            disableOnInteraction: false,
          }}
        modules={[Autoplay, Navigation, Pagination]}
        className= "mainSwiper"
         >
            <SwiperSlide>
                    <img src="carousel.webp"  alt="슬라이드이미지" className='slide_img' />    
            </SwiperSlide>
            <SwiperSlide>
                    <img src="carousel.webp" alt="슬라이드이미지" className='slide_img' />    
            </SwiperSlide>
            <SwiperSlide>
                    <img src="carousel.webp"  alt="슬라이드이미지" className='slide_img' />    
            </SwiperSlide>
            <SwiperSlide>
                    <img src="carousel.webp" alt="슬라이드이미지" className='slide_img' />    
            </SwiperSlide>
            <SwiperSlide>
                    <img src="carousel.webp"  alt="슬라이드이미지" className='slide_img' />    
            </SwiperSlide>
         </Swiper>
       

     </>  
    )
}