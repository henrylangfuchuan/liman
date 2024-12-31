import React from 'react';
import PageBanner from '../components/PageBanner';
import About from '../components/About';
import aboutBanner from '../images/about_banner.avif';

export default function AboutPage() {
  return (
    <>
      <PageBanner
        title="关于我们"
        subtitle="专业团队，值得信赖的金融伙伴"
        backgroundImage={aboutBanner}
      />
      <section className="bg-white">
        <About />
      </section>
    </>
  );
}