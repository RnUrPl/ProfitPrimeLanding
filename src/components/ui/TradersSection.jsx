import React, { useRef, useEffect, useState } from 'react';
import { Navigation} from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import coin from '../assets/coin.png';
import vector1 from '../assets/vector1.png'
import vector2 from '../assets/vaector2.png'
import TradersModal from '../Modals/TradersModal';
import MK from '../assets/MK.mp4'
import RT from '../assets/RT.mp4'
import MA from '../assets/MA.jpg'
import AV from '../assets/AV.jpg'
import VS from '../assets/VS.jpg'
import RM from '../assets/1.mp4'
import ZB from '../assets/ZB.jpg'
import KA from '../assets/KA.jpg'
import RV from '../assets/RV.jpg'

var traderImages = Array.from({ length: 9 }, (_, index) => require(`../assets/trader${index + 1}.png`));
var starImages = Array.from({ length: 9 }, (_, index) => require(`../assets/stars${index + 1}.png`));


const TradersSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedTrader, setSelectedTrader] = useState(null);




    var swiperRef = useRef(null);

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

    var tradersData = [
      { name: 'Роберт Массэй', sub: 'Forex + Аcademy', starsAlt: '5 stars' , text: 'На старте покупал только систему для торговли на Forex. С инструкцией разобрался, попробовал сам выставить настройки для работы. Получалось делать 20% в день, но хотелось больше. Решил уточнить у ребят, как можно повысить профит. Вступил в академию, сразу изучил гайд по подбору брокеров и настройке торговых пар. Повезло, в чате даже нашел парня, который занимается аккаунтами. Конечно, мне есть куда расти, но и сейчас всё неплохо. Сделки с одного из аккаунтов на видео. Всем удачи!',video:RM},
      { name: 'Максим Александров', sub: 'Binary + Global + Аcademy', starsAlt: '4.5 stars',text:'Пробовал торговать Pocket Option с базовым роботом, баланс крутился, как надо) Когда уже смог полноценно сосредоточиться на трейдинге, взял плагин, чтобы любых брокеров торговать, и академию, чтобы знать, где брать аккаунты оптом. Работаю 6-й месяц с 4 брокерами, ребятам спасибо - всё четко! ',modal :MA },
      { name: 'АРТЕМ ВОРОНЦОВ', sub: 'Binary + Global', starsAlt: '4 stars' ,text:'До бинарных опционов интересовался криптой и NFT. Сейчас жалею, что не узнал о торговых роботах раньше, не потерял бы десятки часов на всякие раздачи и догикоины. Разобрался с инструкцией, подключил плагин, начал торговать. Ничего сложного, я, даже будучи студентом журналистом, окупился за 2 дня плотной работы. Планирую покупать доступ в академию и осваивать великий и ужасный рынок форекс ', modal: AV},
      { name: 'Виталий Савин', sub: 'Binary + Global + Аcademy', starsAlt: '4 stars',text:'Уже не первый год занимаюсь трейдингом с помощью роботов. До этого пользовался продуктами “оранжевой” конторы, но немного разочаровался в их службе поддержки и списке доступных брокеров. Перешел на Profit Prime относительно недавно, 5 месяцев назад. Плагин открыл для меня новый уровень торговли, о котором я раньше не думал. Сейчас эксперементирую и проверяю “жирных” брокеров. Прикольно, что в чате академии есть поставщики аккаунтов, что сильно упрощает работу. Продуктом для бинарок доволен, буду пробовать софт для форекса.' , modal: VS},
      { name: 'Максим Козлов', sub: 'Forex + Аcademy', starsAlt: '4 stars',text:'Бог уберёг, увидел рекламу ребят до того, как начал торговать вручную. Конечно, купил ключ не сразу, почитал про торговые системы, глянул отзывы. Разобрался, как это работает, понял, что всё логично и это не “кнопка бабло”. После зарплаты купил софт для форекса. Ребят, я не знаю, как вы нашли своих разработчиков, но это пушка. В академии круто, что можно оперативно узнавать о новых парах, если брокер резко завышает спред. Пока только начинаю “путь” в трейдинге, поэтому не могу похвастаться внушительными суммами давних участников академии, но уже получается достаточно вкусно ', video: MK },
      { name: 'Руслан Ткачев', sub: 'Forex + Аcademy', starsAlt: '4 stars',text:'До Profit Prime учился торговать на форекс вручную, расчерчивал графики и тестировал стратегии. К идее с роботами отнесся скептически, но когда прочитал принцип работы, решил попробовать. Две недели тренировался на демо-аккаунтах, чтобы убедиться в работоспособности. В чате подсказали, что на реально счете нужно учитывать комиссию при настройке, поэтому обошлось без “первого блина комом”, торговля идёт отлично и по сей день, уже работаю над фермой аккаунтов. Как человек, который пробовал и ручной, и автоматизированный способы торговли могу сказать, что это лучшее решение для новичков.', video: RT},
      { name: 'Злата Белоусова', sub: 'Binary', starsAlt: '4 stars',text:'Моё знакомство с Profit Prime началось ещё год назад. Тогда я написала ребятам, чтобы вернуть 500$, которые потеряла на Pocket Option. Удивилась, когда они сами пополнили мой аккаунт и не попросили “предоплату”, как это делали другие трейдеры, которым я писала до этого. Сначала думала, что ничего не получится, но после 1.000$ плюса уже сама не выдержала и спросила, как они это делают. Мне рассказали о программах, которые могут сами торговать без моего участия. Решила рискнуть и купила ключ на заработанные с ребятами деньги. С того дня прошел почти год, и я ни капли не жалею об этом решении. Если честно, стало немного груcтно, когда поняла, что мою зарплату за месяц может заработать какая-то хитрая машинка за один вечер ', modal: ZB },
      { name: 'Константин Абрамов', sub: 'Binary + Global + Аcademy', starsAlt: '4 stars',text:'Первые месяцы работал только с Pocket Option. Слишком увлекся и разогнал баланс до 7.000$, из-за чего его заблокировали. Хоть и вывел с него под 2.000$, всё равно обида на покет. Решил попробовать новых брокеров, но оказалось, что тот же Binarium вводит задержку перед открытием сделки на 10 секунд. Поэтому написал ребятам, чтобы получить доступ к плагину и академии. В академии мне объяснили, где брать аккаунты и какие суммы выводить, чтобы их не блокировали. Разобрался с плагином, сейчас торгую на Olymp Trade и Binarum, никаких вопросов, разработчики софта красавцы. ', modal: KA },
      { name: 'Роман Воробьев', sub: 'Binary + Global + Аcademy', starsAlt: '4 stars' ,text:'Для меня знакомство с Profit Prime было максимально спонтанным. Совпало, что увидел рекламу, когда думал, чем заняться после предыдущей работы. Подписался, посмотрел на результаты, почитал про бинарные опционы и, что говорится, залетел с двух ног. Первую неделю просто читал чат и выписывал важные детали вроде промежутков времени с хорошей волатильностью для торговли софтом. Потому уже снял плагином задержку и погнал отбивать подписку. В конце месяца довольный, как слон, снял первые в жизни 107.000 на трейдинге и продлил подписку. Новичкам совет: не ленитесь и работайте каждый день, подписку можно отбить за вечер. Матвею отдельно спасибо за ответы на мои глупые вопросы вначале! ', modal:RV},
    ];
  return (
    <section id='traders' className='traders'>
        <div className="trade_titile">Что говорят клиенты о<br/> наших торговых системах</div>
        <div className="trade_group">
            <div className="trade_subtitle">Чтобы посмотреть сделки наших клиентов,<br/> нажмите на знак возле имени</div>
            <div className="vector_group">
            <img src={vector1} className='prv custom-prev disabled' alt='vecto1'/>
            <img src={vector2} className='nxt custom-next' alt='vector2'/>
            </div>
        </div>
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
        </div>
        {isModalOpen && <TradersModal trader={selectedTrader} closeModal={() => setIsModalOpen(false)} />}
    </section>
  )
}

export default TradersSection