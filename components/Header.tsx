import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import logo from '../logo.png';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // 스크롤 감지
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // 모바일 메뉴 열렸을 때 본문 스크롤 막기 (UX 개선)
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [mobileMenuOpen]);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Portfolio', href: '#gallery' },
    { name: 'Contact', href: '#contact' },
  ];

  // 텍스트와 로고 색상을 결정하는 상태 변수
  const isDarkText = isScrolled || mobileMenuOpen;

  return (
    <header 
      // 헤더바는 항상 투명하게 유지 (모바일 메뉴 배경이 흰색이라 덮어씌워짐)
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 border-b border-transparent bg-transparent py-0`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        
        {/* Logo Image */}
        <a href="#" className="flex items-center relative z-50">
          <img 
            src={logo} 
            alt="Gideok Gallery" 
            // 메뉴 열림(흰배경) -> 검은 로고 (brightness-0)
            className={`h-40 w-auto object-contain -my-6 transition-all duration-300 ${
              isDarkText ? 'brightness-0' : 'brightness-0 invert'
            }`} 
          />
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-8 items-center">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className={`text-sm font-medium transition-colors tracking-wide uppercase ${
                isDarkText 
                  ? 'text-secondary hover:text-primary' 
                  : 'text-white/90 hover:text-white'
              }`}
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Mobile Toggle Button */}
        {/* z-50을 줘서 풀스크린 메뉴보다 위에 오게 함 */}
        <button 
          className={`md:hidden transition-colors relative z-50 ${
            isDarkText ? 'text-primary' : 'text-white'
          }`}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav Overlay (Full Screen) */}
      {mobileMenuOpen && (
        // fixed inset-0: 화면 전체를 덮음
        // z-40: 헤더(z-50) 바로 아래에 위치 (로고와 X버튼은 z-50이라 위에 뜸)
        // bg-background: 흰색 배경
        <div className="md:hidden fixed inset-0 z-40 bg-background flex flex-col justify-center items-center">
          <nav className="flex flex-col space-y-8 text-center animate-fade-in-up">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                className="text-3xl font-serif text-primary hover:text-secondary transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;