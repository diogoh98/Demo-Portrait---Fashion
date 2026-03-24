import { useState } from 'react';

export default function Booking() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      e.target.reset();
    }, 5000);
  };

  return (
    <section id="contact" className="w-full bg-black py-32 px-6 border-t border-white-faint">
      <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row gap-20">
        
        {/* Left Column - Copy */}
        <div className="w-full md:w-1/2">
          <span className="font-mono text-[11px] text-red tracking-monoLg block mb-8 uppercase">BOOK A SESSION</span>
          <h2 className="font-sans font-extrabold text-[36px] md:text-[44px] text-white tracking-tight leading-[1.1] mb-8">
            Let's make something powerful.
          </h2>
          <p className="font-sans font-light text-[15px] text-white-muted leading-[1.9] max-w-lg mb-12">
            Whether you're a brand, an agency or an individual ready to invest in imagery that commands attention — I want to hear from you. Fill out the form and I'll respond within 24 hours.
          </p>
          
          <div className="flex flex-col gap-4 mb-8">
            <a href="mailto:book@vossstudio.com" className="font-sans font-light text-[13px] text-white-muted hover:text-white transition-colors w-fit">book@vossstudio.com</a>
            <a href="tel:2125007744" className="font-sans font-light text-[13px] text-white-muted hover:text-white transition-colors w-fit">(212) 500-7744</a>
            <a href="#" className="font-sans font-light text-[13px] text-white-muted hover:text-white transition-colors w-fit">@voss.studio</a>
          </div>

          <p className="font-mono text-[10px] text-red uppercase tracking-widest">
            I respond to all inquiries within 24 hours.
          </p>
        </div>

        {/* Right Column - Form */}
        <div className="w-full md:w-1/2" id="book">
          <form onSubmit={handleSubmit} className="flex flex-col gap-8 w-full">
            
            <div className="flex flex-col gap-1 w-full relative">
              <input type="text" required placeholder="Your Name" className="w-full bg-transparent border-0 border-b border-white-faint outline-none font-sans font-light text-[14px] text-white py-3 placeholder:text-white-faint focus:border-red transition-colors peer" />
            </div>

            <div className="flex flex-col gap-1 w-full relative">
              <input type="email" required placeholder="Email Address" className="w-full bg-transparent border-0 border-b border-white-faint outline-none font-sans font-light text-[14px] text-white py-3 placeholder:text-white-faint focus:border-red transition-colors peer" />
            </div>

            <div className="flex flex-col gap-1 w-full relative">
              <input type="tel" placeholder="Phone Number" className="w-full bg-transparent border-0 border-b border-white-faint outline-none font-sans font-light text-[14px] text-white py-3 placeholder:text-white-faint focus:border-red transition-colors peer" />
            </div>

            <div className="flex flex-col gap-1 w-full relative">
              <select required className="w-full bg-transparent border-0 border-b border-white-faint outline-none font-sans font-light text-[14px] text-white py-3 focus:border-red transition-colors appearance-none pointer-events-auto shadow-none">
                <option value="" disabled selected hidden className="bg-black text-white-faint">Session Type</option>
                <option value="portrait" className="bg-black text-white">Portrait Session</option>
                <option value="editorial" className="bg-black text-white">Fashion Editorial</option>
                <option value="campaign" className="bg-black text-white">Campaign & Brand</option>
                <option value="unsure" className="bg-black text-white">Not Sure Yet</option>
              </select>
            </div>

            <div className="flex flex-col gap-1 w-full relative">
              <input type="text" placeholder="Preferred Date" className="w-full bg-transparent border-0 border-b border-white-faint outline-none font-sans font-light text-[14px] text-white py-3 placeholder:text-white-faint focus:border-red transition-colors peer" />
            </div>

            <div className="flex flex-col gap-1 w-full relative pt-4">
              <textarea rows="4" required placeholder="Tell me about your project, brand or vision" className="w-full bg-transparent border-0 border-b border-white-faint outline-none font-sans font-light text-[14px] text-white py-3 placeholder:text-white-faint focus:border-red transition-colors peer resize-none" />
            </div>

            <div className="flex flex-col gap-1 w-full relative pt-2">
              <select className="w-full bg-transparent border-0 border-b border-white-faint outline-none font-sans font-light text-[14px] text-white py-3 focus:border-red transition-colors appearance-none shadow-none">
                <option value="" disabled selected hidden className="bg-black text-white-faint">How did you hear about us?</option>
                <option value="google" className="bg-black text-white">Google</option>
                <option value="instagram" className="bg-black text-white">Instagram</option>
                <option value="referral" className="bg-black text-white">Referral</option>
                <option value="other" className="bg-black text-white">Other</option>
              </select>
            </div>

            <div className="mt-4">
              <button type="submit" className="w-full h-[52px] bg-red text-white font-sans font-bold text-[12px] tracking-wide mt border-0 uppercase hover:bg-red-dark transition-colors flex items-center justify-center">
                SEND INQUIRY &rarr;
              </button>
              {submitted && (
                <p className="text-white font-sans font-light text-sm mt-4 text-center">
                  Received. I'll be in touch within 24 hours.
                </p>
              )}
            </div>
            
          </form>
        </div>

      </div>
    </section>
  );
}
