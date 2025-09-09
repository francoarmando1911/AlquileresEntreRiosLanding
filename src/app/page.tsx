'use client';

import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import FeaturesSection from '@/components/FeaturesSection';
import PublishSection from '@/components/PublishSection';

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex flex-col min-h-screen w-full">
        <HeroSection />
        <FeaturesSection />
        <PublishSection />
      </main>
    </>
  );
}
