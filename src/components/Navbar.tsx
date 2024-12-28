import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { BarChart2 } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: '首页', to: '/' },
    { name: '服务', to: '/services' },
    { name: '新闻', to: '/news' },
    { name: '关于我们', to: '/about' },
    { name: '联系我们', to: '/contact' }
  ];

  const isHomePage = location.pathname === '/';

  return (
    <nav className={`fixed w-full z-10 transition-all duration-300 ${
      isScrolled || !isHomePage ? 'bg-white shadow-md' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <Link to="/" className="flex items-center hover-scale">
            <BarChart2 className={`h-8 w-8 ${isScrolled || !isHomePage ? 'text-blue-600' : 'text-white'}`} />
            <span className={`ml-2 text-xl font-bold ${isScrolled || !isHomePage ? 'text-gray-900' : 'text-white'}`}>
              安徽利曼网络科技
            </span>
          </Link>
          <div className="hidden md:flex space-x-8">
            {navItems.map((item, index) => (
              <Link
                key={index}
                to={item.to}
                className={`hover-scale ${
                  isScrolled || !isHomePage 
                    ? 'text-gray-700 hover:text-blue-600' 
                    : 'text-white hover:text-blue-200'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}