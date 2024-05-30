import React, { useEffect, useState } from 'react'
import elipse from './assets/ELIPSE.png'

const CircleAnimation = ({t}) => {
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
              ?  t("cric1mob" )
              :<div className='qwert_subtitile'>{t("circ1")}<br/><br/>
              {t("cir2")}</div> }
                          </div>
                         
          </div>
    
            );
          case '2':
            return (
              <div className="qwertInfo">
                          <div className="qwert_title">PROFIT PRIME PLUS </div>
                          <div className="qwert_subtitile">
                          {isMobile
              ? t("cric2mob")
              : <div className='qwert_subtitile'>{t("cric3")}<br/><br/>{t("cric4")} </div>}
                          </div>
                
              </div>
    
            );
            case '3':
              return (
                <div className="qwertInfo">
                            <div className="qwert_title">PROFIT PRIME FOREX</div>
                            <div className="qwert_subtitile">
                            {isMobile
              ? t("cric3mob" )
              : <div className='qwert_subtitile'>{t("cric5" )}
              <br/><br/>
              {t("cric6")} </div>}
                            </div>
              
                </div>
      
              );
                case '4':
                  return (
                    <div className="qwertInfo">
                                <div className="qwert_title">PROFIT PRIME BASIC</div>
                                <div className="qwert_subtitile">
                            {isMobile
              ?   t("cric4mob")
              : <div className='qwert_subtitile'>  {t("cric7")} 
              <br/><br/>
              {t("cric8")} </div>}
                            </div>
                    </div>
          
                  );
          
                  default:
                    return (
                      <div className="qwertInfo">
                                  <div className="qwert_title">PROFIT PRIME AI</div>
                                  <div className="qwert_subtitile">
                          {isMobile
              ?  t("cric4mob" )
              :<div className='qwert_subtitile'>{t("cric7")}<br/><br/>{t("cric8" )}</div> }
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
        <span className='circle_txt'>PLUS</span>
        </div>
        <div className={`circle ${selectedCircle === '3' ? 'greneed' : ''}`} id="circle3" onClick={() => handleCircleClick('3')}>
        <span className='circle_txt'>FOREX</span>
        </div>
        <div className={`circle ${selectedCircle === '4' ? 'greneed' : ''}`} id="circle4" onClick={() => handleCircleClick('4')}>
        <span className='circle_txt'>BASIC</span>
        </div>
  </div>
    
    <img src={elipse} className='elipseImg' alt='elipse'/>


  </div>
    
  )
}

export default CircleAnimation