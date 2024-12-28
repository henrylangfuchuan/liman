import React from 'react';
import PageBanner from '../components/PageBanner';
import Contact from '../components/Contact';

export default function ContactPage() {
  return (
    <>
      <PageBanner
        title="联系我们"
        subtitle="随时为您提供专业咨询服务"
        backgroundImage="https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80"
      />
      <section className="bg-white">
        <Contact />
      </section>
    </>
  );
}