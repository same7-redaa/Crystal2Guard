import React, { useState, useEffect } from 'react';
import { useTranslation } from '../i18n/context';

const backgroundImages = [
  '/hero1.png',
  '/hero2.png',
];

const Hero: React.FC = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const { t } = useTranslation();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        (prevIndex + 1) % backgroundImages.length
      );
    }, 5000); // Change image every 5 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <section 
      id="home" 
      className="relative flex items-center justify-center text-center text-white min-h-screen overflow-hidden pt-20"
      style={{ clipPath: 'polygon(0 0, 100% 0, 100% calc(100% - 5vw), 0 100%)' }}
    >
      <div className="absolute inset-0 z-0">
        {backgroundImages.map((src, index) => (
          <div
            key={src}
            className="absolute inset-0 w-full h-full bg-cover bg-center transition-opacity duration-1000 ease-in-out"
            style={{ 
              backgroundImage: `url(${src})`,
              opacity: index === currentImageIndex ? 1 : 0,
              willChange: 'opacity'
            }}
          />
        ))}
        <div className="absolute inset-0 bg-black/50"></div>
      </div>
      
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-32 sm:py-40 lg:py-48">
        <div className="max-w-4xl mx-auto">
          <div className="relative inline-block mb-8">
            <div className="absolute -top-6 -left-6 w-20 h-20 sm:-top-10 sm:-left-10 sm:w-32 sm:h-32 border-4 border-red-600/40 rounded-full rtl:-right-6 rtl:left-auto"></div>
            <div className="absolute -bottom-6 -right-6 w-16 h-16 sm:-bottom-8 sm:-right-8 sm:w-24 sm:h-24 border-4 border-white/30 rounded-full rtl:-left-6 rtl:right-auto"></div>
            <h1 className="font-display text-6xl sm:text-7xl lg:text-8xl xl:text-9xl font-black text-white leading-tight drop-shadow-2xl whitespace-nowrap relative z-10">
              {t('hero', 'title1')}
            </h1>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 sm:p-8 max-w-2xl mx-auto border border-white/20">
            <p className="text-white text-xl sm:text-2xl lg:text-3xl font-semibold leading-relaxed whitespace-pre-line">
              {t('hero', 'subtitle')}
            </p>
          </div>
          <a 
            href="#features"
            className="mt-12 px-10 py-4 bg-red-600 text-white text-lg font-bold rounded-full hover:bg-red-700 transition-all duration-300 hover:scale-110 shadow-2xl shadow-red-600/50 hover:shadow-red-600/70 inline-block"
          >
            {t('hero', 'cta')}
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;