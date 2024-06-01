import React, {useState} from 'react'

import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";



const SliderComponent = () => {
    // Configuration object for the Slider component
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,    
    };
    return (
        <div className="bg-white">
          <Slider {...settings}>
            <div>
              <img src="https://www.dhl.com/discover/adobe/dynamicmedia/deliver/dm-aid--9fb1bcbc-f8a5-4cc6-91d7-8be017eccf40/1920x998-India%20Import.jpg?quality=82&preferwebp=true" alt="Slide 1" />
            </div>
            <div>
              <img src="https://www.dhl.com/discover/adobe/dynamicmedia/deliver/dm-aid--9fb1bcbc-f8a5-4cc6-91d7-8be017eccf40/1920x998-India%20Import.jpg?quality=82&preferwebp=true" alt="Slide 2" />
            </div>
            <div>
              <img  src="https://www.dhl.com/discover/adobe/dynamicmedia/deliver/dm-aid--9fb1bcbc-f8a5-4cc6-91d7-8be017eccf40/1920x998-India%20Import.jpg?quality=82&preferwebp=true" alt="Slide 3" />
            </div>
            <div>
              <img src="https://www.dhl.com/discover/adobe/dynamicmedia/deliver/dm-aid--9fb1bcbc-f8a5-4cc6-91d7-8be017eccf40/1920x998-India%20Import.jpg?quality=82&preferwebp=true" alt="Slide 4" />
            </div>
          </Slider>
        </div>
      );
    };
    
    export default SliderComponent;
  