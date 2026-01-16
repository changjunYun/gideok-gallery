import React from 'react';
import { Mail, Instagram } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-background border-t border-black/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          
          <div>
            <h2 className="text-3xl md:text-5xl font-serif mb-8 leading-tight text-primary">
              Interested in <br />
              Collaborating?
            </h2>
            <p className="text-secondary text-lg mb-8 leading-relaxed">
              현재 저희는 포트폴리오 구축과 작품 연구에 집중하고 있습니다.
              본격적인 작품 판매 이전에 협업이나 전시 제안, 혹은 단순한 피드백도 언제나 환영합니다.
            </p>
            
            <div className="space-y-4">
              <a href="mailto:yoenhee2509@naver.com" className="flex items-center text-primary hover:text-gray-500 transition-colors group">
                <span className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center mr-4 group-hover:bg-primary group-hover:text-white group-hover:border-primary transition-all">
                  <Mail size={18} />
                </span>
                <span className="text-lg">yoenhee2509@naver.com</span>
              </a>
              <a href="https://www.instagram.com/gideok_gallery?igsh=ZDVxd3I4bnF2MWky" className="flex items-center text-primary hover:text-gray-500 transition-colors group">
                <span className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center mr-4 group-hover:bg-primary group-hover:text-white group-hover:border-primary transition-all">
                  <Instagram size={18} />
                </span>
                <span className="text-lg">@gideok_gallery</span>
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;