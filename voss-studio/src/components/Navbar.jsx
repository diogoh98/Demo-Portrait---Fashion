import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-50 bg-[#0A0A0A]/95 backdrop-blur-[8px] border-b border-white/5 transition-colors">
        <div className="max-w-[1600px] mx-auto px-6 h-20 flex items-center justify-between">
          
          <div className="flex items-baseline gap-3 cursor-pointer">
            <span className="font-display text-[28px] text-white leading-none">VOSS</span>
            <span className="font-mono text-[10px] text-white-muted tracking-monoLg hidden sm:block">STUDIO</span>
          </div>

          <div className="hidden md:flex items-center gap-10">
            <div className="flex items-center gap-8">
              {['Work', 'Services', 'About', 'Contact'].map((item) => (
                <a 
                  key={item} 
                  href={`#${item.toLowerCase()}`}
                  className="font-sans font-normal text-[13px] text-white-muted uppercase tracking-wider hover:text-white transition-colors"
                >
                  {item}
                </a>
              ))}
            </div>
            <a 
              href="#book"
              className="bg-red text-white font-sans font-bold text-[11px] tracking-widest px-5 py-2 hover:bg-red-dark transition-colors duration-200"
            >
              BOOK NOW
            </a>
          </div>

          <button 
            className="md:hidden text-white hover:text-red transition-colors"
            onClick={() => setIsOpen(true)}
          >
            <Menu size={24} />
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 bg-black z-[60] flex flex-col justify-center items-center transition-all duration-500 origin-top ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'}`}
      >
        <button 
          className="absolute top-6 right-6 text-white hover:text-red transition-colors"
          onClick={() => setIsOpen(false)}
        >
          <X size={32} />
        </button>
        
        <div className="flex flex-col items-center gap-8">
          {['Work', 'Services', 'About', 'Contact'].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase()}`}
              onClick={() => setIsOpen(false)}
              className="font-display text-5xl text-white hover:text-red transition-colors tracking-wide"
            >
              {item}
            </a>
          ))}
          <a 
            href="#book"
            onClick={() => setIsOpen(false)}
            className="mt-8 bg-red text-white font-sans font-bold text-[12px] tracking-widest px-8 py-4 w-full text-center"
          >
            BOOK NOW
          </a>
        </div>
      </div>
    </>
  );
}
