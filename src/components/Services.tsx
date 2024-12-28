import React from 'react';
import { Briefcase, PieChart, CreditCard, Building } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: <Briefcase className="h-8 w-8 text-blue-600" />,
      title: '投资管理',
      description: '专业的投资组合管理，为您的资产增值保驾护航'
    },
    {
      icon: <PieChart className="h-8 w-8 text-blue-600" />,
      title: '财务规划',
      description: '个性化的财务规划方案，助您实现人生目标'
    },
    {
      icon: <CreditCard className="h-8 w-8 text-blue-600" />,
      title: '理财产品',
      description: '多元化的理财产品选择，满足不同风险偏好'
    },
    {
      icon: <Building className="h-8 w-8 text-blue-600" />,
      title: '企业金融',
      description: '全方位的企业金融服务，支持企业持续发展'
    }
  ];

  return (
    <div id="services" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center animate-fade-in">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            我们的服务
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            提供全面的金融服务解决方案
          </p>
        </div>
        <div className="mt-20 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-white rounded-lg shadow-lg p-6 hover-lift animate-fade-in"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="flex justify-center hover-scale">{service.icon}</div>
              <h3 className="mt-4 text-xl font-medium text-gray-900 text-center">
                {service.title}
              </h3>
              <p className="mt-2 text-gray-600 text-center">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}