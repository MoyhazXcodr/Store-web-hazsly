import { DATA } from '../data/config';

export default function TabHome() {
  return (
    <div className="max-w-3xl mx-auto animate-in fade-in duration-700">
      <div className="bg-bgPanel border border-borderMain rounded-3xl p-10 text-center shadow-xl">
        <h2 className="text-2xl font-bold mb-6 text-textMain">Tentang Kami</h2>
        <p className="text-textMuted text-lg leading-relaxed">
          {DATA.description}
        </p>
        <div className="mt-10 grid grid-cols-3 gap-4 border-t border-borderMain pt-10">
          <div><p className="text-primary font-bold text-2xl">100%</p><p className="text-xs text-textMuted uppercase mt-1">Aman</p></div>
          <div><p className="text-primary font-bold text-2xl">24/7</p><p className="text-xs text-textMuted uppercase mt-1">Support</p></div>
          <div><p className="text-primary font-bold text-2xl">Fast</p><p className="text-xs text-textMuted uppercase mt-1">Respon</p></div>
        </div>
      </div>
    </div>
  );
}
