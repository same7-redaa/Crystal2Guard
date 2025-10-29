
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-20 text-center">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center">
        <div className="relative w-64 h-48 md:w-80 md:h-64 rounded-3xl overflow-hidden mb-8 shadow-2xl shadow-black">
             <img 
                src="https://picsum.photos/id/1012/400/300?grayscale"
                alt="Three Graces Sculpture"
                className="w-full h-full object-cover"
             />
        </div>
        <h3 className="font-display text-4xl text-white font-bold tracking-wider">
          Thank you for watching
        </h3>
        <p className="mt-4 text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} Antique Parian. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
