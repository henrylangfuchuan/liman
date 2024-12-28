import React from 'react';
import Hero from '../components/Hero';
import Services from '../components/Services';
import About from '../components/About';
import News from '../components/News';
import Contact from '../components/Contact';

export default function HomePage() {
  return (
    <>
      <section className="relative">
        <Hero />
      </section>
      <section className="relative bg-gray-50">
        <Services />
      </section>
      <section className="relative bg-gray-50">
        <News />
      </section>
      <section className="relative bg-white">
        <About />
      </section>
      <section className="relative bg-white">
        <Contact />
      </section>
    </>
  );
}