import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay } from "swiper/modules";
import './Home.css';
import Card_1 from '../../Components/Card/Card_1';
import { Link } from 'react-router-dom';


function Choose_what_to_solve({ heading, subheading }) {
  return (
    <div className="card1-container">
      <div className="heading-container">
        <h1 className="card-heading">{heading}</h1>
        <p className="card-subheading">{subheading}</p>
      </div>
      <Swiper
        slidesPerView={4}   // 4 cards visible 
        autoplay={{
          delay: 2000,
          disableOnInteraction: false
        }}  // Autoplay with delay of 3 seconds
        modules={[Autoplay]}
        breakpoints={{
          320: { slidesPerView: 3 },   // Mobile: 1 card
          768: { slidesPerView: 4 },   // Tablets: 2 cards
          1024: { slidesPerView: 4 }   // Desktop: 4 cards
        }}
      >
        <SwiperSlide><Link to={'health'} style={{textDecoration:'none'}}><Card_1 src={'./assets/img-period-health.svg'} heading={'Women'} subheading={`Period Health`}/></Link></SwiperSlide>
        <SwiperSlide><Link to={'health'} style={{textDecoration:'none'}}><Card_1 src={'./assets/img-sexual-health.svg'} heading={'Men'} subheading={`Sexual Health`} /></Link></SwiperSlide>
        <SwiperSlide><Link to={'health'} style={{textDecoration:'none'}}><Card_1 src={'./assets/img-hair-health.svg'} heading={'All Genders'} subheading={`Hair Health`} /></Link></SwiperSlide>
        <SwiperSlide><Link to={'health'} style={{textDecoration:'none'}}><Card_1 src={'./assets/img-mental-health.svg'} heading={'All Genders'} subheading={`Mental Health`} /></Link></SwiperSlide>
        <SwiperSlide><Link to={'health'} style={{textDecoration:'none'}}><Card_1 src={'./assets/img-healthy-food.svg'} heading={'All Genders'} subheading={`Healthy Food`} /></Link></SwiperSlide>
        <SwiperSlide><Link to={'health'} style={{textDecoration:'none'}}><Card_1 src={'./assets/img-period-health.svg'} heading={'All Genders'} subheading={`Healthy Skin`} /></Link></SwiperSlide>
      </Swiper>
    </div>
  )
}

export default Choose_what_to_solve;