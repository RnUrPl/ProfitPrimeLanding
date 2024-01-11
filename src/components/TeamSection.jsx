import React, { useRef, useEffect } from 'react';
import { Navigation} from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';

import vector1 from './assets/vector1.png'
import vector2 from './assets/vaector2.png'

var teamImages = Array.from({ length: 12 }, (_, index) => require(`./assets/team${index + 1}.png`));
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

  const teamData = [
    { name: 'Matvey Polozkov', role: 'Основатель и генеральный директор' },
    { name: 'Viktor Sysoev', role: 'Технический директор'},
    { name: 'Amelia Nowak', role: 'Руководитель отдела маркетинга' },
    { name: 'Nina Zhdanova', role: 'Дизайнер продуктов'},
    { name: 'Makar Zhukov', role: 'Разработчик программного обеспечения'},
    { name: 'Fyodor Klimov', role: 'Разработчик программного обеспечения' },
    { name: 'Leonid Kozlov', role: 'Разработчик программного обеспечения'},
    { name: 'Leander Vogel', role: 'Разработчик программного обеспечения'  },
    { name: 'Dierk Baumann', role: 'Руководитель команды трейдеров'},
    { name: 'Lennart Vinter', role: 'Трейдер'},
    { name: 'Gordey Bobrov', role: 'Трейдер'},
    { name: 'Yaroslav Zimin', role: 'Трейдер' },
  ];

  return (
    <section className='team'>
      <span className='team_title'>НАША КОМАНДА</span>
      <div className="rg">
        <div></div>
        <div className="team_rg">
          <img src={vector1} className='prv1 custom-prev1 disabled' alt='Previous'/>
          <img src={vector2} className='nxt1 custom-next1' alt='Next'/>
        </div>
      </div>

      <div className="team_slider">
        <Swiper
          ref={swiperRef}
          modules={[Navigation]}
          spaceBetween={10}
          slidesPerView={2}
          navigation={{ nextEl: '.nxt1', prevEl: '.prv1' }}
          breakpoints={{
            1400: { slidesPerView: 4 },

            700: { slidesPerView:3 },
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
    </section>
  );
};

export default TeamSection;
