import React, { useEffect, useState } from 'react'
import EarthCanvas from './canvas/Earth'
import StarsCanvas from './canvas/Stars'
import elipse from './assets/ELIPSE.png'

const MainSection = () => {
  const [qwertContent, setQwertContent] = useState("1"); 
  var [transitioning, setTransitioning] = useState(false);
  const [selectedCircle, setSelectedCircle] = useState('1');

  var handleCircleClick = (value) => {
    setTransitioning(true);

    setTimeout(() => {
      setQwertContent(value)
      setSelectedCircle(value)
      setTransitioning(false);

    }, 500);

  }

  var getContextForQwert = () => {
    switch (qwertContent) {
      case '1':
        return (
          <div className="qwertInfo">
                      <div className="qwert_title">PROFIT PRIME AI</div>
                      <div className="qwert_subtitile">Инновационная торговая система сочетает в себе алгоритмическую торговлю с искусственным интеллектом для проведения и оптимизации комплексного исследования рынка по критериям фундаментального, индикаторного и технического анализа.<br/><br/> 
Алгоритм не только минимизирует риски при входе в сделку, но и мгновенно адаптируется под внезапные изменения рынка, связанные с такими событиями, как Корпоративные отчеты, стихийные бедствия и Политические решения.</div>
          </div>

        );
      case '2':
        return (
          <div className="qwertInfo">
                      <div className="qwert_title">PROFIT PRIME GLOBAL </div>
                      <div className="qwert_subtitile">Уникальный инструмент, расширяющий возможности для торговли  за счёт обхода систем безопасности брокеров.<br/><br/>
Алгоритм убирает задержку и минимизирует проскальзывание при открытии ордеров, что в разы повышает процент успешных сделок.</div>
          </div>

        );
        case '3':
          return (
            <div className="qwertInfo">
                        <div className="qwert_title">PROFIT PRIME FOREX</div>
                        <div className="qwert_subtitile">Продвинутое решение, объединяющее в себе различные стратегии для полностью автоматизированной торговли не только на FOrex брокерах, но и на крипто биржах.<br/><br/>
Революционные алгоритмы ипользуют задержки в передаче данных между брокером и поставщиком котировок, проводят арбитраж между несколькими счетами, а также анализируют исторические корреляции без вашего участия.<br/><br/>
</div>
            </div>
  
          );
            case '4':
              return (
                <div className="qwertInfo">
                            <div className="qwert_title">PROFIT PRIME BINARY</div>
                            <div className="qwert_subtitile">Автоматизированная торговая система, алгоритм  которой анализирует поставщиков котировок на сторонах брокера и трейдера, определяя выгодный для трейдера разрыв между ними перед открытием сделки. <br/><br/>
Система всегда знает курс актива на 1-2 секунды раньше, чем брокер, что позволяет ей вовремя открывать сделки, получая максимальную прибыль.</div>
                </div>
      
              );
      
              default:
                return (
                  <div className="qwertInfo">
                              <div className="qwert_title">PROFIT PRIME AI</div>
                              <div className="qwert_subtitile">Инновационная торговая система сочетает в себе алгоритмическую торговлю с искусственным интеллектом для проведения и оптимизации комплексного исследования рынка по критериям фундаментального, индикаторного и технического анализа. <br/><br/>
        Алгоритм не только минимизирует риски при входе в сделку, но и мгновенно адаптируется под внезапные изменения рынка, связанные с такими событиями, как Корпоративные отчеты, стихийные бедствия и Политические решения.</div>
                  </div>
        
                );
    }

    
  };





  function calculatePosition(angle, width, height, centerX, centerY) {
    const x = centerX + width * Math.cos(angle);
    const y = centerY + height * Math.sin(angle);
    return { x, y };
  }

  // Функция для анимации кругов
function animateCircles() {
  const centerX = 320;
  const centerY = 260;
  const width = 380;
  const height = 140;
  let angle = 20;

  const circles = document.querySelectorAll('.circle');

  function animate() {
    circles.forEach((circle, index) => {
      const { x, y } = calculatePosition(angle + index * (Math.PI / 2), width, height, centerX, centerY);
      circle.style.left = `${x}px`;
      circle.style.top = `${y}px`;
    });

    angle += 0.01;

    requestAnimationFrame(animate);
  }

  animate(); // Запуск анимации
}

useEffect(() => {
  animateCircles();
}, []);


  return (
    <section className='main' >
    
      <div className='info'>
        <div className="info_title">
          получите стабильный источник
          валютного дохода с помощью
          торговых систем profit prime
        </div>
        <div className="info_subtit">
          Воспользуйтесь бесплатной консультацией 
          профессиональных трейдеров, чтобы подобрать
          наиболее подходящий продукт для ваших целей
        </div>
        <div className="qwer">
        <div className="moreinfo_btn"><span className='moreifo_txt'>Узнать подробности</span></div>
        </div>
       
      </div>
      <div className="earth">
      {/* <EarthCanvas/> */}
      <div className="elipse">
        <div className={`qwert ${transitioning ? 'transitioning' : ''}`}>
          {getContextForQwert()}
        </div>
        <div className="circle_gr">
        <div className={`circle ${selectedCircle === '1' ? 'greneed' : ''}`} id="circle1" onClick={() => handleCircleClick('1')}>
          <span className='circle_txt1'>AI</span>
        </div>
            <div className={`circle ${selectedCircle === '2' ? 'greneed' : ''}`} id="circle2" onClick={() => handleCircleClick('2')}>
            <span className='circle_txt2'>GLOBAL</span>
            </div>
            <div className={`circle ${selectedCircle === '3' ? 'greneed' : ''}`} id="circle3" onClick={() => handleCircleClick('3')}>
            <span className='circle_txt3'>FOREX</span>
            </div>
            <div className={`circle ${selectedCircle === '4' ? 'greneed' : ''}`} id="circle4" onClick={() => handleCircleClick('4')}>
            <span className='circle_txt4'>BINARY</span>
            </div>
      </div>

        <img src={elipse}/>


      </div>
      </div>

    </section>
    
  )
}

export default MainSection