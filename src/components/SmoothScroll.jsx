import React, { useEffect, useRef } from 'react';
import LocomotiveScroll from 'locomotive-scroll';
import 'locomotive-scroll/src/locomotive-scroll.scss';

const SmoothScroll = ({ children }) => {
  const scrollRef = useRef(null);
  const locomotive = useRef(null);

  useEffect(() => {
    if (scrollRef.current) {
      locomotive.current = new LocomotiveScroll({
        el: scrollRef.current,
        smooth: true,
        // Opções adicionais:
        // direction: 'vertical',
        //multiplier: 2,
        // class: 'is-reveal',
      });
    }

    return () => {
      if (locomotive.current) locomotive.current.destroy();
    };
  }, []);

  return (
    <div data-scroll-container ref={scrollRef}>
      {children}
    </div>
  );
};

export default SmoothScroll;