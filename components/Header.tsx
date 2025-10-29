import React, { useState, useEffect } from 'react';
import { useTranslation } from '../i18n/context';
import LanguageSwitcher from './LanguageSwitcher';

const NavLink: React.FC<{ href: string; children: React.ReactNode; active?: boolean; onClick?: () => void }> = ({ href, children, active, onClick }) => (
  <a
    href={href}
    onClick={onClick}
    className={`px-4 py-2 text-sm font-bold uppercase tracking-wider transition-colors duration-300 relative group ${
      active ? 'text-red-300' : 'text-red-500 hover:text-red-300'
    }`}
  >
    {children}
    <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-red-600 transform transition-transform duration-300 ease-out ${active ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`}></span>
  </a>
);

const ColoredSiteName: React.FC<{ siteName: string; className?: string }> = ({ siteName, className }) => {
    const nameParts = siteName.split(' ');
    const firstPart = nameParts[0];
    const secondPart = nameParts.slice(1).join(' ');

    return (
        <span className={`font-display font-bold tracking-wider ${className}`}>
            <span className="text-red-500">{firstPart}</span>
            <span className="text-black"> {secondPart}</span>
        </span>
    );
};


const Header: React.FC = () => {
  const [activeSection, setActiveSection] = useState('home');
  const { t } = useTranslation();
  const navItems = t('header', 'navItems') as unknown as string[];
  const siteName = t('header', 'siteName');

  useEffect(() => {
    const sectionIds = ['home', 'about-us', 'features', 'gallery', 'why-us', 'contact'];
    const sections = sectionIds.map(id => document.getElementById(id));

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setActiveSection(entry.target.id);
                }
            });
        },
        {
            rootMargin: '-50% 0px -50% 0px',
            threshold: 0
        }
    );

    sections.forEach(section => {
        if (section) {
            observer.observe(section);
        }
    });

    return () => {
        sections.forEach(section => {
            if (section) {
                observer.unobserve(section);
            }
        });
    };
  }, []);

  return (
    <header 
      className="fixed top-0 left-0 right-0 z-50 bg-cover bg-center rounded-b-md shadow-lg shadow-black/20"
      style={{ 
        backgroundImage: "url('https://i.postimg.cc/y8Dj0GBh/head.png')",
        backgroundColor: 'rgba(255, 255, 255, 0.95)'
      }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          <div className="flex items-center gap-2 lg:gap-4">
            <LanguageSwitcher />
            <a href="#home" aria-label="Go to homepage" className="hidden lg:flex items-center gap-3">
              <img src="https://i.postimg.cc/1RNJg2mN/logo.png" alt="Crystal Guard Logo" className="h-14 w-auto" />
              <ColoredSiteName siteName={siteName} className="text-3xl" />
            </a>
          </div>
          <div className="flex lg:hidden items-center gap-2 sm:gap-3">
            <a href="#home" aria-label="Go to homepage" className="flex items-center gap-2 sm:gap-3">
              <ColoredSiteName siteName={siteName} className="text-lg sm:text-2xl" />
              <img src="https://i.postimg.cc/1RNJg2mN/logo.png" alt="Crystal Guard Logo" className="h-10 sm:h-12 w-auto" />
            </a>
          </div>
          <nav className="hidden lg:flex items-center space-x-2 rtl:space-x-reverse">
            {navItems.map((item, index) => {
              const sectionIds = ['home', 'about-us', 'features', 'gallery', 'why-us', 'contact'];
              const sectionId = sectionIds[index];
              return (
                <NavLink key={item} href={`#${sectionId}`} active={activeSection === sectionId}>
                  {item}
                </NavLink>
              );
            })}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;