import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const About: React.FC = () => {
  // 스크롤 패럴랙스 효과를 위한 설정
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // 배경의 수직선이 스크롤에 따라 길어지는 효과
  const lineHeight = useTransform(scrollYProgress, [0, 0.5], ["0%", "100%"]);

  // 공통 애니메이션 설정 (부드럽게 위로 떠오름)
  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  return (
    <section id="about" ref={containerRef} className="py-32 bg-background relative overflow-hidden">
      {/* Decorative vertical line (Animated) */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-64 bg-black/5 overflow-hidden">
        <motion.div 
          style={{ height: lineHeight }} 
          className="w-full bg-gradient-to-b from-transparent to-black/20"
        />
      </div>

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <div className="space-y-40">
          
          {/* Section 1: Core Mission */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="text-center"
          >
            <h2 className="text-3xl md:text-5xl font-sans font-bold mb-10 leading-snug tracking-tight text-primary">
              우리는 작품이 <br className="md:hidden" />
              <span className="relative inline-block">
                {/* 텍스트 그라데이션 */}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-black via-gray-600 to-gray-400 relative z-10">
                  가장 좋은 방식으로 팔리도록
                </span>
                {/* 뒤에 깔리는 은은한 하이라이트 박스 */}
                <motion.span 
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5, duration: 0.8 }}
                  className="absolute bottom-1 left-0 w-full h-3 bg-gray-100/80 -z-0 origin-left"
                />
              </span> <br />
              돕는 팀입니다.
            </h2>
            <p className="text-secondary text-lg md:text-xl leading-relaxed max-w-2xl mx-auto font-light">
              작가는 창작에만 집중할 수 있도록,<br />
              작품은 필요한 사람에게 정확히 닿을 수 있도록 합니다.
            </p>
          </motion.div>

          {/* Section 2: Product Focus (Small Artworks) */}
          <div className="grid md:grid-cols-2 gap-16 items-center">
            {/* Image Interaction */}
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative group cursor-pointer"
            >
               {/* Hover Effect: 배경 글로우 효과 */}
               <div className="absolute -inset-1 bg-gradient-to-r from-black/5 to-transparent rounded-sm blur opacity-0 group-hover:opacity-100 transition duration-700"></div>
               
               <div className="">
                 <motion.img 
                   src="../about.png" 
                   alt="Small detailed artwork" 
                   // hover시 이미지 살짝 확대
                   whileHover={{ scale: 1.05 }}
                   transition={{ duration: 0.5 }}
                   className="w-full h-auto block"
                 />
               </div>

            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-8"
            >
              <h3 className="text-2xl md:text-3xl font-sans font-bold text-primary">Small, but Deep.</h3>
              {/* 선이 그려지는 애니메이션 */}
              <motion.div 
                initial={{ width: 0 }}
                whileInView={{ width: 48 }} // w-12 equivalent
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.4 }}
                className="h-px bg-black/20"
              />
              <p className="text-secondary leading-loose text-lg">
                우리가 다루는 작품은 손바닥 크기부터 <span className="text-primary font-bold">10호 F</span> 사이의 소형 작품입니다.
                작고 가볍지만, 그 안에 담긴 시간과 감정은 결코 작지 않습니다.<br/><br/>
                그 가치를 흐리지 않기 위해 작품 하나하나를 선별하고, 
                이미지·설명·전달 과정까지 책임집니다.
              </p>
            </motion.div>
          </div>

          {/* Section 3: Value Proposition - Floating Box */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* 배경 박스가 살짝 기울어져 있다가 제자리로 오는 느낌 */}
            <div className="absolute inset-0 bg-surface transform -skew-y-1 rounded-3xl origin-bottom-right transition-transform hover:skew-y-0 duration-500"></div>
            
            <div className="relative bg-white/60 backdrop-blur-sm p-10 md:p-20 rounded-3xl border border-black/5 text-center shadow-sm hover:shadow-md transition-shadow duration-300">
              <p className="text-xl md:text-2xl font-sans leading-relaxed text-gray-800">
                "우리는 단순히 작품을 나열하지 않습니다.<br className="hidden md:block" />
                공간에 놓였을 때의 
                {/* 밑줄이 스르륵 그어지는 애니메이션 컴포넌트 */}
                <AnimatedUnderline>장면</AnimatedUnderline>, 
                선물이 되는 
                <AnimatedUnderline delay={0.2}>순간</AnimatedUnderline>, 
                소장되는 
                <AnimatedUnderline delay={0.4}>이유</AnimatedUnderline>를 <br className="md:hidden" />함께 제안합니다."
              </p>
            </div>
          </motion.div>

          {/* Section 4: Conclusion */}
          <motion.div 
             initial="hidden"
             whileInView="visible"
             viewport={{ once: true }}
             variants={fadeInUp}
             className="text-center max-w-3xl mx-auto space-y-8"
          >
            <div className="flex flex-col md:flex-row justify-center items-center gap-4 text-secondary/80 text-sm tracking-widest uppercase">
              <span>Partner for Artists</span>
              <span className="hidden md:block w-1 h-1 bg-secondary rounded-full"></span>
              <span>Guide for Collectors</span>
            </div>
            
            <p className="text-lg md:text-xl text-secondary leading-relaxed font-light">
              작가에게는 신뢰할 수 있는 판매 파트너로,<br/>
              구매자에게는 안심하고 선택할 수 있는 창구로<br/>
              작품과 사람을 잇는 역할을 합니다.
            </p>
            
            <div className="pt-8">
              <p className="text-2xl md:text-3xl font-sans font-bold text-primary">
                작품이 더 오래, 더 좋은 방식으로 머물 수 있도록<br/>
                <span className="text-secondary/80 font-normal text-xl md:text-2xl mt-2 block">
                  우리는 오늘도 그 사이를 정리합니다.
                </span>
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

// 밑줄 애니메이션을 위한 작은 컴포넌트
const AnimatedUnderline = ({ children, delay = 0 }: { children: React.ReactNode, delay?: number }) => (
  <span className="relative inline-block mx-1 font-bold text-black group">
    {children}
    <motion.span 
      initial={{ scaleX: 0 }}
      whileInView={{ scaleX: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: delay + 0.5 }}
      className="absolute bottom-0 left-0 w-full h-[1px] bg-black origin-left"
    />
  </span>
);

export default About;