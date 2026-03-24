export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="w-full bg-[#050505] border-t border-white-faint py-16 px-6">
      <div className="max-w-[1400px] mx-auto flex flex-col items-centertext-center">
        
        <div className="flex flex-col items-center justify-center text-center w-full mb-8">
          <div className="flex flex-col items-center gap-2 cursor-pointer">
            <span className="font-display text-[48px] text-white leading-none">VOSS</span>
            <span className="font-mono text-[10px] text-white-muted tracking-monoLg">STUDIO</span>
          </div>
        </div>

        <div className="w-12 h-px bg-white-faint mx-auto mb-8"></div>
        
        <p className="font-sans font-light text-[14px] text-white-muted italic text-center mb-8">
          Faces. Fashion. Power.
        </p>

        <div className="flex items-center justify-center gap-6 md:gap-8 mb-8">
          {['Work', 'Services', 'About', 'Contact'].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase()}`}
              className="font-mono text-[10px] text-white-faint uppercase tracking-widest hover:text-white transition-colors"
            >
              {item}
            </a>
          ))}
        </div>

        <div className="flex flex-col items-center justify-center text-center gap-3">
          <p className="font-mono text-[10px] text-white/20 uppercase tracking-widest">
            &copy; {year} VOSS STUDIO &middot; NEW YORK, NY &middot; book@vossstudio.com
          </p>
          <p className="font-mono text-[9px] text-white/15 italic">
            This is a demo page created for portfolio purposes.
          </p>
        </div>

      </div>
    </footer>
  );
}
