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
       
    
        navigation={{
          nextEl: '.nxt',
          prevEl: '.prv',
          
        }}
        breakpoints={{
            1400:{
                slidesPerView:3,
                centeredSlides: false,
            },
            990:{
                slidesPerView:2,
                centeredSlides: false,

            },
            0:{
             slidesPerView:1,
             centeredSlides:true,
            }
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
                    <div className="box_subt custom-scroll">На старте покупал только систему для торговли на Forex. С инструкцией разобрался, попробовал сам выставить настройки для работы. Получалось делать 20% в день, но хотелось больше. Решил уточнить у ребят, как можно повысить профит. Вступил в академию, сразу изучил гайд по подбору брокеров и настройке торговых пар. Повезло, в чате даже нашел парня, который занимается аккаунтами. Конечно, мне есть куда расти, но и сейчас всё неплохо. Сделки с одного из аккаунтов на видео. Всем удачи! </div>
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
                    <div className="box_subt custom-scroll">Пробовал торговать Pocket Option с базовым роботом, баланс крутился, как надо) Когда уже смог полноценно сосредоточиться на трейдинге, взял плагин, чтобы любых брокеров торговать, и академию, чтобы знать, где брать аккаунты оптом. Работаю 6-й месяц с 4 брокерами, ребятам спасибо - всё четко! </div>
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
                    <div className="box_subt custom-scroll">До бинарных опционов интересовался криптой и NFT. Сейчас жалею, что не узнал о торговых роботах раньше, не потерял бы десятки часов на всякие раздачи и догикоины. Разобрался с инструкцией, подключил плагин, начал торговать. Ничего сложного, я, даже будучи студентом журналистом, окупился за 2 дня плотной работы. Планирую покупать доступ в академию и осваивать великий и ужасный рынок форекс </div>
                </div>
                </SwiperSlide>
            <SwiperSlide>
                <div className="box">
                    <div className="box_header">
                    <img src={require('./assets/trader4.png')}className='box_img' alt='ARTEM'/>
                        <div className="box_title_g">
                            <div className="box_title">Виталий Савин
</div>
                            <div className="box_sub">Binary + Global + Аcademy  </div>
                            <img src={require('./assets/stars4.png')} className="box-starts" alt='4 stars'></img>
                        </div>
                    </div>
                    <div className="box_subt custom-scroll">Уже не первый год занимаюсь трейдингом с помощью роботов. До этого пользовался продуктами “оранжевой” конторы, но немного разочаровался в их службе поддержки и списке доступных брокеров. Перешел на Profit Prime относительно недавно, 5 месяцев назад. Плагин открыл для меня новый уровень торговли, о котором я раньше не думал. Сейчас эксперементирую и проверяю “жирных” брокеров. Прикольно, что в чате академии есть поставщики аккаунтов, что сильно упрощает работу. Продуктом для бинарок доволен, буду пробовать софт для форекса. </div>
                </div>
                </SwiperSlide>
            <SwiperSlide>
                <div className="box">
                    <div className="box_header">
                    <img src={require('./assets/trader5.png')}className='box_img' alt='ARTEM'/>
                        <div className="box_title_g">
                            <div className="box_title">Максим Козлов </div>
                            <div className="box_sub">Forex + Аcademy </div>
                            <img src={require('./assets/stars5.png')} className="box-starts" alt='4 stars'></img>
                        </div>
                    </div>
                    <div className="box_subt custom-scroll">Бог уберёг, увидел рекламу ребят до того, как начал торговать вручную. Конечно, купил ключ не сразу, почитал про торговые системы, глянул отзывы. Разобрался, как это работает, понял, что всё логично и это не “кнопка бабло”. После зарплаты купил софт для форекса. Ребят, я не знаю, как вы нашли своих разработчиков, но это пушка. В академии круто, что можно оперативно узнавать о новых парах, если брокер резко завышает спред. Пока только начинаю “путь” в трейдинге, поэтому не могу похвастаться внушительными суммами давних участников академии, но уже получается достаточно вкусно </div>
                </div>
                </SwiperSlide>
            <SwiperSlide>
                <div className="box">
                    <div className="box_header">
                    <img src={require('./assets/trader6.png')}className='box_img' alt='ARTEM'/>
                        <div className="box_title_g">
                            <div className="box_title">Руслан Ткачев</div>
                            <div className="box_sub">Forex + Аcademy  </div>
                            <img src={require('./assets/stars6.png')} className="box-starts" alt='4 stars'></img>
                        </div>
                    </div>
                    <div className="box_subt custom-scroll">До Profit Prime учился торговать на форекс вручную, расчерчивал графики и тестировал стратегии. К идее с роботами отнесся скептически, но когда прочитал принцип работы, решил попробовать. Две недели тренировался на демо-аккаунтах, чтобы убедиться в работоспособности. В чате подсказали, что на реально счете нужно учитывать комиссию при настройке, поэтому обошлось без “первого блина комом”, торговля идёт отлично и по сей день, уже работаю над фермой аккаунтов. Как человек, который пробовал и ручной, и автоматизированный способы торговли могу сказать, что это лучшее решение для новичков.  </div>
                </div>
                </SwiperSlide>
            <SwiperSlide>
                <div className="box">
                    <div className="box_header">
                    <img src={require('./assets/trader7.png')}className='box_img' alt='ARTEM'/>
                        <div className="box_title_g">
                            <div className="box_title">Злата Белоусова</div>
                            <div className="box_sub">Binary </div>
                            <img src={require('./assets/stars7.png')} className="box-starts" alt='4 stars'></img>
                        </div>
                    </div>
                    <div className="box_subt custom-scroll">Моё знакомство с Profit Prime началось ещё год назад. Тогда я написала ребятам, чтобы вернуть 500$, которые потеряла на Pocket Option. Удивилась, когда они сами пополнили мой аккаунт и не попросили “предоплату”, как это делали другие трейдеры, которым я писала до этого. Сначала думала, что ничего не получится, но после 1.000$ плюса уже сама не выдержала и спросила, как они это делают. Мне рассказали о программах, которые могут сами торговать без моего участия. Решила рискнуть и купила ключ на заработанные с ребятами деньги. С того дня прошел почти год, и я ни капли не жалею об этом решении. Если честно, стало немного груcтно, когда поняла, что мою зарплату за месяц может заработать какая-то хитрая машинка за один вечер  </div>
                </div>
                </SwiperSlide>
            <SwiperSlide>
                <div className="box">
                    <div className="box_header">
                    <img src={require('./assets/trader8.png')}className='box_img' alt='ARTEM'/>
                        <div className="box_title_g">
                            <div className="box_title">Константин Абрамов</div>
                            <div className="box_sub">Binary + Global + Аcademy </div>
                            <img src={require('./assets/stars3.png')} className="box-starts" alt='4 stars'></img>
                        </div>
                    </div>
                    <div className="box_subt custom-scroll">Первые месяцы работал только с Pocket Option. Слишком увлекся и разогнал баланс до 7.000$, из-за чего его заблокировали. Хоть и вывел с него под 2.000$, всё равно обида на покет. Решил попробовать новых брокеров, но оказалось, что тот же Binarium вводит задержку перед открытием сделки на 10 секунд. Поэтому написал ребятам, чтобы получить доступ к плагину и академии. В академии мне объяснили, где брать аккаунты и какие суммы выводить, чтобы их не блокировали. Разобрался с плагином, сейчас торгую на Olymp Trade и Binarum, никаких вопросов, разработчики софта красавцы. </div>
                </div>
                </SwiperSlide>
            <SwiperSlide>
                <div className="box">
                    <div className="box_header">
                    <img src={require('./assets/trader3.png')}className='box_img' alt='ARTEM'/>
                        <div className="box_title_g">
                            <div className="box_title">Роман Воробьёв</div>
                            <div className="box_sub">Binary + Global + Аcademy</div>
                            <img src={require('./assets/stars3.png')} className="box-starts" alt='4 stars'></img>
                        </div>
                    </div>
                    <div className="box_subt custom-scroll">Для меня знакомство с Profit Prime было максимально спонтанным. Совпало, что увидел рекламу, когда думал, чем заняться после предыдущей работы. Подписался, посмотрел на результаты, почитал про бинарные опционы и, что говорится, залетел с двух ног. Первую неделю просто читал чат и выписывал важные детали вроде промежутков времени с хорошей волатильностью для торговли софтом. Потому уже снял плагином задержку и погнал отбивать подписку. В конце месяца довольный, как слон, снял первые в жизни 107.000 на трейдинге и продлил подписку. Новичкам совет: не ленитесь и работайте каждый день, подписку можно отбить за вечер. Матвею отдельно спасибо за ответы на мои глупые вопросы вначале! </div>
                </div>
            </SwiperSlide>
            
            
        </div>
        </Swiper>
        </div>
      
    </section>
  )
}

export default FourthSection