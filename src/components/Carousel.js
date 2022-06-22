import React from 'react'
import styled from 'styled-components'
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import required modules
import { Pagination, Navigation, Autoplay, EffectCards } from "swiper";

import img1 from'../assets/Nfts/Kong.svg';
import img2 from'../assets/Nfts/Kong-1.svg';
import img3 from'../assets/Nfts/Kong-2.svg';
import img4 from'../assets/Nfts/Kong-3.svg';

import Arrow from '../assets/Arrow.svg';


const Container = styled.div`
width: 25vw;
height: 70vh;



.swiper{
    width: 100%;
    height: 100%;
}

.swiper-slide{
    background-color: ${props => props.theme.carouselColor};

    border-radius: 20px;

    display: flex;
    justify-content: center;
    align-items: center;
}


.swiper-button-next{
    color: ${props => props.theme.text};
    right: 0;
    width: 4rem;
    top: 60%;

    background-image: url(${Arrow});
    background-position: center;
    background-size: cover;

    &:after{
        display: none;
    }
}

.swiper-button-prev{
    color: ${props => props.theme.text};
    left: 0;
    top: 60%;
    width: 4rem;
    transform: rotate(180deg);
    background-image: url(${Arrow});
    background-position: center;
    background-size: cover;

    &:after{
        display: none;
    }
}
`

const Carousel = () => {
  return (
    <Container>
    <Swiper
    autoplay={{
        delay: 2000,
        disableOnInteraction:false,
    }}
    pagination={{
        type:'fraction',
    }}
    scrollbar={{
        draggable: true,
    }}
    navigation={true}
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards, Pagination, Navigation, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide><img src={img1} alt="The Kongs" /></SwiperSlide>
        <SwiperSlide><img src={img2} alt="The Kongs" /></SwiperSlide>
        <SwiperSlide><img src={img3} alt="The Kongs" /></SwiperSlide>
        <SwiperSlide><img src={img4} alt="The Kongs" /></SwiperSlide>

      </Swiper>
    </Container>

  )
}

export default Carousel