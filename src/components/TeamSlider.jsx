import React , { useRef, useEffect } from 'react'
import 'swiper/swiper-bundle.css';
import { Navigation} from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

var teamImages = Array.from({ length: 8 }, (_, index) => require(`./assets/team${index + 1}.png`));

const TeamSlider = () => {
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
    const teamData = [
        { name: 'Matvey Polozkov', role: 'Основатель и генеральный директор' },
        { name: 'Viktor Sysoev', role: 'Технический директор'},
        { name: 'Amelia Nowak', role: 'Руководитель отдела маркетинга' },
        { name: 'Nina Zhdanova', role: 'Дизайнер продуктов'},
        { name: 'Makar Zhukov', role: 'Разработчик программного обеспечения'},
        { name: 'Fyodor Klimov', role: 'Разработчик программного обеспечения' },
        { name: 'Leonid Kozlov', role: 'Разработчик программного обеспечения'},
        { name: 'Yaroslav Zimin', role: 'Трейдер' },
      ];
    
  return (
    <div className="team_slider">
        <Swiper
          ref={swiperRef}
          modules={[Navigation]}
          spaceBetween={10}
          slidesPerGroup={2}
          slidesPerView={2}
          navigation={{ nextEl: '.nxt1', prevEl: '.prv1' }}
          breakpoints={{
            1400: { slidesPerView: 4 ,slidesPerGroup:4},

            530: { slidesPerView:3,slidesPerGroup:3 },
          }}
        >
          {teamData.map((teamMember, index) => (
            <SwiperSlide key={index}>
              <div className="team_el">
                
               
                <img src={teamImages[index]} className='team_img' alt={teamMember.name} />
      
                <span className='team_name'>{teamMember.name}</span>
                <span className='team_sub'>{teamMember.role}</span>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
  )
}

export default TeamSlider