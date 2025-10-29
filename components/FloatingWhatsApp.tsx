import React from 'react';
import { WhatsAppIcon } from './Icons';

const FloatingWhatsApp: React.FC = () => {
  return (
    <a
      href="https://wa.me/966561361665"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 rtl:right-auto rtl:left-6 z-50 group"
      aria-label="WhatsApp"
    >
      <div className="relative">
        {/* Pulse animation ring */}
        <div className="absolute inset-0 bg-[#25D366] rounded-full animate-ping opacity-75"></div>
        
        {/* WhatsApp button */}
        <div className="relative bg-[#25D366] hover:bg-[#1eaa52] text-white p-4 rounded-full shadow-2xl transition-all duration-300 transform hover:scale-110">
          <WhatsAppIcon />
        </div>
        
        {/* Tooltip */}
        <div className="absolute right-full rtl:right-auto rtl:left-full mr-3 rtl:mr-0 rtl:ml-3 top-1/2 -translate-y-1/2 bg-gray-900 text-white px-4 py-2 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
          <span className="text-sm font-medium">تواصل معنا عبر واتساب</span>
          {/* Arrow */}
          <div className="absolute left-full rtl:left-auto rtl:right-full top-1/2 -translate-y-1/2 border-8 border-transparent border-r-gray-900 rtl:border-r-0 rtl:border-l-gray-900"></div>
        </div>
      </div>
    </a>
  );
};

export default FloatingWhatsApp;
