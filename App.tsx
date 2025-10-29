import React, { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import BeforeAfter from './components/BeforeAfter';
import About from './components/About';
import Features from './components/Features';
import Gallery from './components/Gallery';
import WhyChooseUs from './components/WhyChooseUs';
import Contact from './components/Contact';
import { useTranslation } from './i18n/context';

const App: React.FC = () => {
  const { language } = useTranslation();

  useEffect(() => {
    const dir = language === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = language;
    document.documentElement.dir = dir;
  }, [language]);

  return (
    <div className="bg-stone-100 text-gray-800 min-h-screen">
      <div className="relative">
        <Header />
        <main>
          <Hero />
          <BeforeAfter />
          <About />
          <Features />
          <Gallery />
          <WhyChooseUs />
        </main>
        <Contact />
      </div>
    </div>
  );
};

export default App;