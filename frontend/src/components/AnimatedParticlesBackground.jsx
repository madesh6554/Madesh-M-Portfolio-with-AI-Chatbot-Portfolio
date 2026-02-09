import React, { useMemo, useEffect, useState } from 'react';
import './AnimatedParticlesBackground.css';

const MOBILE_BREAKPOINT = 768;

const AnimatedParticlesBackground = ({
  particleCount = 200,
  backgroundColor = '#021027',
  particleColor = 'hsl(180, 100%, 80%)',
  className = '',
}) => {
  const [isMobile, setIsMobile] = useState(
    () => typeof window !== 'undefined' && window.innerWidth < MOBILE_BREAKPOINT
  );

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  const count = isMobile ? Math.min(60, particleCount) : particleCount;
  const baseSize = isMobile ? 10 : 8;

  const particles = useMemo(() => {
    return Array.from({ length: count }, (_, i) => {
      const circleSize = Math.random() * baseSize + 1;
      const startPositionY = Math.random() * 10 + 100;
      const moveDuration = isMobile ? 20000 + Math.random() * 6000 : 28000 + Math.random() * 9000;
      const animationDelay = isMobile ? Math.random() * 20000 : Math.random() * 37000;
      const circleAnimationDelay = Math.random() * 4000;
      const startX = Math.random() * 100;
      const endX = Math.random() * 100;
      const endY = -startPositionY - Math.random() * 30;

      return {
        id: i,
        size: circleSize,
        startX,
        endX,
        startY: startPositionY,
        endY,
        moveDuration,
        animationDelay,
        circleAnimationDelay,
      };
    });
  }, [count, baseSize, isMobile]);

  useEffect(() => {
    const styleId = 'animated-particles-keyframes';
    let styleElement = document.getElementById(styleId);

    if (!styleElement) {
      styleElement = document.createElement('style');
      styleElement.id = styleId;
      document.head.appendChild(styleElement);
    }

    const keyframes = particles
      .map(
        (p) => `
      @keyframes move-frames-${p.id} {
        from { transform: translate3d(${p.startX}vw, ${p.startY}vh, 0); }
        to { transform: translate3d(${p.endX}vw, ${p.endY}vh, 0); }
      }
    `
      )
      .join('');

    styleElement.textContent = keyframes;

    return () => {
      const el = document.getElementById(styleId);
      if (el) el.remove();
    };
  }, [particles]);

  return (
    <div
      className={`animated-particles-background ${className}`}
      style={{ backgroundColor, '--particle-color': particleColor }}
    >
      {particles.map((p) => (
        <div
          key={p.id}
          className="circle-container"
          style={{
            width: `${p.size}px`,
            height: `${p.size}px`,
            animationName: `move-frames-${p.id}`,
            animationDuration: `${p.moveDuration}ms`,
            animationDelay: `${p.animationDelay}ms`,
            animationIterationCount: 'infinite',
            animationTimingFunction: 'linear',
          }}
        >
          <div className="circle" style={{ animationDelay: `${p.circleAnimationDelay}ms` }} />
        </div>
      ))}
    </div>
  );
};

export default AnimatedParticlesBackground;
