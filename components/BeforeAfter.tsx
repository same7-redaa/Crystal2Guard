import React, { useState, useRef, memo } from 'react';
import { useTranslation } from '../i18n/context';

const BeforeAfter: React.FC = memo(() => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const { t } = useTranslation();

  const handleMove = React.useCallback((clientX: number) => {
    if (!containerRef.current) return;
    
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.min(Math.max((x / rect.width) * 100, 0), 100);
    
    // Use requestAnimationFrame for smooth updates
    requestAnimationFrame(() => {
      setSliderPosition(percentage);
    });
  }, []);

  const handleMouseDown = React.useCallback(() => setIsDragging(true), []);
  const handleMouseUp = React.useCallback(() => setIsDragging(false), []);
  
  const handleMouseMove = React.useCallback((e: React.MouseEvent) => {
    if (!isDragging) return;
    e.preventDefault();
    handleMove(e.clientX);
  }, [isDragging, handleMove]);

  const handleTouchMove = React.useCallback((e: React.TouchEvent) => {
    if (!isDragging) return;
    e.preventDefault();
    handleMove(e.touches[0].clientX);
  }, [isDragging, handleMove]);

  return (
    <section className="bg-stone-100 py-12 md:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12 items-center">
          {/* Content - Right side in Arabic, Left in English */}
          <div className="order-2 lg:order-1 lg:col-span-2 text-center lg:text-right rtl:lg:text-left">
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 relative pb-4 inline-block">
              {t('beforeAfter', 'title')}
              <span className="absolute bottom-0 left-0 w-20 h-1 bg-red-600"></span>
            </h2>
            <p className="text-lg text-gray-700 mt-6 leading-relaxed font-medium">{t('beforeAfter', 'subtitle')}</p>
            <div className="mt-8 space-y-4 text-gray-600">
              <p className="text-base leading-relaxed">
                {t('beforeAfter', 'description')}
              </p>
              <p className="text-sm text-gray-500 italic">
                {t('beforeAfter', 'instruction')}
              </p>
            </div>
          </div>

          {/* Image Slider - Left side in Arabic, Right in English */}
          <div 
            ref={containerRef}
            className="relative order-1 lg:order-2 lg:col-span-3 rounded-2xl overflow-hidden shadow-2xl cursor-col-resize select-none"
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseUp}
          onTouchStart={handleMouseDown}
          onTouchEnd={handleMouseUp}
          onTouchMove={handleTouchMove}
        >
          {/* After Image (Background) */}
          <div className="relative w-full">
            <img 
              src="/بعد.png" 
              alt={t('beforeAfter', 'after')}
              className="w-full h-auto block"
              draggable={false}
              loading="lazy"
              decoding="async"
            />
            <div className="absolute bottom-4 right-4 rtl:right-auto rtl:left-4 bg-green-600 text-white px-4 py-2 rounded-lg font-bold text-sm sm:text-base shadow-lg">
              {t('beforeAfter', 'after')}
            </div>
          </div>

          {/* Before Image (Overlay) */}
          <div 
            className="absolute top-0 left-0 h-full overflow-hidden"
            style={{ 
              width: `${sliderPosition}%`
            }}
          >
            <img 
              src="/قبل.png" 
              alt={t('beforeAfter', 'before')}
              className="w-full h-full object-cover"
              style={{ 
                width: containerRef.current ? `${(containerRef.current.offsetWidth / sliderPosition) * 100}%` : '100%'
              }}
              draggable={false}
              loading="lazy"
              decoding="async"
            />
            <div className="absolute bottom-4 left-4 rtl:left-auto rtl:right-4 bg-red-600 text-white px-4 py-2 rounded-lg font-bold text-sm sm:text-base shadow-lg">
              {t('beforeAfter', 'before')}
            </div>
          </div>

          {/* Slider Line */}
          <div 
            className="absolute top-0 bottom-0 w-1 bg-white shadow-2xl"
            style={{ left: `${sliderPosition}%` }}
          >
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-2xl flex items-center justify-center border-4 border-red-600">
              <svg className="w-6 h-6 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M8 9l4-4 4 4m0 6l-4 4-4-4" />
              </svg>
            </div>
          </div>
        </div>
        </div>
      </div>
    </section>
  );
});

export default BeforeAfter;
