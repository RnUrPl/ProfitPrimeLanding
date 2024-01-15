import React, { useEffect, useState } from 'react'
import EarthCanvas from './canvas/Earth'
import StarsCanvas from './canvas/Stars'
import elipse from './assets/ELIPSE.png'

const MainSection = () => {
  const [qwertContent, setQwertContent] = useState("1");
  const [transitioning, setTransitioning] = useState(false);
  const [selectedCircle, setSelectedCircle] = useState('1');
  const [shouldStartAnimation, setShouldStartAnimation] = useState(false);
  const animationRef = useRef(null);

  const handleCircleClick = (value) => {
    setTransitioning(true);

    setTimeout(() => {
      setQwertContent(value);
      setSelectedCircle(value);
      setTransitioning(false);

      // Get the index of the target circle
      const targetIndex = parseInt(value, 10) - 1;

      // Calculate the target angle for the selected circle
      const targetAngle = targetIndex * (2 * Math.PI) / 4;

      // Stop the animation
      cancelAnimationFrame(animationRef.current);

      // Start rotating the circles and move the selected circle to the target angle
      animateCircles(targetAngle);
    }, 500);
  };

  
  

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


  var x;
  var y;


  function calculatePosition(angle, width, height, centerX, centerY) {
     x = centerX + width * Math.cos(angle);
    y = centerY + height * Math.sin(angle);
    return { x, y };
  }
  
  function animateCircles(targetAngle) {
    let centerX, centerY, width, height;
    function updateValues() {
    
      if (window.innerWidth > 840) {
      
        centerX = 320;
        centerY = 260;
        width = 380;
        height = 140;
      } else if(window.innerWidth > 660 && window.innerWidth < 840){
        centerX = 250;
        centerY = 200;
        width = 300;
        height = 110;
      }else{
        centerX = 140;
        centerY = 120;
        width = 180;
        height = 60;
      }
    }
  
    updateValues();

    const circles = document.querySelectorAll('.circle');
    const numCircles = circles.length;
    const angleIncrement = (2 * Math.PI) / numCircles;

    let angle = 0;

    const animate = () => {
      circles.forEach((circle, index) => {
        const currentAngle = angle + index * angleIncrement;
        const { x, y } = calculatePosition(currentAngle, width, height, centerX, centerY);
        circle.style.transform = `translate(${x}px, ${y}px)`;
      });

      // Move the selected circle to the target angle
      if (angle < targetAngle) {
        angle += 0.01;
      }

      if (angle >= targetAngle) {
        angle = targetAngle; // Set the angle to the target angle to prevent returning to initial positions
      }

      if (Math.abs(angle - targetAngle) > 0.01) {
        // Continue animation only if not reached the target angle
        animationRef.current = requestAnimationFrame(animate);
      }
    };

    animate();

    window.addEventListener('resize', () => {
      updateValues();
    });
  };

  const startInitialAnimation = () => {
    animateCircles(0);
  };

  useEffect(() => {
    // Start initial animation only if shouldStartAnimation is true
    if (shouldStartAnimation) {
      startInitialAnimation();
    }

    // Cleanup function to cancel animation frame on component unmount
    return () => cancelAnimationFrame(animationRef.current);
  }, [shouldStartAnimation]);

  useEffect(() => {
    // Set shouldStartAnimation to true after component has mounted
    setShouldStartAnimation(false);
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