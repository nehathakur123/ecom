"use client";
import React from 'react'
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import HomeSectionCaroselData from '../../components/HomeSectionCarosel/HomeSectionCaroselData'

const HomeSectionCarosel = () => {
  const items = HomeSectionCaroselData.map((item)=> <img className="cursor-pointer" role="presentation" src={item.image} alt="" width={200} height={200}  ></img>)
   return( <AliceCarousel
       
        items={items}
        disableButtonsControls
        autoPlay
        autoPlayInterval={500}
        infinite
    />
   )
}

export default HomeSectionCarosel