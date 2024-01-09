import React, { useRef, useEffect } from 'react';

import { Navigation, Pagination, Scrollbar } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';

const TeamSection = () => {

    const swiperRef = useRef(null);

    useEffect(() => {
      const swiper = swiperRef.current.swiper;
      if (swiper) {
        swiper.on('slideChange', () => {
          const nextButton = document.querySelector('.custom-next1');
          const prevButton = document.querySelector('.custom-prev1');
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
    <section className='team'>
        <span className='team_title'>НАША КОМАНДА</span>
        <div className="rg">
            <div></div>
            <div className="team_rg">
            <img src={require('./assets/vector1.png')} className='prv1 custom-prev1 disabled'/>
            <img src={require('./assets/vaector2.png')} className='nxt1 custom-next1'/>
        </div>
        </div>
      
        
        <div className="team_slider">
            
        <Swiper
          ref={swiperRef}
         modules={[Navigation]}
   
        spaceBetween={10} // расстояние между слайдами
        slidesPerView={1} // количество видимых слайдов
        navigation={{
          nextEl: '.nxt1',
          prevEl: '.prv1',
        }}
        breakpoints={{
          1400:{
              slidesPerView:4,
              
          }, 1200:{
            slidesPerView:3,
            
        },
        700:{
          slidesPerView:2
        }
      }}
        // pagination={{ clickable: true }}
        // scrollbar={{ draggable: true }}
        >
            <SwiperSlide>
            <div className="team_el">
                <img src={require('./assets/team1.png')} className='team_img'/>
                <span className='team_name'>Matvey Polozkov</span>
                <span className='team_sub'>Основатель и генеральный директор</span>
            </div>
            </SwiperSlide>
            <SwiperSlide>
            <div className="team_el">
                <img src={require('./assets/team2.png')} className='team_img'/>
                <span className='team_name'>Viktor Sysoev</span>
                <span className='team_sub'>Технический директор</span>
            </div>
            </SwiperSlide>
            <SwiperSlide>
            <div className="team_el">
            <img src={require('./assets/team3.png')} className='team_img'/>
                <span className='team_name'>Amelia Nowak</span>
                <span className='team_sub'>Руководитель отдела маркетинга</span>
            </div>
            </SwiperSlide>
            <SwiperSlide>
            <div className="team_el">
            <img src={require('./assets/team4.png')} className='team_img'/>
                <span className='team_name'>Nina Zhdanova</span>
                <span className='team_sub'>Дизайнер продуктов </span>
            </div>
            </SwiperSlide>
            <SwiperSlide>
            <div className="team_el">
            <img src={require('./assets/team5.png')} className='team_img'/>
                <span className='team_name'>Makar Zhukov</span>
                <span className='team_sub'>Разработчик программного обеспечения</span>
            </div>
            </SwiperSlide>
            <SwiperSlide>
            <div className="team_el">
            <img src={require('./assets/team6.png')} className='team_img'/>
                <span className='team_name'>Fyodor Klimov</span>
                <span className='team_sub'>Разработчик программного обеспечения</span>
            </div>
            </SwiperSlide>
            <SwiperSlide>
            <div className="team_el">
            <img src={require('./assets/team7.png')} className='team_img'/>
                <span className='team_name'>Leonid Kozlov</span>
                <span className='team_sub'>Разработчик программного обеспечения</span>
            </div>
            </SwiperSlide>
            <SwiperSlide>
            <div className="team_el">
            <img src={require('./assets/team8.png')} className='team_img'/>
                <span className='team_name'>Leander Vogel</span>
                <span className='team_sub'>Разработчик программного обеспечения</span>
            </div>
            </SwiperSlide>
            <SwiperSlide>
            <div className="team_el">
            <img src={require('./assets/team9.png')} className='team_img'/>
                <span className='team_name'>Dierk Baumann</span>
                <span className='team_sub'>Руководитель команды трейдеров</span>
            </div>
            </SwiperSlide>
            <SwiperSlide>
            <div className="team_el">
            <img src={require('./assets/team10.png')} className='team_img'/>
                <span className='team_name'>Lennart Vinter</span>
                <span className='team_sub'>Трейдер</span>
            </div>
            </SwiperSlide>
            <SwiperSlide>
            <div className="team_el">
            <img src={require('./assets/team11.png')} className='team_img'/>
                <span className='team_name'>Gordey Bobrov</span>
                <span className='team_sub'>Трейдер</span>
            </div>
            </SwiperSlide>
            <SwiperSlide>
            <div className="team_el">
            <img src={require('./assets/team12.png')} className='team_img'/>
                <span className='team_name'>Yaroslav Zimin</span>
                <span className='team_sub'>Трейдер</span>
            </div>
            </SwiperSlide>
        </Swiper>ś
        </div>
    </section>
  )
}

export default TeamSection