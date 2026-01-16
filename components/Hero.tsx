import React from 'react';
import { ArrowDown } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative w-full h-screen flex items-center overflow-hidden bg-primary">
      
      {/* 1. Background Image (Main Mood) - SEO: LCP 요소 */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop" 
          alt="Gideok Gallery Modern Architecture Exterior" 
          className="w-full h-full object-coveropacity-90 brightness-90" 
          // loading="eager"는 첫 화면 로딩 속도를 높여 SEO에 도움을 줍니다.
          loading="eager"
        />
        {/* Gradient Overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/40 to-transparent" />
      </div>

      {/* 2. Main Content Container */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center h-full pt-20">
        
        {/* Left Side: Text Content */}
        <div className="lg:col-span-7 flex flex-col items-start text-left animate-fade-in-up mt-32 md:mt-48">
          <h1 className="flex flex-col items-start mb-8">
            <span className="font-serif text-6xl md:text-8xl text-white tracking-tight mb-2 drop-shadow-lg mt-48 md:mt-48">
              Gideok
            </span>
            <span className="font-sans font-bold text-5xl md:text-7xl text-white tracking-tighter leading-none">
              Gallery
            </span>
          </h1>

          {/* SEO: h2를 사용하여 부제목 구조화 */}
          <h2 className="sr-only">Art Curation and Connection Service</h2>
          
          <p className="text-gray-300 text-lg md:text-xl max-w-xl mb-10 font-light leading-relaxed">
            우리는 작가의 창작과 대중의 소유,<br className="hidden md:block"/>
            그 사이를 잇고 정리하여 본질적인 가치를 만듭니다.
          </p>
          
        </div>

        {/* Right Side: Overlapping Image (The "Picture in Picture" effect) */}
        {/* 모바일에서는 숨기고 태블릿/데스크탑에서만 보여주어 가독성 확보 */}
        <div className="hidden lg:block lg:col-span-5 relative animate-fade-in-up delay-200 h-full max-h-[600px] flex items-center">
           {/* Decorative Border Box */}
           <div className="absolute top-10 -left-10 w-full h-full border border-white/20 z-0" />
           
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-white/50 z-20">
        <ArrowDown size={24} />
      </div>
    </section>
  );
};

export default Hero;