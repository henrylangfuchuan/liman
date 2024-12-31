import React from 'react';
import PageBanner from '../components/PageBanner';
import Services from '../components/Services';
import serviceBanner from '../images/service_banner.avif'

export default function ServicesPage() {
  return (
    <>
      <PageBanner
        title="专业金融服务"
        subtitle="为您提供全方位的金融解决方案"
        backgroundImage={serviceBanner}
      />
      <section className="bg-white">
        <Services />
      </section>
    </>
  );
}