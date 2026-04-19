import { DATA } from '../data/config';

export default function TabProduct() {
  return (
    {/* Panggil animasi masuk di pembungkus paling luar */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 animasi-masuk">
      
      {DATA.products.map((p) => (
        {/* Panggil class kandang-produk di sini */}
        <div key={p.id} className="bg-[#16171E] border border-[#2A2C38] rounded-2xl overflow-hidden flex flex-col kandang-produk cursor-pointer">
          
          <div className="aspect-video w-full overflow-hidden bg-[#0A0B10]">
            {/* Panggil class gambar-produk di sini biar bisa nge-zoom */}
            <img src={p.url} alt={p.name} className="w-full h-full object-cover gambar-produk" />
          </div>
          
          <div className="p-5 flex-1 flex flex-col justify-between">
            <div>
              <h3 className="font-bold text-lg mb-1 truncate text-[#EDEDED]">{p.name}</h3>
              <p className="text-[#00D2FF] font-black mb-4">{p.price}</p>
            </div>
            
            <button className="w-full bg-[#2A2C38]/50 hover:bg-[#00D2FF] hover:text-[#0A0B10] py-2.5 rounded-xl font-bold text-sm transition-all border border-[#2A2C38] hover:border-[#00D2FF]">
              Beli Sekarang
            </button>
          </div>

        </div>
      ))}

    </div>
  );
}
