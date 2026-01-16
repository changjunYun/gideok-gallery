import React from 'react';
import { ARTWORKS } from '../constants';
// 1. framer-motion 불러오기
import { motion } from 'framer-motion';

// 2. 애니메이션 설정 정의 (아래에서 위로 부드럽게 떠오름)
const fadeInUpVariant = {
  hidden: { opacity: 0, y: 60 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" }
  }
};

const Gallery: React.FC = () => {
  return (
    <section id="gallery" className="py-24 bg-background relative">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="mb-16 text-center">
          {/* font-serif -> font-sans font-bold 로 변경하여 프리텐다드 적용 */}
          <h2 className="text-3xl md:text-4xl font-sans font-bold mb-4 text-primary animate-fade-in-up">Featured Works</h2>
        </div>

        {/* Masonry Layout */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {ARTWORKS.map((art, index) => (
            // 3. 일반 div를 motion.div로 변경하여 애니메이션 적용
            <motion.div 
              key={art.id} 
              className="break-inside-avoid relative group overflow-hidden cursor-pointer rounded-lg"
              // 애니메이션 속성 적용
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }} // 화면에 50px 정도 들어오면 시작, 한 번만 실행
              variants={fadeInUpVariant}
              // index를 이용해 약간의 시차를 줌 (선택사항)
              // transition={{ delay: index * 0.1 }} 
            >
              <img 
                src={art.imageUrl} 
                alt={art.title} 
                // 4. [핵심 수정] grayscale 관련 클래스 제거 -> 처음부터 컬러로 나옴
                // group-hover:scale-105는 유지하여 호버 시 확대 효과는 남김
                className="w-full h-auto object-cover transition-all duration-700 ease-out transform group-hover:scale-105"
              />
            </motion.div>
          ))}
        </div>
        
        {/* Footer Link */}
        <div className="mt-16 text-center animate-fade-in-up">
          <p className="text-secondary text-sm mb-6">
            더 많은 작품은 정식 오픈 이후 공개될 예정입니다.
          </p>
          <button className="px-6 py-3 border border-gray-300 text-secondary font-medium hover:text-primary hover:border-primary transition-all duration-300 text-sm tracking-wide">
            VIEW FULL ARCHIVE
          </button>
        </div>
      </div>
    </section>
  );
};

export default Gallery;