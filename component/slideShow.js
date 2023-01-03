
import {  Grid } from '@mui/material';

import React from 'react';
import {  Zoom } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import 'react-slideshow-image/dist/styles.css'
const slideImages = [
    {
        url: 'bg1.jpg',
      
        caption: 'Providing A Professional & Relaible Service'
    },
     
    {
      url: 'bg2.jpg',
      
      caption: 'Providing A Professional & Relaible Service'
    }, {
        url: 'bg3.jpg',
      
        caption: 'Providing A Professional & Relaible Service'
    },
 
  ];
  

export default function Slideshow() {
    return (
        <div className="slide-container">
       
      <Zoom duration = '2000' slidesToShow={1} indicators arrows = {false}>
       {slideImages.map((slideImage, index)=> (
          <div  style={{'backgroundImage': `url(${slideImage.url})`,backgroundSize:"cover",minHeight: 'calc(100vh - 64px)'}}
           className="each-slide nin" key={index}>
            <div >
             
              
            </div>
          </div>
        ))} 
      </Zoom>
    </div>
    )
}