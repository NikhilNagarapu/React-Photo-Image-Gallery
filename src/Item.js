import React from "react";
import { bool, string } from "prop-types";
import Magnifier from "react-magnifier";
//import { Swiper, SwiperSlide } from 'swiper/react';


const Item = React.memo(
  ({
      fullscreen, // fullscreen version of img
      isFullscreen,
      original,
  }) => {
      const itemSrc = isFullscreen ? fullscreen || original : original;
      return (
{//Tried implementing swipe function along with magnifier but I'm unable to achieve both of them simultaneously,
  //Either I am able to execute swipe functionality only or magnifier only
  
  /* <Swiper
      spaceBetween={50}
      slidesPerView={3}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide>Slide 1</SwiperSlide>
      <SwiperSlide>Slide 2</SwiperSlide>
      <SwiperSlide>Slide 3</SwiperSlide>
      <SwiperSlide>Slide 4</SwiperSlide>
      ...
    </Swiper> */}
          <Magnifier
            
              src={itemSrc}
              width="100%"
              height="80%"
              mgWidth={200}
              mgHeight={200}
          />
      );
  }
);

Item.propTypes = {
  fullscreen: string, // fullscreen version of img
  isFullscreen: bool,
  original: string.isRequired,
};

export default Item;