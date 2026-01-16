import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Gallery from './components/Gallery';
import Contact from './components/Contact';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-background text-primary selection:bg-primary selection:text-white">
      <Header />
      
      <main>
        <Hero />
        <About />
        <Gallery />
        <Contact />
      </main>

      <footer className="py-8 text-center text-xs text-secondary/40 border-t border-black/5">
        <p>&copy; {new Date().getFullYear()} Gideok Gallery. All Rights Reserved.</p>
        <p className="mt-2">Designed for Portfolio Demonstration</p>
      </footer>
    </div>
  );
};

export default App;