import React from 'react';

interface PageBannerProps {
  title: string;
  subtitle: string;
  backgroundImage: string;
}

export default function PageBanner({ title, subtitle, backgroundImage }: PageBannerProps) {
  return (
    <div className="relative h-[300px] flex items-center">
      <div className="absolute inset-0">
        <img
          src={backgroundImage}
          alt={title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl font-bold text-white mb-4 animate-fade-in">
          {title}
        </h1>
        <p className="text-xl text-gray-200 animate-fade-in" style={{ animationDelay: '0.2s' }}>
          {subtitle}
        </p>
      </div>
    </div>
  );
}