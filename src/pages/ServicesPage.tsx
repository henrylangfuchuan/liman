import React from 'react';
import PageBanner from '../components/PageBanner';
import Services from '../components/Services';

export default function ServicesPage() {
  return (
    <>
      <PageBanner
        title="专业金融服务"
        subtitle="为您提供全方位的金融解决方案"
        backgroundImage="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80"
      />
      <section className="bg-white">
        <Services />
      </section>
    </>
  );
}