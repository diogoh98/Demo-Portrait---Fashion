export default function Portfolio() {
  const images = [
    { id: 1, src: '/images/grid-1.jpg', spanClasses: 'col-span-12 md:col-span-5 md:row-start-1 md:col-start-1' },
    { id: 2, src: '/images/grid-2.jpg', spanClasses: 'col-span-12 md:col-span-7 md:row-start-1 md:col-start-6' },
    { id: 3, src: '/images/grid-3.jpg', spanClasses: 'col-span-6 md:col-span-4 md:row-start-2 md:col-start-1' },
    { id: 4, src: '/images/grid-4.jpg', spanClasses: 'col-span-6 md:col-span-4 md:row-start-2 md:col-start-5' },
    { id: 5, src: '/images/grid-5.jpg', spanClasses: 'col-span-6 md:col-span-4 md:row-start-2 md:col-start-9 md:h-full' },
    { id: 6, src: '/images/grid-6.jpg', spanClasses: 'col-span-12 md:col-span-6 md:row-start-3 md:col-start-1' },
    { id: 7, src: '/images/grid-7.jpg', spanClasses: 'col-span-6 md:col-span-3 md:row-start-3 md:col-start-7' },
    { id: 8, src: '/images/grid-8.jpg', spanClasses: 'col-span-6 md:col-span-3 md:row-start-3 md:col-start-10' },
  ];

  return (
    <section id="work" className="w-full bg-black py-24 px-6 md:px-12">
      <div className="max-w-[1600px] mx-auto">
        <h2 className="font-mono text-[11px] text-red tracking-monoLg mb-12 uppercase">THE WORK</h2>
        
        <div className="grid grid-cols-12 auto-rows-[250px] md:auto-rows-[400px] gap-[3px] mb-16">
          {images.map((img, index) => (
            <div 
              key={img.id} 
              className={`relative overflow-hidden group bg-black-mid ${img.spanClasses}`}
            >
              <img 
                src={img.src} 
                alt={`Portfolio piece ${img.id}`} 
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-500 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-[#E63946] opacity-0 group-hover:opacity-15 transition-opacity duration-500 pointer-events-none"></div>
              
              <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 font-mono text-[10px] text-white/60 pointer-events-none">
                {String(index + 1).padStart(2, '0')}
              </div>
            </div>
          ))}
        </div>

        <div className="w-full flex justify-center">
          <a href="#work" className="font-mono text-[11px] text-red tracking-widest hover:text-white transition-colors uppercase">
            ALL PROJECTS &rarr;
          </a>
        </div>
      </div>
    </section>
  );
}
