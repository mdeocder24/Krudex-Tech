import React from 'react';

const Partners = () => {
  return (
    <section className="w-full py-12 flex flex-col items-center justify-center border-t border-b border-slate-800/50 bg-[#020617]/50 backdrop-blur-md relative z-10">
      <p className="text-xs text-slate-400 mb-8 uppercase tracking-widest font-semibold">
        Trusted by 10,000+ Teams Worldwide
      </p>
      
      {/* Logos container */}
      <div className="w-full max-w-6xl mx-auto overflow-hidden relative">
        
        {/* Gradient fades for the edges */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#020617] to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#020617] to-transparent z-10" />

        <div className="flex w-max animate-[scroll_30s_linear_infinite]">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((i) => (
            <div key={i} className="flex items-center justify-center w-40 mx-4 opacity-40 hover:opacity-100 transition-opacity grayscale hover:grayscale-0">
              <svg width="120" height="40" viewBox="0 0 120 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* Generic placeholder tech logo */}
                <circle cx="20" cy="20" r="12" stroke="currentColor" strokeWidth="4" />
                <path d="M 45 12 L 45 28 M 55 12 L 55 28 M 65 12 L 65 28" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
                <text x="80" y="26" fill="currentColor" fontSize="18" fontWeight="bold" fontFamily="sans-serif">Ipsum</text>
              </svg>
            </div>
          ))}
        </div>
      </div>

      <style dangerouslySetInnerHTML={{__html: `
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}} />
    </section>
  );
};

export default Partners;
