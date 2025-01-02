import React from 'react';
import PageBanner from '../components/PageBanner';
import Contact from '../components/Contact';
import contactBanner from '../images/contact_banner.avif';

export default function ContactPage() {
  return (
    <>
      <PageBanner
        title="联系我们"
        subtitle="随时为您提供专业信息咨询服务"
        backgroundImage={contactBanner}
      />
      <section className="bg-white">
        <Contact />
      </section>
    </>
  );
}