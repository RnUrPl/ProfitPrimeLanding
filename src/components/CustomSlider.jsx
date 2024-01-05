import React, { useRef, useEffect } from 'react';
import { Swiper } from 'swiper/react';
import { Navigation, Pagination, Scrollbar } from 'swiper/modules';
import 'swiper/swiper-bundle.css';


const CustomSlider = ({ children }) => {
  const swiperRef = useRef(null);

  useEffect(() => {
    const swiper = swiperRef.current.swiper;
    if (swiper) {
      swiper.on('slideChange', () => {
        const nextButton = document.querySelector('.custom-next');
        const prevButton = document.querySelector('.custom-prev');
        if (swiper.isBeginning) {
          prevButton.classList.add('disabled');
        } else {
          prevButton.classList.remove('disabled');
        }
        if (swiper.isEnd) {
          nextButton.classList.add('disabled');
        } else {
          nextButton.classList.remove('disabled');
        }
      });
    }
  }, []);

  return (
    <Swiper
      ref={swiperRef}
      modules={[Navigation]}
      spaceBetween={10}
      slidesPerView={3}
      navigation={{
        nextEl: '.custom-next',
        prevEl: '.custom-prev',
      }}
    >
      {children}
    </Swiper>
  );
};

export default CustomSlider;
