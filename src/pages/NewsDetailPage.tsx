import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { newsItems } from '../data/newsData';
import PageBanner from '../components/PageBanner';
import { ArrowLeft, Calendar } from 'lucide-react';

export default function NewsDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const newsItem = newsItems.find(item => item.id === id);

  if (!newsItem) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">未找到相关新闻</h2>
          <button
            onClick={() => navigate('/news')}
            className="inline-flex items-center text-blue-600 hover:text-blue-800"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            返回新闻列表
          </button>
        </div>
      </div>
    );
  }

  return (
    <>
      <PageBanner
        title={newsItem.title}
        subtitle="新闻详情"
        backgroundImage={newsItem.image}
      />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <button
          onClick={() => navigate('/news')}
          className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-8 hover-scale"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          返回新闻列表
        </button>
        
        <article className="prose lg:prose-lg mx-auto">
          <div className="flex items-center text-gray-500 text-sm mb-6">
            <Calendar className="h-4 w-4 mr-2" />
            {newsItem.date}
          </div>
          
          <img
            src={newsItem.image}
            alt={newsItem.title}
            className="w-full h-64 object-cover rounded-lg shadow-lg mb-8"
          />
          
          <h1 className="text-3xl font-bold text-gray-900 mb-4">{newsItem.title}</h1>
          <p className="text-gray-600 mb-6">{newsItem.summary}</p>
          
          <div className="whitespace-pre-line text-gray-700">
            {newsItem.content}
          </div>
        </article>
      </div>
    </>
  );
}