import React from 'react';
import { DecorativeDots } from './Icons';
import { useTranslation } from '../i18n/context';

const About: React.FC = () => {
  const { t } = useTranslation();
  
  return (
    <section 
      id="about-us" 
      className="bg-white scroll-mt-20" 
      style={{ 
        clipPath: 'polygon(0 5vw, 100% 0, 100% calc(100% - 5vw), 0 100%)',
        marginTop: '-5vw'
      }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-28 md:pt-36 lg:pt-48 pb-24 md:pb-32 lg:pb-40">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="flex items-start space-x-4 sm:space-x-8 rtl:space-x-reverse">
                 <div className="flex-shrink-0 mt-4">
                   <DecorativeDots color="bg-gray-300" />
                </div>
                <div>
                    <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 relative inline-block pb-4">
                        {t('about', 'title')}
                        <span className="absolute bottom-0 left-0 w-20 h-1 bg-red-600"></span>
                    </h2>
                    <p className="text-base text-gray-600 mt-6 tracking-wide font-semibold">{t('about', 'subtitle')}</p>
                    <div className="mt-6 text-gray-700 space-y-4 text-left rtl:text-right">
                        <p>
                           {t('about', 'p1')}
                        </p>
                        <p>
                            {t('about', 'p2')}
                        </p>
                    </div>
                </div>
            </div>
            <div className="flex justify-center items-center">
                <div className="relative w-full max-w-md h-[450px] mx-auto lg:mx-0 lg:w-96 lg:h-[500px] rounded-3xl overflow-hidden shadow-xl shadow-gray-400/40 rotate-3 transition-transform duration-500 hover:rotate-0 hover:scale-105 rtl:-rotate-3 border-4 border-red-600">
                     <video 
                        src="/about-video.mp4"
                        autoPlay
                        loop
                        muted
                        playsInline
                        preload="metadata"
                        loading="lazy"
                        className="w-full h-full object-cover"
                     />
                     <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default About;