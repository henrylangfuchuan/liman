import React from 'react';
import PageBanner from '../components/PageBanner';
import News from '../components/News';
import newBanner from '../images/new_banner.avif'

export default function NewsPage() {
  return (
    <>
      <PageBanner
        title="新闻资讯"
        subtitle="及时了解金融市场动态"
        backgroundImage={newBanner}
      />
      <section className="bg-white">
        <News />
      </section>
    </>
  );
}