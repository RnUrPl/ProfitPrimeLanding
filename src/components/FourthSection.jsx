import React, { useRef, useEffect } from 'react';
import { Navigation, Pagination, Scrollbar } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';





const FourthSection = () => {

    const swiperRef = useRef(null);

    useEffect(() => {
      const swiper = swiperRef.current.swiper
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
    <section id='traders' className='traders'>
        <div className="trade_titile">Что говорят трейдеры о<br/> наших торговых системах</div>
        <div className="trade_group">
            <div className="trade_subtitle">Чтобы посмотреть сделки наших клиентов,<br/> нажмите на знак     возле имени</div>
            <div className="vector_group">
            <img src={require('./assets/vector1.png')} className='prv custom-prev disabled'/>
            <img src={require('./assets/vaector2.png')} className='nxt custom-next'/>
            </div>
        </div>
        <div class="sample-slider">
        <Swiper
          ref={swiperRef}
         modules={[Navigation]}
        spaceBetween={10} // расстояние между слайдами
        slidesPerView={3} // количество видимых слайдов
        navigation={{
          nextEl: '.nxt',
          prevEl: '.prv',
        }}
        // pagination={{ clickable: true }}
        // scrollbar={{ draggable: true }}
        >
        <div class="dop_css">
   
            <SwiperSlide>
                <div className="box">
                    <div className="box_header">
                        <img src={require('./assets/trader1.png')}className='box_img' alt='MOXCEH'/>
                        <div className="box_title_g">
                            <div className="box_title">Мохсен Азади</div>
                            <div className="box_sub">Forex + Аcademy</div>
                            <img src={require('./assets/stars1.png')} className="box-starts" alt='5 stars'></img>
                        </div>
                    </div>
                    <div className="box_subt">На старте покупал только систему для <br/>торговли на Forex. С инструкцией <br/>разобрался, попробовал сам выставить<br/> настройки для работы. Получалось<br/> делать 20% в день, но хотелось больше.<br/> Решил уточнить у ребят, как можно <br/>повысить профит. Вступил в академию, <br/>сразу изучил гайд по подбору брокеров </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="box">
                    <div className="box_header">
                    <img src={require('./assets/trader2.png')}className='box_img' alt='MAKSIM'/>
                        <div className="box_title_g">
                            <div className="box_title">Максим Александров</div>
                            <div className="box_sub">Binary + Global + Аcademy </div>
                            <img src={require('./assets/stars2.png')} className="box-starts" alt='4.5 stars'></img>
                        </div>
                    </div>
                    <div className="box_subt">Пробовал торговать Pocket Option с<br/> базовым роботом, баланс крутился, как<br/> надо Когда уже смог полноценно <br/>сосредоточиться на трейдинге, взял<br/> плагин, чтобы любых брокеров торговать, и <br/>академию, чтобы знать, где брать аккаунты <br/>оптом. Работаю 6-й месяц с 4 брокерами,<br/> ребятам спасибо - всё четко! </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="box">
                    <div className="box_header">
                    <img src={require('./assets/trader3.png')}className='box_img' alt='ARTEM'/>
                        <div className="box_title_g">
                            <div className="box_title">Артем Воронцов</div>
                            <div className="box_sub">Binary + Global </div>
                            <img src={require('./assets/stars3.png')} className="box-starts" alt='4 stars'></img>
                        </div>
                    </div>
                    <div className="box_subt">До бинарных опционов интересовался<br/> криптой и NFT. Сейчас жалею, что не <br/>узнал о торговых роботах раньше, не <br/>потерял бы десятки часов на всякие<br/> раздачи и догикоины. Разобрался с <br/>инструкцией, подключил плагин,<br/> начал торговать. Ничего сложного, я,<br/> даже будучи студентом журналистом, </div>
                </div>
                </SwiperSlide>
            <SwiperSlide>
                <div className="box">
                    <div className="box_header">
                    <img src={require('./assets/trader3.png')}className='box_img' alt='ARTEM'/>
                        <div className="box_title_g">
                            <div className="box_title">Артем Воронцов</div>
                            <div className="box_sub">Binary + Global </div>
                            <img src={require('./assets/stars3.png')} className="box-starts" alt='4 stars'></img>
                        </div>
                    </div>
                    <div className="box_subt">До бинарных опционов интересовался<br/> криптой и NFT. Сейчас жалею, что не <br/>узнал о торговых роботах раньше, не <br/>потерял бы десятки часов на всякие<br/> раздачи и догикоины. Разобрался с <br/>инструкцией, подключил плагин,<br/> начал торговать. Ничего сложного, я,<br/> даже будучи студентом журналистом, </div>
                </div>
                </SwiperSlide>
            <SwiperSlide>
                <div className="box">
                    <div className="box_header">
                    <img src={require('./assets/trader3.png')}className='box_img' alt='ARTEM'/>
                        <div className="box_title_g">
                            <div className="box_title">Артем Воронцов</div>
                            <div className="box_sub">Binary + Global </div>
                            <img src={require('./assets/stars3.png')} className="box-starts" alt='4 stars'></img>
                        </div>
                    </div>
                    <div className="box_subt">До бинарных опционов интересовался<br/> криптой и NFT. Сейчас жалею, что не <br/>узнал о торговых роботах раньше, не <br/>потерял бы десятки часов на всякие<br/> раздачи и догикоины. Разобрался с <br/>инструкцией, подключил плагин,<br/> начал торговать. Ничего сложного, я,<br/> даже будучи студентом журналистом, </div>
                </div>
                </SwiperSlide>
            <SwiperSlide>
                <div className="box">
                    <div className="box_header">
                    <img src={require('./assets/trader3.png')}className='box_img' alt='ARTEM'/>
                        <div className="box_title_g">
                            <div className="box_title">Артем Воронцов</div>
                            <div className="box_sub">Binary + Global </div>
                            <img src={require('./assets/stars3.png')} className="box-starts" alt='4 stars'></img>
                        </div>
                    </div>
                    <div className="box_subt">До бинарных опционов интересовался<br/> криптой и NFT. Сейчас жалею, что не <br/>узнал о торговых роботах раньше, не <br/>потерял бы десятки часов на всякие<br/> раздачи и догикоины. Разобрался с <br/>инструкцией, подключил плагин,<br/> начал торговать. Ничего сложного, я,<br/> даже будучи студентом журналистом, </div>
                </div>
                </SwiperSlide>
            <SwiperSlide>
                <div className="box">
                    <div className="box_header">
                    <img src={require('./assets/trader3.png')}className='box_img' alt='ARTEM'/>
                        <div className="box_title_g">
                            <div className="box_title">Артем Воронцов</div>
                            <div className="box_sub">Binary + Global </div>
                            <img src={require('./assets/stars3.png')} className="box-starts" alt='4 stars'></img>
                        </div>
                    </div>
                    <div className="box_subt">До бинарных опционов интересовался<br/> криптой и NFT. Сейчас жалею, что не <br/>узнал о торговых роботах раньше, не <br/>потерял бы десятки часов на всякие<br/> раздачи и догикоины. Разобрался с <br/>инструкцией, подключил плагин,<br/> начал торговать. Ничего сложного, я,<br/> даже будучи студентом журналистом, </div>
                </div>
                </SwiperSlide>
            <SwiperSlide>
                <div className="box">
                    <div className="box_header">
                    <img src={require('./assets/trader3.png')}className='box_img' alt='ARTEM'/>
                        <div className="box_title_g">
                            <div className="box_title">Артем Воронцов</div>
                            <div className="box_sub">Binary + Global </div>
                            <img src={require('./assets/stars3.png')} className="box-starts" alt='4 stars'></img>
                        </div>
                    </div>
                    <div className="box_subt">До бинарных опционов интересовался<br/> криптой и NFT. Сейчас жалею, что не <br/>узнал о торговых роботах раньше, не <br/>потерял бы десятки часов на всякие<br/> раздачи и догикоины. Разобрался с <br/>инструкцией, подключил плагин,<br/> начал торговать. Ничего сложного, я,<br/> даже будучи студентом журналистом, </div>
                </div>
                </SwiperSlide>
            <SwiperSlide>
                <div className="box">
                    <div className="box_header">
                    <img src={require('./assets/trader3.png')}className='box_img' alt='ARTEM'/>
                        <div className="box_title_g">
                            <div className="box_title">Артем Воронцов</div>
                            <div className="box_sub">Binary + Global </div>
                            <img src={require('./assets/stars3.png')} className="box-starts" alt='4 stars'></img>
                        </div>
                    </div>
                    <div className="box_subt">До бинарных опционов интересовался<br/> криптой и NFT. Сейчас жалею, что не <br/>узнал о торговых роботах раньше, не <br/>потерял бы десятки часов на всякие<br/> раздачи и догикоины. Разобрался с <br/>инструкцией, подключил плагин,<br/> начал торговать. Ничего сложного, я,<br/> даже будучи студентом журналистом, </div>
                </div>
            </SwiperSlide>
            
            
        </div>
        </Swiper>
        </div>
      
    </section>
  )
}

export default FourthSection