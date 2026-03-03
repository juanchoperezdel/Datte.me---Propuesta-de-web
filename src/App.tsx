import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { LogosBand } from './components/LogosBand';
import { BeforeAndAfter } from './components/BeforeAndAfter';
import { Features } from './components/Features';
import { DedicatedPage } from './components/DedicatedPage';
import { WhoIsItFor } from './components/WhoIsItFor';
import { Steps } from './components/Steps';
import { Testimonials } from './components/Testimonials';
import { Pricing } from './components/Pricing';
import { FAQ } from './components/FAQ';
import { CTA } from './components/CTA';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-background font-sans text-secondary selection:bg-datte-purple-100 selection:text-primary scroll-smooth antialiased">
      <Navbar />
      <main>
        <Hero />
        <LogosBand />
        <BeforeAndAfter />
        <Features />
        <DedicatedPage />
        <WhoIsItFor />
        <Steps />
        <Testimonials />
        <Pricing />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
