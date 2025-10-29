import React, { useState, useEffect, useCallback } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from './Icons';
import { useTranslation } from '../i18n/context';

const staticGalleryData = [
  { image: '/الفنادق والمنتجعات.png' },
  { image: '/المطاعم والمقاهي.png' },
  { image: '/المنازل والفلل.png' },
  { image: '/المكاتب والشركات.png' },
  { image: '/اليخوت والطائرات الخاصة.png' },
  { image: '/المحلات التجارية الفاخرة.png' },
];

const Gallery: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { t, language } = useTranslation();

  const translatedGalleryData = t('gallery', 'images') as unknown as { alt: string }[];
  const galleryImages = staticGalleryData.map((item, index) => ({
      ...item,
      ...(translatedGalleryData[index] || { alt: '' })
  }));

  const handlePrev = useCallback(() => {
    setCurrentIndex(prev => (prev === 0 ? galleryImages.length - 1 : prev - 1));
  }, [galleryImages.length]);
  
  const handleNext = useCallback(() => {
    setCurrentIndex(prev => (prev === galleryImages.length - 1 ? 0 : prev + 1));
  }, [galleryImages.length]);

  const handleThumbnailClick = (index: number) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    const intervalId = setInterval(handleNext, 5000);
    return () => clearInterval(intervalId);
  }, [currentIndex, handleNext]);

  const PrevButtonIcon = language === 'ar' ? ChevronRightIcon : ChevronLeftIcon;
  const NextButtonIcon = language === 'ar' ? ChevronLeftIcon : ChevronRightIcon;

  return (
    <section 
      id="gallery" 
      className="bg-white scroll-mt-20" 
      style={{ 
        clipPath: 'polygon(0 5vw, 100% 0, 100% calc(100% - 5vw), 0 100%)',
        marginTop: '-5vw' 
      }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-28 md:pt-36 lg:pt-48 pb-24 md:pb-32 lg:pb-40">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 relative inline-block pb-4">
            {t('gallery', 'title')}
            <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-red-600"></span>
          </h2>
          <p className="text-base text-gray-600 mt-6 tracking-wide font-semibold">{t('gallery', 'subtitle')}</p>
        </div>

        <div className="relative w-full max-w-5xl mx-auto">
          {/* Main Image Viewer */}
          <div className="relative w-full aspect-[16/10] rounded-2xl overflow-hidden shadow-2xl shadow-gray-400/50">
            {galleryImages.map((image, index) => (
              <img
                key={index}
                src={image.image}
                alt={image.alt}
                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-in-out ${
                  index === currentIndex ? 'opacity-100' : 'opacity-0'
                }`}
              />
            ))}
            {/* Navigation Buttons */}
            <button
                aria-label={t('gallery', 'prevAria')}
                className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/30 text-white hover:bg-black/50 transition-colors duration-300 z-10 rtl:left-auto rtl:right-4"
                onClick={handlePrev}
            >
                <PrevButtonIcon />
            </button>
            <button
                aria-label={t('gallery', 'nextAria')}
                className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/30 text-white hover:bg-black/50 transition-colors duration-300 z-10 rtl:right-auto rtl:left-4"
                onClick={handleNext}
            >
                <NextButtonIcon />
            </button>
             <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/60 to-transparent p-6 text-center">
                 <p className="text-white font-display tracking-wider text-lg drop-shadow-md">{galleryImages[currentIndex]?.alt}</p>
             </div>
          </div>

          {/* Thumbnail Navigation */}
          <div className="mt-6">
            <div className="flex justify-center space-x-2 sm:space-x-4 p-2 overflow-x-auto no-scrollbar">
              {galleryImages.map((image, index) => (
                <button
                  key={index}
                  onClick={() => handleThumbnailClick(index)}
                  className={`flex-shrink-0 w-20 h-14 sm:w-28 sm:h-20 rounded-lg overflow-hidden border-4 transition-all duration-300 ease-in-out transform hover:scale-105 focus:outline-none ${
                    currentIndex === index ? 'border-red-600' : 'border-transparent opacity-60 hover:opacity-100'
                  }`}
                >
                  <img
                    src={image.image}
                    alt={image.alt}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;