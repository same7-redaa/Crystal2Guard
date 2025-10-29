import React, { useEffect, useState } from 'react';

interface LoadingScreenProps {
  onLoadComplete: () => void;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ onLoadComplete }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Simulate loading progress
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            onLoadComplete();
          }, 300);
          return 100;
        }
        return prev + 10;
      });
    }, 150);

    return () => clearInterval(interval);
  }, [onLoadComplete]);

  return (
    <div
      className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-white transition-opacity duration-500 ${
        progress === 100 ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      {/* Logo */}
      <div className="mb-8 animate-pulse">
        <img 
          src="/LOGO.png" 
          alt="Crystal Guard Logo" 
          className="w-32 h-32 md:w-40 md:h-40 object-contain"
        />
      </div>

      {/* Loading Text */}
      <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
        Crystal Guard
      </h2>

      {/* Progress Bar */}
      <div className="w-64 md:w-80 h-2 bg-gray-200 rounded-full overflow-hidden">
        <div 
          className="h-full bg-red-600 transition-all duration-300 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* Progress Text */}
      <p className="mt-4 text-gray-600 text-sm">{progress}%</p>
    </div>
  );
};

export default LoadingScreen;
