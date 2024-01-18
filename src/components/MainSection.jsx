import React, { useEffect, useState } from 'react'
import EarthCanvas from './canvas/Earth'
import StarsCanvas from './canvas/Stars'
import elipse from './assets/ELIPSE.png'

const MainSection = () => {
  const [qwertContent, setQwertContent] = useState("1"); 
  var [transitioning, setTransitioning] = useState(false);
  const [selectedCircle, setSelectedCircle] = useState('1');
  const [isMobile, setIsMobile] = useState(window.innerWidth < 660);
  let isMac = /Mac/.test(navigator.userAgent);
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
                      <div className="qwert_subtitile">
                      {isMobile
          ?  'Инновационная торговая система, использующая алгоритмическую торговлю и искусственный интеллект, оптимизирует рыночный анализ и минимизирует риски, адаптируясь к неожиданным изменениям, вызванным корпоративными отчетами, стихийными бедствиями и политическими решениями.'
          :<div className='qwert_subtitile'>Инновационная торговая система сочетает в себе алгоритмическую торговлю с искусственным интеллектом для проведения и оптимизации комплексного исследования рынка по критериям фундаментального, индикаторного и технического анализа.<br/><br/>Алгоритм не только минимизирует риски при входе в сделку, но и мгновенно адаптируется под внезапные изменения рынка, связанные с такими событиями, как Корпоративные отчеты, стихийные бедствия и Политические решения.</div> }
                      </div>
                     
      </div>

        );
      case '2':
        return (
          <div className="qwertInfo">
                      <div className="qwert_title">PROFIT PRIME GLOBAL </div>
                      <div className="qwert_subtitile">
                      {isMobile
          ? 'Уникальный инструмент, расширяющий возможности торговли за счёт обхода систем безопасности брокеров. Алгоритм устраняет задержку и минимизирует проскальзывание при открытии ордеров, значительно повышая процент успешных сделок.'
          : <div className='qwert_subtitile'>Уникальный инструмент, расширяющий возможности для торговли  за счёт обхода систем безопасности брокеров.Алгоритм убирает задержку и минимизирует проскальзывание при открытии ордеров, что в разы повышает процент успешных сделок.</div>}
                      </div>
            
          </div>

        );
        case '3':
          return (
            <div className="qwertInfo">
                        <div className="qwert_title">PROFIT PRIME FOREX</div>
                        <div className="qwert_subtitile">
                        {isMobile
          ? 'Продвинутое автоматизированное решение для торговли на Forex и криптобиржах, использующее алгоритмы для арбитража и анализа данных без участия пользователя, с возможностью одновременного открытия множества ордеров.'
          : <div className='qwert_subtitile'>Продвинутое решение, объединяющее в себе различные стратегии для полностью автоматизированной торговли не только на Forex брокерах, но и на крипто биржах. {'\n'}{'\n'}Революционные алгоритмы ипользуют задержки в передаче данных между брокером и поставщиком котировок, проводят арбитраж между несколькими счетами, а также анализируют исторические корреляции без вашего участия.</div>}
                        </div>
          
            </div>
  
          );
            case '4':
              return (
                <div className="qwertInfo">
                            <div className="qwert_title">PROFIT PRIME BINARY</div>
                            <div className="qwert_subtitile">
                        {isMobile
          ? 'Автоматизированная торговая система анализирует котировки и предвидит изменения курса актива на 1-2 секунды раньше брокера, позволяя трейдерам открывать выгодные сделки для максимальной прибыли.'
          : <div className='qwert_subtitile'>Автоматизированная торговая система, алгоритм  которой анализирует поставщиков котировок на сторонах брокера и трейдера, определяя выгодный для трейдера разрыв между ними перед открытием сделкb. Система всегда знает курс актива на 1-2 секунды раньше, чем брокер, что позволяет ей вовремя открывать сделки, получая максимальную прибыль.</div>}
                        </div>
                </div>
      
              );
      
              default:
                return (
                  <div className="qwertInfo">
                              <div className="qwert_title">PROFIT PRIME AI</div>
                              <div className="qwert_subtitile">
                      {isMobile
          ?  'Инновационная торговая система, использующая алгоритмическую торговлю и искусственный интеллект, оптимизирует рыночный анализ и минимизирует риски, адаптируясь к неожиданным изменениям, вызванным корпоративными отчетами, стихийными бедствиями и политическими решениями.'
          :<div className='qwert_subtitile'>Инновационная торговая система сочетает в себе алгоритмическую торговлю с искусственным интеллектом для проведения и оптимизации комплексного исследования рынка по критериям фундаментального, индикаторного и технического анализа.<br/><br/>Алгоритм не только минимизирует риски при входе в сделку, но и мгновенно адаптируется под внезапные изменения рынка, связанные с такими событиями, как Корпоративные отчеты, стихийные бедствия и Политические решения.</div> }
                      </div>
                  </div>
        
                );
    }

    
  };





  function calculatePosition(angle, width, height, centerX, centerY) {
    const x = centerX + width * Math.cos(angle);
    const y = centerY + height * Math.sin(angle);
    return { x, y };
  }
  
  function animateCircles() {
    let centerX, centerY, width, height;
    function updateValues() {
      
      if (window.innerWidth > 840 && isMac) {
      
        centerX = 320;
        centerY = 250;
        width = 350;
        height = 140;
      } else if(window.innerWidth > 660 && window.innerWidth < 840 && isMac){
        centerX = 250;
        centerY = 200;
        width = 300;
        height = 110;
      }else if(window.innerWidth < 660 && isMac){
        centerX = 145;
        centerY = 120;
        width = 160;
        height = 50;
      }else if(window.innerWidth > 840 ){
        centerX = 320;
        centerY = 260;
        width = 395;
        height = 140;
      } else if(window.innerWidth > 660 && window.innerWidth < 840){
        centerX = 250;
        centerY = 200;
        width = 285;
        height = 110;
      }else{
        centerX = 145;
        centerY = 120;
        width = 160;
        height = 60;
      }
    }
  
    updateValues();


  let angle = 0;
  
    const circles = document.querySelectorAll('.circle');
    const numCircles = circles.length;
    const angleIncrement = (2 * Math.PI) / numCircles;
  
    function animate() {
      circles.forEach((circle, index) => {
        const currentAngle = angle + index * angleIncrement;
        const { x, y } = calculatePosition(currentAngle, width, height, centerX, centerY);
        circle.style.transform = `translate(${x}px, ${y}px)`;
      });
   
        angle += 0.0015;


  
      requestAnimationFrame(animate);
    }
  
    animate();

    window.addEventListener('resize', () => {
      updateValues(); // Обновляем значения при изменении размера окна
    });
  }


  
  useEffect(() => {
    animateCircles();

    const handleResize = () => {
      setIsMobile(window.innerWidth < 660);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };


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
          Воспользуйтесь бесплатной консультацией профессиональных трейдеров, чтобы подобрать
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
            <span className='circle_txt'>GLOBAL</span>
            </div>
            <div className={`circle ${selectedCircle === '3' ? 'greneed' : ''}`} id="circle3" onClick={() => handleCircleClick('3')}>
            <span className='circle_txt'>FOREX</span>
            </div>
            <div className={`circle ${selectedCircle === '4' ? 'greneed' : ''}`} id="circle4" onClick={() => handleCircleClick('4')}>
            <span className='circle_txt'>BINARY</span>
            </div>
      </div>

        <img src={elipse} className='elipseImg'/>


      </div>
      </div>

    </section>
    
  )
}

export default MainSection