'use client';
import { HomeIcon, BriefcaseIcon, InformationCircleIcon } from '@heroicons/react/24/outline';

export default function Navbar({ tab, setTab }) {
  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 bg-bgPanel/90 backdrop-blur-xl border border-borderMain p-1.5 rounded-full shadow-2xl">
      <div className="flex items-center gap-1">
        <button onClick={() => setTab('home')} className={`flex items-center gap-2 px-5 py-2 rounded-full transition-all text-sm font-medium ${tab === 'home' ? 'bg-primary text-bgMain shadow-lg' : 'text-textMuted hover:text-textMain'}`}>
          <HomeIcon className="w-4 h-4" /> Home
        </button>
        <button onClick={() => setTab('product')} className={`flex items-center gap-2 px-5 py-2 rounded-full transition-all text-sm font-medium ${tab === 'product' ? 'bg-primary text-bgMain shadow-lg' : 'text-textMuted hover:text-textMain'}`}>
          <BriefcaseIcon className="w-4 h-4" /> Product
        </button>
        <button onClick={() => setTab('info')} className={`flex items-center gap-2 px-5 py-2 rounded-full transition-all text-sm font-medium ${tab === 'info' ? 'bg-primary text-bgMain shadow-lg' : 'text-textMuted hover:text-textMain'}`}>
          <InformationCircleIcon className="w-4 h-4" /> Information
        </button>
      </div>
    </nav>
  );
}
