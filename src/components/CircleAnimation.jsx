import React, { useEffect, useState,useCallback, useMemo } from 'react'
import elipse from './assets/ELIPSE.png'

const useIsMobile = (threshold = 660) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < threshold);

  const handleResize = useCallback(() => {
    setIsMobile(window.innerWidth < threshold);
  }, [threshold]);

  useEffect(() => {
    const debouncedResize = debounce(handleResize, 150);
    window.addEventListener('resize', debouncedResize);
    return () => {
      window.removeEventListener('resize', debouncedResize);
    };
  }, [handleResize]);

  return isMobile;
};


var debounce = (func, wait) => {
  let timeout;
  return (...args) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(this, args), wait);
  };
};

var calculatePosition = (angle, width, height, centerX, centerY) => {
  var x = centerX + width * Math.cos(angle);
  var y = centerY + height * Math.sin(angle);
  return { x, y };
};

const getValuesForDesktop = (isMac, isMobile) => {
  if (isMobile) {
    return { centerX: 150, centerY: 120, width: 160, height: 50 };
  }
  if (isMac) {
    if (window.innerWidth > 840) {
      return { centerX: 320, centerY: 250, width: 350, height: 140 };
    } else if (window.innerWidth > 660) {
      return { centerX: 250, centerY: 200, width: 270, height: 110 };
    } else {
      return { centerX: 150, centerY: 120, width: 160, height: 50 };
    }
  } else {
    if (window.innerWidth > 840) {
      return { centerX: 320, centerY: 260, width: 355, height: 140 };
    } else if (window.innerWidth > 660) {
      return { centerX: 250, centerY: 200, width: 285, height: 110 };
    } else {
      return { centerX: 150, centerY: 120, width: 160, height: 50 };
    }
  }
};


const animateCircles = (isMac, isMobile) => {
  let { centerX, centerY, width, height } = getValuesForDesktop(isMac, isMobile);

  const updateValues = () => {
    const values = getValuesForDesktop(isMac, isMobile);
    centerX = values.centerX;
    centerY = values.centerY;
    width = values.width;
    height = values.height;
  };

  const circles = document.querySelectorAll('.circle');
  const numCircles = circles.length;
  const angleIncrement = (2 * Math.PI) / numCircles;

  let angle = 0;
  const animate = () => {
    updateValues();
    circles.forEach((circle, index) => {
      const currentAngle = angle + index * angleIncrement;
      const { x, y } = calculatePosition(currentAngle, width, height, centerX, centerY);
      circle.style.transform = `translate(${x}px, ${y}px)`;
    });

    angle += 0.003;
    requestAnimationFrame(animate);
  };

  window.addEventListener('resize', debounce(() => {
    updateValues();
  }, 150));

  return animate;
};







const CircleAnimation = ({t}) => {
    var [qwertContent, setQwertContent] = useState("1"); 
    var [transitioning, setTransitioning] = useState(false);
    var [selectedCircle, setSelectedCircle] = useState('1')
    var isMac = /Mac/.test(navigator.userAgent);

    var isMobile = useIsMobile();

    useEffect(() => {
      const startAnimation = animateCircles(isMac, isMobile);
      startAnimation();
    }, [isMac, isMobile]);
    

  var handleCircleClick = (value) => {
    setTransitioning(true);
    setTimeout(() => {
      setQwertContent(value);
      setSelectedCircle(value);
      setTransitioning(false);
    }, 500);
  };
  var getContextForQwert = useMemo(() => {
    switch (qwertContent) {
      case '1':
        return (
          <div className="qwertInfo">
            <div className="qwert_title">PROFIT PRIME AI</div>
            <div className="qwert_subtitile">
              {isMobile ? t("cric1mob") : (
                <div className='qwert_subtitile'>
                  {t("circ1")}<br/><br/>
                  {t("cir2")}
                </div>
              )}
            </div>
          </div>
        );
      case '2':
        return (
          <div className="qwertInfo">
            <div className="qwert_title">PROFIT PRIME PLUS</div>
            <div className="qwert_subtitile">
              {isMobile ? t("cric2mob") : (
                <div className='qwert_subtitile'>
                  {t("cric3")}<br/><br/>
                  {t("cric4")}
                </div>
              )}
            </div>
          </div>
        );
      case '3':
        return (
          <div className="qwertInfo">
            <div className="qwert_title">PROFIT PRIME FOREX</div>
            <div className="qwert_subtitile">
              {isMobile ? t("cric3mob") : (
                <div className='qwert_subtitile'>
                  {t("cric5")}<br/><br/>
                  {t("cric6")}
                </div>
              )}
            </div>
          </div>
        );
      case '4':
        return (
          <div className="qwertInfo">
            <div className="qwert_title">PROFIT PRIME BASIC</div>
            <div className="qwert_subtitile">
              {isMobile ? t("cric4mob") : (
                <div className='qwert_subtitile'>
                  {t("cric7")}<br/><br/>
                  {t("cric8")}
                </div>
              )}
            </div>
          </div>
        );
      default:
        return (
          <div className="qwertInfo">
            <div className="qwert_title">PROFIT PRIME AI</div>
            <div className="qwert_subtitile">
              {isMobile ? t("cric4mob") : (
                <div className='qwert_subtitile'>
                  {t("cric7")}<br/><br/>
                  {t("cric8")}
                </div>
              )}
            </div>
          </div>
        );
    }
  }, [qwertContent, isMobile, t]);
    
    
  return (

    <div className="elipse">
    <div className={`qwert ${transitioning ? 'transitioning' : ''}`}>
      {getContextForQwert}
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