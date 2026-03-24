import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const sectionRef = useRef(null);
  const infoRef = useRef(null);
  const imageRef = useRef(null);
  
  const stats = [
    { value: 12, label: 'YEARS', suffix: '+' },
    { value: 400, label: 'CLIENTS', suffix: '+' },
    { value: 50, label: 'BRANDS', suffix: '+' }
  ];

  useEffect(() => {
    let ctx = gsap.context(() => {
      // Entry Animation
      gsap.fromTo(imageRef.current, 
        { x: -50, opacity: 0 },
        { 
          x: 0, opacity: 1, duration: 1, ease: 'power3.out',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 70%' }
        }
      );

      gsap.fromTo(infoRef.current, 
        { x: 50, opacity: 0 },
        { 
          x: 0, opacity: 1, duration: 1, ease: 'power3.out', delay: 0.2,
          scrollTrigger: { trigger: sectionRef.current, start: 'top 70%' }
        }
      );

      // Number counter animation
      const numberElements = document.querySelectorAll('.stat-number');
      numberElements.forEach((el, index) => {
        let textValue = stats[index].value;
        gsap.fromTo(el,
          { innerHTML: 0 },
          {
            innerHTML: textValue,
            duration: 2,
            ease: "power2.out",
            snap: { innerHTML: 1 },
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 60%",
            }
          }
        );
      });

    }, sectionRef);

    return () => ctx.revert();
  }, [stats]);

  return (
    <section id="about" ref={sectionRef} className="w-full bg-black border-t border-white-faint flex flex-col md:flex-row min-h-screen">
      
      {/* Left Image */}
      <div ref={imageRef} className="w-full md:w-[45%] h-[50vh] md:h-auto overflow-hidden">
        <img 
          src="/images/marcus.jpg" 
          alt="Marcus Voss" 
          loading="lazy"
          className="w-full h-full object-cover filter contrast-[1.1] grayscale-[20%]"
        />
      </div>

      {/* Right Text */}
      <div ref={infoRef} className="w-full md:w-[55%] p-10 md:p-24 lg:p-32 flex flex-col justify-center">
        <span className="font-mono text-[11px] text-red tracking-monoLg mb-8 block uppercase">MARCUS VOSS</span>
        
        <h2 className="font-sans font-extrabold text-[36px] md:text-[44px] text-white tracking-tighter leading-[1.1] mb-12">
          Obsessed with light. Committed to impact.
        </h2>
        
        <div className="w-12 h-px bg-white-faint mb-12"></div>
        
        <p className="font-sans font-light text-[15px] text-white-muted leading-[1.9] mb-16 max-w-xl">
          I've spent over 12 years behind the lens — from underground editorial shoots in Brooklyn to campaign sets across Europe. I don't direct. I observe, I anticipate, and I capture the frame before you know it happened. My clients are brands, agencies and individuals who understand that a great photo isn't taken — it's earned.
        </p>

        <div className="flex flex-wrap gap-12 md:gap-20 mb-16">
          {stats.map((stat, i) => (
            <div key={i} className="flex flex-col gap-2">
              <div className="flex items-end">
                <span className="stat-number font-sans font-black text-[40px] md:text-[48px] text-white leading-none">0</span>
                <span className="font-sans font-black text-[40px] md:text-[48px] text-white leading-none">{stat.suffix}</span>
              </div>
              <span className="font-mono text-[10px] text-red uppercase tracking-widest">{stat.label}</span>
            </div>
          ))}
        </div>

        <a href="#about" className="group inline-flex items-center gap-2 font-mono text-[11px] text-red tracking-wide hover:text-white transition-colors w-fit uppercase">
          VIEW FULL BIO <span className="transform group-hover:translate-x-1 transition-transform">&rarr;</span>
        </a>

      </div>
    </section>
  );
}
