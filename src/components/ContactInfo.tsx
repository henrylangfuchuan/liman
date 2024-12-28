import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function ContactInfo() {
  const contactDetails = [
    {
      icon: <Mail className="h-6 w-6 text-blue-600" />,
      title: '电子邮件',
      content: 'contact@financecore.com',
      link: 'mailto:contact@financecore.com'
    },
    {
      icon: <Phone className="h-6 w-6 text-blue-600" />,
      title: '电话',
      content: '400-888-8888',
      link: 'tel:4008888888'
    },
    {
      icon: <MapPin className="h-6 w-6 text-blue-600" />,
      title: '地址',
      content: '上海市浦东新区陆家嘴金融中心',
      link: null
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
      {contactDetails.map((item, index) => (
        <div
          key={index}
          className="flex flex-col items-center p-6 bg-white rounded-lg shadow-lg hover-lift animate-fade-in"
          style={{ animationDelay: `${index * 0.2}s` }}
        >
          <div className="hover-scale">{item.icon}</div>
          <h3 className="mt-4 text-lg font-medium">{item.title}</h3>
          {item.link ? (
            <a
              href={item.link}
              className="mt-2 text-gray-600 hover:text-blue-600 transition-colors"
            >
              {item.content}
            </a>
          ) : (
            <p className="mt-2 text-gray-600">{item.content}</p>
          )}
        </div>
      ))}
    </div>
  );
}