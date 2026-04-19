import { DATA } from '../data/config';

export default function TabProduct() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 animate-in fade-in duration-500">
      {DATA.products.map((p) => (
        <div key={p.id} className="bg-bgPanel border border-borderMain rounded-2xl overflow-hidden hover:border-primary/50 transition-all group flex flex-col">
          <div className="aspect-video w-full overflow-hidden bg-bgMain">
            <img src={p.url} alt={p.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
          </div>
          <div className="p-5 flex-1 flex flex-col justify-between">
            <div>
              <h3 className="font-bold text-lg mb-1 truncate text-textMain">{p.name}</h3>
              <p className="text-primary font-black mb-4">{p.price}</p>
            </div>
            <button className="w-full bg-borderMain/50 hover:bg-primary hover:text-bgMain py-2.5 rounded-xl font-bold text-sm transition-all border border-borderMain hover:border-primary">
              Beli Sekarang
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
