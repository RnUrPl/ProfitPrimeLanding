import React, { useEffect, useState } from 'react'
import elipse from './assets/ELIPSE.png'

const CircleAnimation = () => {
    var [qwertContent, setQwertContent] = useState("1"); 
    var [transitioning, setTransitioning] = useState(false);
    var [selectedCircle, setSelectedCircle] = useState('1')
    var [isMobile, setIsMobile] = useState(window.innerWidth < 660);
    var isMac = /Mac/.test(navigator.userAgent);
  
    useEffect(() => {
        animateCircles() 
        var handleResize = () => {
          setIsMobile(window.innerWidth < 660);
        };
        
    
        window.addEventListener('resize', handleResize);
    
        return () => {
          window.removeEventListener('resize', handleResize);
        };
    
    
      },[]);
    var handleCircleClick = (value) => {
        setTransitioning(true);
        setTimeout(() => {
          setQwertContent(value)
          setSelectedCircle(value)
          setTransitioning(false);
        }, 500);
      }
      

    function calculatePosition(angle, width, height, centerX, centerY) {
        var x = centerX + width * Math.cos(angle);
        var y = centerY + height * Math.sin(angle);
        return { x, y };
      }
      
      function animateCircles() {
        var centerX, centerY, width, height;
        function updateValues() {
          
          if (window.innerWidth > 840 && isMac) {
          
            centerX = 320;
            centerY = 250;
            width = 350;
            height = 140;
          } else if(window.innerWidth > 660 && window.innerWidth < 840 && isMac){
            centerX = 250;
            centerY = 200;
            width = 270;
            height = 110;
          }else if(window.innerWidth < 660 && isMac){
            centerX = 150;
            centerY = 120;
            width = 160;
            height = 50;
          }else if(window.innerWidth > 840 ){
            centerX = 320;
            centerY = 260;
            width = 355;
            height = 140;
          } else if(window.innerWidth > 660 && window.innerWidth < 840){
            centerX = 250;
            centerY = 200;
            width = 285;
            height = 110;
          }else{
            centerX = 150;
            centerY = 120;
            width = 160;
            height = 50;
          }
        }
      
        updateValues();
    
    
      var angle = 0;
      
        var circles = document.querySelectorAll('.circle');
        var numCircles = circles.length;
        var angleIncrement = (2 * Math.PI) / numCircles;
      
        function animate() {
          circles.forEach((circle, index) => {
            const currentAngle = angle + index * angleIncrement;
            const { x, y } = calculatePosition(currentAngle, width, height, centerX, centerY);
            circle.style.transform = `translate(${x}px, ${y}px)`;
          });
       
            angle += 0.003;
    
    
      
          requestAnimationFrame(animate);
        }
      
        animate();
    
        window.addEventListener('resize', () => {
          updateValues(); 
        });
      }

      var getContextForQwert = () => {
        switch (qwertContent) {
          case '1':
            return (
              <div className="qwertInfo">
                          <div className="qwert_title">PROFIT PRIME AI</div>
                          <div className="qwert_subtitile">
                          {isMobile
              ?  'Торговая система, использующая алгоритмическую торговлю и искусственный интеллект, оптимизирует анализ и минимизирует риски, адаптируясь к неожиданным изменениям, вызванным корпоративными отчетами, стихийными бедствиями и политическими решениями.'
              :<div className='qwert_subtitile'>Инновационная торговая система сочетает в себе алгоритмическую торговлю с искусственным интеллектом для проведения и оптимизации комплексного исследования рынка по критериям фундаментального, индикаторного и технического анализа.
              <br/><br/>
              Алгоритм не только минимизирует риски при входе в сделку, но и мгновенно адаптируется под внезапные изменения рынка, связанные с такими событиями, как корпоративные отчеты, стихийные бедствия и политические решения.</div> }
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
              : <div className='qwert_subtitile'>Уникальный инструмент, расширяющий возможности для торговли  за счёт обхода систем безопасности брокеров. <br/><br/> Алгоритм убирает задержку и минимизирует проскальзывание при открытии ордеров, что в разы повышает процент успешных сделок.</div>}
                          </div>
                
              </div>
    
            );
            case '3':
              return (
                <div className="qwertInfo">
                            <div className="qwert_title">PROFIT PRIME FOREX</div>
                            <div className="qwert_subtitile">
                            {isMobile
              ? 'Продвинутое автоматизированное решение для торговли на Forex и крипто-биржах, использующее алгоритмы для арбитража и анализа данных без участия пользователя, с возможностью одновременного открытия множества ордеров.'
              : <div className='qwert_subtitile'>Продвинутое решение, объединяющее в себе различные стратегии для полностью автоматизированной торговли не только на Forex-брокерах, но и на крипто-биржах.
              <br/><br/>
              Революционные алгоритмы используют задержки в передаче данных между брокером и поставщиком котировок, проводят арбитраж между несколькими счетами, а также анализируют исторические корреляции без вашего участия.</div>}
                            </div>
              
                </div>
      
              );
                case '4':
                  return (
                    <div className="qwertInfo">
                                <div className="qwert_title">PROFIT PRIME BINARY</div>
                                <div className="qwert_subtitile">
                            {isMobile
              ? 'Автоматизированная система быстро и точно анализирует котировки, предвидя изменения курса актива на 1-2 секунды раньше брокера. Это позволяет трейдерам одновременно открывать выгодные сделки для максимальной прибыли и уверенности в решениях.'
              : <div className='qwert_subtitile'>Автоматизированная торговая система, алгоритм которой анализирует поставщиков котировок на сторонах брокера и трейдера, определяя выгодный для трейдера разрыв между ними перед открытием сделки.
              <br/><br/>
              Система всегда знает курс актива на 1-2 секунды раньше, чем брокер, что позволяет ей вовремя открывать сделки, получая максимальную прибыль.</div>}
                            </div>
                    </div>
          
                  );
          
                  default:
                    return (
                      <div className="qwertInfo">
                                  <div className="qwert_title">PROFIT PRIME AI</div>
                                  <div className="qwert_subtitile">
                          {isMobile
              ?  'Торговая система, использующая алгоритмическую торговлю и искусственный интеллект, оптимизирует анализ и минимизирует риски, адаптируясь к неожиданным изменениям, вызванным корпоративными отчетами, стихийными бедствиями и политическими решениями.'
              :<div className='qwert_subtitile'>Инновационная торговая система сочетает в себе алгоритмическую торговлю с искусственным интеллектом для проведения и оптимизации комплексного исследования рынка по критериям фундаментального, индикаторного и технического анализа.<br/><br/>Алгоритм не только минимизирует риски при входе в сделку, но и мгновенно адаптируется под внезапные изменения рынка, связанные с такими событиями, как Корпоративные отчеты, стихийные бедствия и Политические решения.</div> }
                          </div>
                      </div>
            
                    );
        }
    
        
      };
    
    
  return (

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
    
    <img src={elipse} className='elipseImg' alt='elipse'/>


  </div>
    
  )
}

export default CircleAnimation