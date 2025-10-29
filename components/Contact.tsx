import React from 'react';
import { PhoneIcon, WhatsAppIcon, FacebookIcon, InstagramIcon, TikTokIcon, SnapchatIcon, TwitterXIcon, LocationIcon, EmailIcon } from './Icons';
import { useTranslation } from '../i18n/context';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const socialIcons = [
    { icon: <PhoneIcon />, href: 'tel:+966561361665', bgColor: 'bg-blue-600 hover:bg-blue-700' },
    { icon: <EmailIcon />, href: 'mailto:info@crystal-guard-sa.com', bgColor: 'bg-gray-700 hover:bg-gray-800' },
    { icon: <WhatsAppIcon />, href: 'https://wa.me/966561361665', bgColor: 'bg-[#25D366] hover:bg-[#1eaa52]' },
    { icon: <FacebookIcon />, href: 'https://www.facebook.com/crystal.guard.sa/', bgColor: 'bg-[#1877F2] hover:bg-[#145dbf]' },
    { icon: <InstagramIcon />, href: 'https://www.instagram.com/crystal.guard.sa/', bgColor: 'bg-gradient-to-br from-[#833AB4] via-[#E1306C] to-[#FD1D1D] hover:opacity-90' },
    { icon: <TikTokIcon />, href: 'https://www.tiktok.com/@crystal.guard.sa', bgColor: 'bg-black hover:bg-gray-900' },
    { icon: <SnapchatIcon />, href: 'https://www.snapchat.com/add/crystal-guard?share_id=mPbNn2AJIIA&locale=ar-MM', bgColor: 'bg-[#FFFC00] hover:bg-[#e8e300] text-black' },
    { icon: <TwitterXIcon />, href: 'https://x.com/sa_crystalguard', bgColor: 'bg-black hover:bg-gray-900' },
    { icon: <LocationIcon />, href: '#', bgColor: 'bg-red-600 hover:bg-red-700' },
];

const Contact: React.FC = () => {
    const { t } = useTranslation();

    const translatedSocials = t('contact', 'socials') as unknown as { 'aria-label': string }[];

    const socialLinks = socialIcons.map((item, index) => ({
        ...item,
        ...(translatedSocials[index] || { 'aria-label': '' })
    }));

  return (
    <footer 
      id="contact" 
      className="bg-gray-900 text-gray-300 scroll-mt-20" 
      style={{ 
        clipPath: 'polygon(0 5vw, 100% 0, 100% 100%, 0 100%)',
        marginTop: '-5vw' 
      }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-28 md:pt-36 lg:pt-48 pb-16 md:pb-24 lg:pb-32">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-white relative inline-block pb-4">
            {t('contact', 'title')}
            <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-red-600"></span>
          </h2>
          <p className="text-base text-gray-300 mt-6 tracking-wide font-semibold">{t('contact', 'subtitle')}</p>
        </div>
        
        <div className="flex flex-wrap items-center justify-center gap-6 md:gap-8">
          {socialLinks.map((link, index) => (
            <a 
              key={index}
              href={link.href} 
              aria-label={link['aria-label']}
              target="_blank" 
              rel="noopener noreferrer" 
              className={`p-4 rounded-full transition-all duration-300 transform hover:scale-110 ${link.bgColor} ${link.bgColor.includes('FFFC00') ? 'text-black' : 'text-white'}`}
            >
              {link.icon}
            </a>
          ))}
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="text-center p-6 bg-gray-800/50 rounded-2xl border border-gray-700">
            <h3 className="text-white font-bold text-xl mb-3">{t('contact', 'phoneTitle')}</h3>
            <a href="tel:+966561361665" className="text-gray-300 hover:text-red-500 transition-colors text-lg">
              +966 56 136 1665
            </a>
          </div>
          
          <div className="text-center p-6 bg-gray-800/50 rounded-2xl border border-gray-700">
            <h3 className="text-white font-bold text-xl mb-3">{t('contact', 'emailTitle')}</h3>
            <a href="mailto:info@crystal-guard-sa.com" className="text-gray-300 hover:text-red-500 transition-colors text-lg break-all">
              info@crystal-guard-sa.com
            </a>
          </div>
          
          <div className="text-center p-6 bg-gray-800/50 rounded-2xl border border-gray-700">
            <h3 className="text-white font-bold text-xl mb-3">{t('contact', 'addressTitle')}</h3>
            <p className="text-gray-300 text-lg">
              {t('contact', 'address')}
            </p>
          </div>
        </div>
        
        <div className="mt-16 md:mt-20 border-t border-gray-800 pt-8 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} {t('contact', 'copyright')}</p>
        </div>
      </div>
    </footer>
  );
};

export default Contact;