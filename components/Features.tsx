import React from 'react';
import { GemIcon, ShieldIcon, DropletIcon } from './Icons';
import { useTranslation } from '../i18n/context';

interface FeatureCardProps {
  image: string;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ image, title, description }) => (
  <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 border border-stone-200">
    <div className="h-48 overflow-hidden">
      <img src={image} alt={title} className="w-full h-full object-cover hover:scale-110 transition-transform duration-300" />
    </div>
    <div className="p-6 text-center">
      <h3 className="text-xl font-bold font-display text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  </div>
);

const Features: React.FC = () => {
  const { t } = useTranslation();
  const featuresData = t('features', 'cards') as unknown as {title: string, description: string, image: string}[];

  return (
    <section 
      id="features" 
      className="scroll-mt-20 bg-stone-50"
      style={{ 
        clipPath: 'polygon(0 0, 100% 5vw, 100% 100%, 0 calc(100% - 5vw))',
        marginTop: '-5vw' 
      }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-28 md:pt-36 lg:pt-48 pb-24 md:pb-32 lg:pb-40">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 relative inline-block pb-4">
            {t('features', 'title')}
            <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-red-600"></span>
          </h2>
          <p className="text-base text-gray-600 mt-6 tracking-wide font-semibold">{t('features', 'subtitle')}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuresData.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;