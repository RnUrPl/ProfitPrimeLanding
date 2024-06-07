import React, { useRef, useEffect, useState }  from 'react'
import { Navigation} from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import MK from './assets/MK.mp4'
import RT from './assets/RT.mp4'
import MA from './assets/MA.jpg'
import AV from './assets/AV.jpg'
import VS from './assets/VS.jpg'
import RM from './assets/1.mp4'
import ZB from './assets/ZB.jpg'
import KA from './assets/KA.jpg'
import coin from './assets/coin.png';
import RV from './assets/RV.jpg'
import TradersModal from './Modals/TradersModal';
import GU from './assets/gu.png'
import LA from './assets/la.png'
import LM from './assets/Lm.png'
import RS from './assets/RS.png'
import SP from './assets/sp.png';
import SD from './assets/sd.png'
var traderImages = Array.from({ length: 15}, (_, index) => require(`./assets/trader${index + 1}.png`));
var starImages = Array.from({ length: 15 }, (_, index) => require(`./assets/stars${index + 1}.png`));

const TradersSlider = ({t}) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedTrader, setSelectedTrader] = useState(null);
  
  
      var swiperRef = useRef(null);
      var tradersData = [
        { name:  t("gu"), sub: 'Plus + Аcademy', starsAlt: '4.5 stars' , text: t("gutxt"),modal:GU},
        { name: t("la"), sub: 'Plus', starsAlt: '5 stars',text:t("latxt"),modal :LA },
        { name: t("lm"), sub: 'Plus + Academy', starsAlt: '4 stars' ,text: t("lmtxt"), modal: LM},
        { name: t("rs"), sub: 'Plus', starsAlt: '4 stars',text: t("rstxt") , modal: RS},
        { name: t("sa"), sub: 'Plus + Аcademy', starsAlt: '4 stars',text:t("satxt"), modal: SP },
        { name: t("sd"), sub: 'Plus', starsAlt: '4 stars',text:t("sdtxt"), modal: SD},
        { name: t("rm"), sub: 'Forex + Аcademy', starsAlt: '5 stars' , text: t("rmtxt"),video:RM},
        { name: t("ma"), sub: 'Binary + Global + Аcademy', starsAlt: '4.5 stars',text:t("matxt"),modal :MA },
        { name: t("av"), sub: 'Binary + Global', starsAlt: '4 stars' ,text:t("avtxt"), modal: AV},
        { name: t("vs"), sub: 'Binary + Global + Аcademy', starsAlt: '4 stars',text:t("vstxt") , modal: VS},
        { name: t("mk"), sub: 'Forex + Аcademy', starsAlt: '4 stars',text:t("mktxt"), video: MK },
        { name: t("rt"), sub: 'Forex + Аcademy', starsAlt: '4 stars',text: t("rttxt") , video: RT},
        { name: t("zb") ,sub: 'Binary', starsAlt: '4 stars',text: t("zbtxt"), modal: ZB },
        { name:t("ka"), sub: 'Binary + Global + Аcademy', starsAlt: '4 stars',text: t("katxt"), modal: KA },
        { name: t("rv") ,sub: 'Binary + Global + Аcademy', starsAlt: '4 stars' ,text :t("rvtxt"), modal:RV},
      ];
  
      useEffect(() => {
        var swiper = swiperRef.current.swiper
        if (swiper) {
          swiper.on('slideChange', () => {
            var nextButton = document.querySelector('.custom-next');
            var prevButton = document.querySelector('.custom-prev');
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
    <div className="sample-slider">
    <Swiper
      ref={swiperRef}
      modules={[Navigation]}
      spaceBetween={10} 

      navigation={{
        nextEl: '.nxt',
        prevEl: '.prv',    
      }}
      breakpoints={{

          990:{
              slidesPerView:3,
              centeredSlides: false,
              slidesPerGroup:3
          },
          530:{
            slidesPerView:2,
            centeredSlides: false,
            slidesPerGroup:2
        },
          0:{
          slidesPerView:1,
          slidesPerGroup:1,

          }
      }}
    >
    <div className="dop_css">
    {tradersData.map((trader, index) => (
        <SwiperSlide key={index}>
          <div className="box">
            <div className="box_header">
              <img src={traderImages[index]} className='box_img' alt={trader.name} />
              <div className="box_title_g">
                <div className="box_title">
                  <div className="box_name">{trader.name}</div>
                  <img className='coins' src={coin} alt='coins' onClick={() => { setSelectedTrader(trader); setIsModalOpen(true);}} />
                </div>
                <div className="box_sub">{trader.sub}</div>
                <img src={starImages[index]} className="box-starts" alt={trader.starsAlt} />
              </div>
            </div>
            <div className="box_subt custom-scroll">{trader.text}</div>
          </div>
        </SwiperSlide>
      ))}
        
        
    </div>
    </Swiper>
    {isModalOpen && <TradersModal trader={selectedTrader} closeModal={() => setIsModalOpen(false)} />}
    </div>
    
  )
}

export default TradersSlider