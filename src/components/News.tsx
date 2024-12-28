import React from 'react';
import { Calendar, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { newsItems } from '../data/newsData';

export default function News() {
  return (
    <div id="news" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center animate-fade-in">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            最新动态
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            及时了解金融市场动向和公司最新资讯
          </p>
        </div>
        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {newsItems.map((item, index) => (
            <Link
              key={item.id}
              to={`/news/${item.id}`}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover-lift animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center text-gray-500 text-sm mb-2">
                  <Calendar className="h-4 w-4 mr-2" />
                  {item.date}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {item.summary}
                </p>
                <div className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors duration-300">
                  阅读更多
                  <ArrowRight className="h-4 w-4 ml-2" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}