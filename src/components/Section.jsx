import React, { useEffect, useRef, useState } from 'react';
import { useSpring, animated, config } from '@react-spring/web';

const Section = ({ children }) => {
  var ref = useRef(null);
  var [isVisible, setIsVisible] = useState(false);

  var [props, set] = useSpring(() => ({
    opacity: 0,
    transform: 'translateX(-150px)',
    config: config.slow,
  }));

  useEffect(() => {
    var onScroll = () => {
      if (ref.current) {
        var sectionPosition =
          window.innerHeight - (window.innerHeight - ref.current.getBoundingClientRect().top);

        if (sectionPosition < window.innerHeight) {
          if (!isVisible) {
            set({
              opacity: 1,
              transform: 'translateX(0)',
            });
            setIsVisible(true);
          }
        } else {
          if (isVisible) {
            set({
              opacity: 0,
              transform: 'translateX(150px)',
            });
            setIsVisible(false);
          }
        }
      }
    };

    window.addEventListener('scroll', onScroll);

    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, [isVisible, set]);

  return (
<div className="container" style={{ overflow: 'hidden' }}>
      <animated.div ref={ref} style={props}>
        {children}
      </animated.div>
    </div>
  );
};

export default Section;
