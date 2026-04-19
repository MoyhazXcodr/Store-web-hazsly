'use client';
import { useState } from 'react';
import Navbar from '../components/Navbar';
import TabHome from '../components/TabHome';
import TabProduct from '../components/TabProduct';
import TabInfo from '../components/TabInfo';
import { DATA } from '../data/config';

export default function MoyhazStore() {
  const [tab, setTab] = useState('home');

  return (
    <div className="min-h-screen selection:bg-primary/30">
      <Navbar tab={tab} setTab={setTab} />

      <main className="max-w-6xl mx-auto pt-32 pb-20 px-6">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-black bg-gradient-to-r from-primary to-blue-500 bg-clip-text text-transparent mb-4">
            {DATA.storeName}
          </h1>
          <p className="text-textMuted font-medium tracking-[0.2em] uppercase text-xs">
            {DATA.tagline}
          </p>
        </div>

        {tab === 'home' && <TabHome />}
        {tab === 'product' && <TabProduct />}
        {tab === 'info' && <TabInfo />}
      </main>

      <footer className="text-center text-textMuted text-[10px] tracking-widest uppercase pb-10 border-t border-borderMain pt-8 mx-6">
        &copy; 2026 {DATA.storeName} &bull; Built with Speed
      </footer>
    </div>
  );
}
