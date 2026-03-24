import { useState, useEffect } from 'react';

export default function FloatingCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling past the 100vh hero
      if (window.scrollY > window.innerHeight) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div 
      className={`fixed bottom-0 left-0 w-full z-40 md:hidden transition-transform duration-500 ease-in-out ${visible ? 'translate-y-0' : 'translate-y-full'}`}
    >
      <a 
        href="#book"
        className="block w-full h-[52px] bg-red text-white font-sans font-bold text-[12px] tracking-widest uppercase flex items-center justify-center shadow-[0_-10px_25px_rgba(0,0,0,0.5)]"
      >
        BOOK NOW
      </a>
    </div>
  );
}
