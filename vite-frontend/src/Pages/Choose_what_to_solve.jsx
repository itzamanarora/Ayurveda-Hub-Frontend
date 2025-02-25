import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay } from "swiper/modules";
import './Home.css';
import Card_1 from '../Components/Card/Card_1';


function Choose_what_to_solve({heading, subheading}) {
    return(
        <div className="card1-container">
        <div className="heading-container">
          <h1 className="card-heading">{heading}</h1>
          <p className="car-subheading">{subheading}</p>
        </div>
          <Swiper
            slidesPerView={4}   // 4 cards visible 
            autoplay={{ 
              delay: 2000, 
              disableOnInteraction: false 
            }}  // Autoplay with delay of 3 seconds
            modules={[Autoplay]}
            breakpoints={{
              320: { slidesPerView: 1 },   // Mobile: 1 card
              768: { slidesPerView: 2 },   // Tablets: 2 cards
              1024: { slidesPerView: 4 }   // Desktop: 4 cards
            }}
          >
            <SwiperSlide><Card_1 src={'./Period-health.svg'} heading={'Women'} subheading={`Period Health`} /></SwiperSlide>
            <SwiperSlide><Card_1 src={'./Sexual-health.svg'} heading={'Men'} subheading={`Sexual Health`} /></SwiperSlide>
            <SwiperSlide><Card_1 src={'./Hair-health.svg'} heading={'All Genders'} subheading={`Hair Health`} /></SwiperSlide>
            <SwiperSlide><Card_1 src={'./Mental-health.svg'} heading={'All Genders'} subheading={`Mental Health`} /></SwiperSlide>
            <SwiperSlide><Card_1 src={'./Healthy-food.svg'} heading={'All Genders'} subheading={`Healthy Food`} /></SwiperSlide>
            <SwiperSlide><Card_1 src={'./Healthy-food.svg'} heading={'All Genders'} subheading={`Healthy Food`} /></SwiperSlide>
            <SwiperSlide><Card_1 src={'./Healthy-food.svg'} heading={'All Genders'} subheading={`Healthy Food`} /></SwiperSlide>
            <SwiperSlide><Card_1 src={'./Healthy-food.svg'} heading={'All Genders'} subheading={`Healthy Food`} /></SwiperSlide>
          </Swiper>
      </div>
    )
}  

export default Choose_what_to_solve;