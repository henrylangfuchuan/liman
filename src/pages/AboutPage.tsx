import React from 'react';
import PageBanner from '../components/PageBanner';
import About from '../components/About';

export default function AboutPage() {
  return (
    <>
      <PageBanner
        title="关于我们"
        subtitle="专业团队，值得信赖的金融伙伴"
        backgroundImage="https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80"
      />
      <section className="bg-white">
        <About />
      </section>
    </>
  );
}