import React from 'react';
import ContactInfo from './ContactInfo';
import MapContainer from "./MapContainer.tsx";

export default function Contact() {
  return (
    <div id="contact" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center animate-fade-in">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            联系我们
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            随时为您提供专业的咨询服务
          </p>
        </div>
        
        <div className="mt-20">
          <ContactInfo />
          <MapContainer />
        </div>
      </div>
    </div>
  );
}