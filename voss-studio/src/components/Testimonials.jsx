import { useState, useEffect } from 'react';
import { ChevronRight } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: "Jordan Lee",
    title: "Creative Director @ Apex Agency",
    quote: "Marcus delivered beyond our brief. The campaign shots were raw, powerful and exactly on-brand. Our client approved every single frame on the first delivery. That never happens."
  },
  {
    id: 2,
    name: "Priya Nair",
    title: "Fashion Model",
    quote: "I've worked with many photographers and Marcus is in a different league. He doesn't make you pose — he makes you feel something, and the camera catches it. My portfolio has never looked better."
  },
  {
    id: 3,
    name: "Tyler Brooks",
    title: "CEO @ Urban Label Co.",
    quote: "We hired Marcus for a full brand campaign and the ROI was immediate. The images ran in three publications and drove a 40% spike in online traffic. Worth every dollar."
  }
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrent((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(interval);
  }, [isPaused]);

  return (
    <section className="w-full bg-black-mid py-32 px-6 border-t border-white-faint">
      <div className="max-w-[1200px] mx-auto">
        
        <div className="mb-20 text-center md:text-left">
          <span className="font-mono text-[11px] text-red tracking-monoLg block mb-6 uppercase">THE CLIENTS SPEAK</span>
          <h2 className="font-sans font-black text-[48px] md:text-[64px] text-white tracking-tight leading-none">Results.</h2>
        </div>

        <div 
          className="relative w-full overflow-hidden"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Carousel Track */}
          <div 
            className="flex transition-transform duration-700 ease-[cubic-bezier(0.25,0.46,0.45,0.94)]"
            style={{ transform: `translateX(-${current * 100}%)` }}
          >
            {testimonials.map((t) => (
              <div key={t.id} className="w-full flex-shrink-0 px-2 md:px-4">
                <div className="bg-black border border-white-faint p-10 md:p-16 relative">
                  <span className="absolute top-6 left-6 font-display text-[80px] md:text-[120px] text-[#E63946] opacity-15 leading-none select-none">"</span>
                  <div className="relative z-10 pt-8 md:pt-12">
                    <p className="font-sans font-light text-[16px] md:text-[20px] text-white-muted italic leading-relaxed mb-12">
                      {t.quote}
                    </p>
                    <div>
                      <h4 className="font-sans font-bold text-[13px] text-white tracking-widest uppercase mb-2">
                        {t.name}
                      </h4>
                      <p className="font-mono text-[10px] text-red uppercase tracking-wide">
                        {t.title}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Custom Dots */}
          <div className="flex justify-center mt-12 gap-3">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`w-12 h-[2px] transition-all duration-300 ${
                  current === i ? 'bg-red' : 'bg-white-faint hover:bg-white-muted'
                }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
