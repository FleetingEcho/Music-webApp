import React, { useEffect, useState } from 'react';
import Swiper from "swiper";

import "swiper/css/swiper.css";
import { SliderContainer } from './style';

function Slider (props) {
  const [sliderSwiper, setSliderSwiper] = useState (null);
  const { bannerList } = props;

  useEffect (() => {
    if (bannerList.length && !sliderSwiper){
        let sliderSwiper = new Swiper(".slider-container", {
          loop: true,
          autoplay: {
            delay: 3000,
            disableOnInteraction: false,
          },
          pagination: {el:'.swiper-pagination'},
        });
        setSliderSwiper(sliderSwiper);
    }
  }, [bannerList.length, sliderSwiper]);
  
  return (
    <SliderContainer>
      <div className="before"></div>
      <div className="slider-container">
        <div className="swiper-wrapper">
          {
            bannerList.map ((slider, index) => {
              return (
                <div className="swiper-slide" key={index}>
                  <div className="slider-nav">
                    <img src={slider.pic} width="100%" height="100%" alt="推荐" />
                  </div>
                </div>
              );
            })
          }
        </div>
        <div className="swiper-pagination"></div>
      </div> 
    </SliderContainer>
  );
}
// 和纯组件shouldComponentUpdate一样，避免大量更新浪费资源
export default React.memo (Slider);


