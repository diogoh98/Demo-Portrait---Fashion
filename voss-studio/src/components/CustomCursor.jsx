import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function CustomCursor() {
  const cursorDot = useRef(null);
  const cursorRing = useRef(null);

  useEffect(() => {
    // Only run on non-touch devices
    if (window.matchMedia('(pointer: coarse)').matches) return;

    // quickTo for performant tracking
    const xToDot = gsap.quickTo(cursorDot.current, 'x', { duration: 0.1, ease: 'power3' });
    const yToDot = gsap.quickTo(cursorDot.current, 'y', { duration: 0.1, ease: 'power3' });
    
    const xToRing = gsap.quickTo(cursorRing.current, 'x', { duration: 0.3, ease: 'power3' });
    const yToRing = gsap.quickTo(cursorRing.current, 'y', { duration: 0.3, ease: 'power3' });

    const onMouseMove = (e) => {
      // Center the custom elements on the real cursor position
      xToDot(e.clientX - 3);
      yToDot(e.clientY - 3);
      
      xToRing(e.clientX - 14);
      yToRing(e.clientY - 14);
    };

    const handleMouseOver = (e) => {
      const target = e.target;
      if (
        target.tagName.toLowerCase() === 'img' ||
        target.closest('button') ||
        target.closest('a')
      ) {
        gsap.to(cursorRing.current, {
          scale: 1.5,
          backgroundColor: 'rgba(230,57,70,0.2)',
          duration: 0.3,
          ease: 'power2.out'
        });
        gsap.to(cursorDot.current, {
          scale: 0.5,
          duration: 0.3
        });
      } else {
        gsap.to(cursorRing.current, {
          scale: 1,
          backgroundColor: 'transparent',
          duration: 0.3,
          ease: 'power2.out'
        });
        gsap.to(cursorDot.current, {
          scale: 1,
          duration: 0.3
        });
      }
    };

    window.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  return (
    <>
      <div 
        ref={cursorDot} 
        className="fixed top-0 left-0 w-[6px] h-[6px] bg-red rounded-full pointer-events-none z-[100] hidden md:block"
        style={{ transform: 'translate(-100px, -100px)' }}
      />
      <div 
        ref={cursorRing} 
        className="fixed top-0 left-0 w-[28px] h-[28px] border border-red rounded-full pointer-events-none z-[99] hidden md:block"
        style={{ transform: 'translate(-100px, -100px)' }}
      />
    </>
  );
}
