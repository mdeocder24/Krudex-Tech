"use client";

import React from 'react';
import Navbar from '@/components/Navbar';
import SelectedWork from '@/components/SelectedWork';
import Footer from '@/components/Footer';
import ServicesCTA from '@/components/ServicesCTA';

export default function WorkPage() {
  return (
    <main className="min-h-screen bg-transparent selection:bg-krudex-green selection:text-krudex-black flex flex-col">
      <Navbar />
      {/* Adding padding to account for the fixed navbar */}
      <div className="pt-24">
        <SelectedWork />
      </div>
      <ServicesCTA />
      <Footer />
    </main>
  );
}
