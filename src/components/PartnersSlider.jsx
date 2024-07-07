import React from 'react';
import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';




var partnersLogo = Array.from({ length: 12}, (_, index) => require(`./assets/p${index + 1}.png`));




const PartnerLogosCarousel = () => {
  return (
    <div className='swipercont'>
    <Swiper
      
 
      loop={true}
      speed={5000}
      slidesPerView={2}
      spaceBetween={300}

   
      autoplay={{
        delay: 0,
        disableOnInteraction: false,
      


      }}
      breakpoints={{

        520:{
          slidesPerView: 2,
          spaceBetween:40,
        },

        850:{
          slidesPerView: 3,
          spaceBetween:40,
        },
      
        1200: {
          slidesPerView: 4,
          spaceBetween:40,

        },
  

        1600:{
          slidesPerView: 5,
          spaceBetween:40,
        },
        2000:{
          slidesPerView: 6,
          spaceBetween:40,
          
        }
      }}
      modules={[Autoplay]}

    >
      {partnersLogo.map((logo, index) => (
        <SwiperSlide  key={index}>
          <img src={logo} alt={`Partner logo ${index + 1}`} style={{ width: '260px' }} />
        </SwiperSlide>
      ))}
    </Swiper>
    </div>
  );
};

export default PartnerLogosCarousel;
