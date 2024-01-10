import React, { useEffect, useRef, useState } from 'react';
import { useSpring, animated, config } from '@react-spring/web';

const Section = ({ children }) => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  const [props, set] = useSpring(() => ({
    opacity: 0,
    transform: 'translateX(-150px)',
    config: config.slow,
  }));

  useEffect(() => {
    const onScroll = () => {
      if (ref.current) {
        const sectionPosition =
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
    <animated.div ref={ref} style={props}>
      {children}
    </animated.div>
  );
};

export default Section;
