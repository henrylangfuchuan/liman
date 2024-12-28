import React from 'react';
import PageBanner from '../components/PageBanner';
import News from '../components/News';

export default function NewsPage() {
  return (
    <>
      <PageBanner
        title="新闻资讯"
        subtitle="及时了解金融市场动态"
        backgroundImage="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80"
      />
      <section className="bg-white">
        <News />
      </section>
    </>
  );
}