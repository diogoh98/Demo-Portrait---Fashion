export default function Services() {
  return (
    <section id="services" className="w-full bg-black-mid py-32 px-6 border-t border-white-faint">
      <div className="max-w-[1400px] mx-auto">
        
        <div className="mb-20">
          <span className="font-mono text-[11px] text-red tracking-monoLg block mb-6">THE RATES</span>
          <h2 className="font-sans font-black text-[48px] md:text-[64px] text-white tracking-tighter leading-none">Investment.</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          
          {/* Card 1 */}
          <div className="bg-black border border-white-faint p-8 md:p-10 flex flex-col justify-between group">
            <div>
              <span className="font-mono text-[10px] text-red block mb-6 uppercase">PORTRAIT SESSION</span>
              <div className="font-sans font-extrabold text-[32px] md:text-[42px] text-white mb-8">From $650</div>
              <div className="w-full h-px bg-white-faint mb-8"></div>
              <ul className="flex flex-col gap-4 font-sans font-light text-[14px] text-white-muted mb-12">
                <li className="flex items-center gap-3"><span className="text-red">&middot;</span> 2-Hour Studio Session</li>
                <li className="flex items-center gap-3"><span className="text-red">&middot;</span> Professional Lighting Setup</li>
                <li className="flex items-center gap-3"><span className="text-red">&middot;</span> 30 Fully Retouched Images</li>
                <li className="flex items-center gap-3"><span className="text-red">&middot;</span> Online Private Gallery</li>
                <li className="flex items-center gap-3"><span className="text-red">&middot;</span> Commercial Usage Rights</li>
              </ul>
            </div>
            <a href="#book" className="w-full border border-white-faint text-white font-sans font-bold text-[11px] tracking-widest uppercase flex items-center justify-center h-12 hover:border-red hover:text-red transition-all">
              INQUIRE
            </a>
          </div>

          {/* Card 2 - Featured */}
          <div className="bg-black border border-red p-8 md:p-10 flex flex-col justify-between relative transform lg:-translate-y-4">
            <div className="absolute -top-3 left-8 bg-[#E63946]/10 text-red font-mono text-[9px] tracking-widest px-3 py-1">
              MOST REQUESTED
            </div>
            <div>
              <span className="font-mono text-[10px] text-red block mb-6 uppercase">FASHION EDITORIAL</span>
              <div className="font-sans font-extrabold text-[32px] md:text-[42px] text-white mb-8">From $1,400</div>
              <div className="w-full h-px border-t border-dashed border-red/30 mb-8"></div>
              <ul className="flex flex-col gap-4 font-sans font-light text-[14px] text-white-muted mb-12">
                <li className="flex items-center gap-3"><span className="text-red">&middot;</span> Half-Day Shoot (4 Hours)</li>
                <li className="flex items-center gap-3"><span className="text-red">&middot;</span> Studio or Location of Choice</li>
                <li className="flex items-center gap-3"><span className="text-red">&middot;</span> Full Styling Coordination</li>
                <li className="flex items-center gap-3"><span className="text-red">&middot;</span> 60 Fully Retouched Images</li>
                <li className="flex items-center gap-3"><span className="text-red">&middot;</span> Magazine-Ready Delivery</li>
                <li className="flex items-center gap-3"><span className="text-red">&middot;</span> Full Commercial Rights</li>
              </ul>
            </div>
            <a href="#book" className="w-full bg-red text-white font-sans font-bold text-[11px] tracking-widest uppercase flex items-center justify-center h-12 hover:bg-red-dark transition-colors">
              INQUIRE
            </a>
          </div>

          {/* Card 3 */}
          <div className="bg-black border border-white-faint p-8 md:p-10 flex flex-col justify-between">
            <div>
              <span className="font-mono text-[10px] text-red block mb-6 uppercase">CAMPAIGN / BRAND</span>
              <div className="font-sans font-extrabold text-[32px] md:text-[42px] text-white mb-8">From $2,800</div>
              <div className="w-full h-px bg-white-faint mb-8"></div>
              <ul className="flex flex-col gap-4 font-sans font-light text-[14px] text-white-muted mb-12">
                <li className="flex items-center gap-3"><span className="text-red">&middot;</span> Full-Day Production (8 Hours)</li>
                <li className="flex items-center gap-3"><span className="text-red">&middot;</span> Creative Direction Included</li>
                <li className="flex items-center gap-3"><span className="text-red">&middot;</span> Multiple Looks & Locations</li>
                <li className="flex items-center gap-3"><span className="text-red">&middot;</span> 100+ Retouched Images</li>
                <li className="flex items-center gap-3"><span className="text-red">&middot;</span> Video BTS Included</li>
                <li className="flex items-center gap-3"><span className="text-red">&middot;</span> Exclusive Commercial Rights</li>
              </ul>
            </div>
            <a href="#book" className="w-full border border-white-faint text-white font-sans font-bold text-[11px] tracking-widest uppercase flex items-center justify-center h-12 hover:border-red hover:text-red transition-all">
              INQUIRE
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
