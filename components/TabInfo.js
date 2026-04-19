import { DATA } from '../data/config';
import { PhoneIcon, PaperAirplaneIcon } from '@heroicons/react/24/outline';

export default function TabInfo() {
  return (
    <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 animate-in fade-in duration-700">
      <div className="bg-bgPanel border border-borderMain rounded-3xl p-8 shadow-lg">
        <div className="flex items-center gap-4 mb-8">
          <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 flex items-center justify-center text-emerald-500 border border-emerald-500/20">
            <PhoneIcon className="w-6 h-6" />
          </div>
          <h3 className="text-xl font-bold text-textMain">WhatsApp Admin</h3>
        </div>
        <ul className="space-y-4">
          <li className="flex justify-between items-center"><span className="text-textMuted">Nomor</span><span className="font-mono text-emerald-400 font-medium">{DATA.contacts.whatsapp.number}</span></li>
          <li className="flex justify-between items-center"><span className="text-textMuted">Group</span><span className="text-sm hover:text-emerald-400 cursor-pointer transition-colors">{DATA.contacts.whatsapp.group}</span></li>
          <li className="flex justify-between items-center"><span className="text-textMuted">Saluran</span><span className="text-sm hover:text-emerald-400 cursor-pointer transition-colors">{DATA.contacts.whatsapp.channel}</span></li>
        </ul>
      </div>

      <div className="bg-bgPanel border border-borderMain rounded-3xl p-8 shadow-lg">
        <div className="flex items-center gap-4 mb-8">
          <div className="w-12 h-12 rounded-2xl bg-blue-500/10 flex items-center justify-center text-blue-400 border border-blue-500/20">
            <PaperAirplaneIcon className="w-6 h-6 -rotate-45" />
          </div>
          <h3 className="text-xl font-bold text-textMain">Telegram Admin</h3>
        </div>
        <ul className="space-y-4">
          <li className="flex justify-between items-center"><span className="text-textMuted">Username</span><span className="text-blue-400 font-bold">{DATA.contacts.telegram.user}</span></li>
          <li className="flex justify-between items-center"><span className="text-textMuted">Channel</span><span className="text-sm hover:text-blue-400 cursor-pointer transition-colors">{DATA.contacts.telegram.channel}</span></li>
        </ul>
      </div>
    </div>
  );
}
