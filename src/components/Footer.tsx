import React from 'react';
import { Link } from 'react-router-dom';
import { BarChart2, Mail, Phone, MapPin, Facebook, Twitter, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="animate-fade-in">
            <Link to="/" className="flex items-center mb-4">
              <BarChart2 className="h-8 w-8 text-blue-500" />
              <span className="ml-2 text-xl font-bold text-white">安徽利曼网络科技</span>
            </Link>
            <p className="text-gray-400 mb-4">
              专业的金融服务提供商，为您提供全方位的金融解决方案
            </p>
            {/*<div className="flex space-x-4">*/}
            {/*  <a href="#" className="hover:text-blue-500 transition-colors hover-scale">*/}
            {/*    <Facebook className="h-5 w-5" />*/}
            {/*  </a>*/}
            {/*  <a href="#" className="hover:text-blue-500 transition-colors hover-scale">*/}
            {/*    <Twitter className="h-5 w-5" />*/}
            {/*  </a>*/}
            {/*  <a href="#" className="hover:text-blue-500 transition-colors hover-scale">*/}
            {/*    <Linkedin className="h-5 w-5" />*/}
            {/*  </a>*/}
            {/*</div>*/}
          </div>

          {/* Quick Links */}
          <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <h3 className="text-white text-lg font-semibold mb-4">快速链接</h3>
            <ul className="space-y-2">
              {[
                { name: '首页', to: '/' },
                { name: '服务', to: '/services' },
                { name: '关于我们', to: '/about' },
                { name: '新闻', to: '/news' },
                { name: '联系我们', to: '/contact' }
              ].map((link, index) => (
                <li key={index}>
                  <Link 
                    to={link.to}
                    className="hover:text-blue-500 transition-colors hover-scale inline-block"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <h3 className="text-white text-lg font-semibold mb-4">联系方式</h3>
            <ul className="space-y-3">
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-2 text-blue-500" />
                <span>anhuilimavip@163.com</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-2 text-blue-500" />
                <span>400-888-8888</span>
              </li>
              <li className="flex items-center">
                <MapPin className="h-5 w-5 mr-2 text-blue-500" />
                <span>合肥市新站区淮海大道路1188号</span>
              </li>
            </ul>
          </div>

          {/* Business Hours */}
          <div className="animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <h3 className="text-white text-lg font-semibold mb-4">营业时间</h3>
            <ul className="space-y-2">
              <li>周一至周五</li>
              <li className="text-blue-500 font-semibold">09:00 - 18:00</li>
              <li>周六</li>
              <li className="text-blue-500 font-semibold">09:30 - 15:00</li>
              <li>周日</li>
              <li className="text-blue-500 font-semibold">休息</li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-12 pt-8 text-center animate-fade-in">
          <p>© {new Date().getFullYear()} 安徽利曼网络科技有限公司</p>
        </div>
      </div>
    </footer>
  );
}