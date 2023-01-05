
import {  Grid, Typography } from '@mui/material';

import React from 'react';
import {  Zoom } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import 'react-slideshow-image/dist/styles.css'
const slideImages = [
    {
        
        url: 'https://invetex.themerex.net/wp-content/uploads/2016/04/slider_1.jpg',
        caption: 'We have Talented Teams',
        caption2: 'Economic services provided by the finance industry, which encompasses a broad range of businesses that manage money, including credit unions '

    },
    
    {
        url: 'https://invetex.themerex.net/wp-content/uploads/2016/04/slider_2.jpg',
      
      caption: 'The best business support ',
      caption2: 'Economic services provided by the finance industry, which encompasses a broad range of businesses that manage money, including credit unions '

    }, {
        url: 'https://invetex.themerex.net/wp-content/uploads/2016/04/slider_3.jpg',
      
        caption: 'consulting & investment ',
        caption2: 'Economic services provided by the finance industry, which encompasses a broad , including credit unions '
    },
 
  ];
  

export default function Slideshow() {
    return (
        <div className="slide-container">
       
      <Zoom duration = '2000' slidesToShow={1} indicators arrows = {false} >
       {slideImages.map((slideImage, index)=> (
          <div  style={{'backgroundImage': `url(${slideImage.url})`,backgroundSize:"cover", backgroundRepeat: "no-repeat",
          minHeight: 'calc(100vh - 64px)'}}
           className="each-slide nin" key={index}>
          <Typography textAlign="center"  style={{color: "white"}} fontSize={{xs: "15px" ,md: "50px"}}
          pt={{xs: "200px", md: "300px"}}>{slideImage.caption}</Typography>
          <Typography textAlign="center"  style={{color: "white"}}>{slideImage.caption2}</Typography>
          </div>
        ))} 
      </Zoom>
    </div>
    )
}