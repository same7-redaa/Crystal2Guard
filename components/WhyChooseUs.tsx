import React from 'react';
import { CheckIcon } from './Icons';
import { useTranslation } from '../i18n/context';

const BenefitItem: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <li className="flex items-start space-x-3 rtl:space-x-reverse">
    <div className="flex-shrink-0 mt-1">
      <CheckIcon />
    </div>
    <span className="text-gray-700" dangerouslySetInnerHTML={{ __html: children as string }} />
  </li>
);

const WhyChooseUs: React.FC = () => {
  const { t } = useTranslation();
  const benefits = t('whyUs', 'benefits') as unknown as string[];

  return (
    <section 
      id="why-us" 
      className="scroll-mt-20 bg-stone-50"
      style={{ 
        clipPath: 'polygon(0 0, 100% 5vw, 100% 100%, 0 calc(100% - 5vw))',
        marginTop: '-5vw' 
      }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-28 md:pt-36 lg:pt-48 pb-24 md:pb-32 lg:pb-40">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-last lg:order-first text-left rtl:text-right">
            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 relative inline-block pb-4">
              {t('whyUs', 'title')}
              <span className="absolute bottom-0 left-0 rtl:left-auto rtl:right-0 w-20 h-1 bg-red-600"></span>
            </h2>
            <p className="text-base text-gray-600 mt-8 mb-8 font-semibold">
              {t('whyUs', 'subtitle')}
            </p>
            <ul className="space-y-4">
              {benefits.map((benefit, index) => (
                <BenefitItem key={index}>{benefit}</BenefitItem>
              ))}
            </ul>
          </div>
          <div className="relative h-80 sm:h-96 lg:h-[500px] w-full">
            <div className="w-full h-full rounded-3xl overflow-hidden shadow-2xl shadow-gray-400/50">
              <img 
                src="/لماذا تختارنا؟.png"
                alt={t('whyUs', 'title')}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;