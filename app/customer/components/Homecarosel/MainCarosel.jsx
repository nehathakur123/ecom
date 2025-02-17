'use client';
import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import {MainCaroselData} from './MainCaroselData';
//



const MainCarosel = () => {
  const items = MainCaroselData.map((item)=> <img className="cursor-pointer" role="presentation" src={item.image} alt="" width={400} height={200}  ></img>)
   return( <AliceCarousel
       
        items={items}
        disableButtonsControls
        autoPlay
        autoPlayInterval={500}
        infinite
    />
   )
  };

export default MainCarosel;