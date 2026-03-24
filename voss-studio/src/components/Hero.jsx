import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function Hero() {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.gsap-hero-anim', {
        x: -50,
        opacity: 0,
        duration: 1.0,
        stagger: 0.1,
        ease: 'power3.out',
        delay: 0.2
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="w-full min-h-[100dvh] flex flex-col md:flex-row bg-black pt-20 md:pt-0">
      
      {/* Mobile: Image on top, Text below. Desktop: Split 50/50 */}
      
      {/* Right Column (Image) - Moved first in DOM for mobile stack, but flex-col-reverse or ordering handles it */}
      <div className="w-full h-[50vh] md:w-1/2 md:h-[100dvh] md:order-2">
        <img 
          src="/images/hero.jpg" 
          alt="Marcus Voss - Fashion Photographer" 
          className="w-full h-full object-cover filter contrast-[1.1]"
          loading="eager"
        />
      </div>

      {/* Left Column (Text) */}
      <div className="w-full md:w-1/2 md:min-h-[100dvh] py-16 md:py-0 px-6 md:px-16 flex flex-col justify-center relative noise-bg md:order-1">
        
        <div className="max-w-xl">
          <p className="gsap-hero-anim font-mono text-[11px] text-red tracking-monoLg mb-6">
            MARCUS VOSS
          </p>

          <h1 className="gsap-hero-anim font-display text-[80px] md:text-[160px] text-white leading-[0.85] mb-8">
            FACES.<br/>
            FASHION.<br/>
            POWER.
          </h1>

          <p className="gsap-hero-anim font-sans font-light text-[15px] text-white-muted tracking-wide mb-2">
            Portrait & Fashion Photography
          </p>
          
          <p className="gsap-hero-anim font-mono text-[11px] text-white-faint tracking-widest mb-12">
            New York · Available Worldwide
          </p>

          <div className="gsap-hero-anim flex flex-col gap-3 w-full max-w-sm mb-6">
            <a 
              href="#book"
              className="w-full bg-red text-white flex items-center justify-center h-12 font-sans font-bold text-[12px] tracking-widest hover:bg-red-dark transition-colors"
            >
              BOOK A SESSION
            </a>
            <a 
              href="#work"
              className="w-full border border-white-faint text-white-muted flex items-center justify-center h-12 font-sans font-normal text-[12px] hover:border-white transition-colors"
            >
              VIEW PORTFOLIO ↓
            </a>
          </div>

          <div className="gsap-hero-anim font-mono text-[10px] text-white-faint tracking-widest">
            4.9 ★ GOOGLE · 208 REVIEWS · LICENSED & INSURED
          </div>
        </div>

      </div>

    </section>
  );
}
