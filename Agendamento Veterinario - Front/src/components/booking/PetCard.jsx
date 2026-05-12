import { Check } from 'lucide-react';

export const PetCard = ({ name, breed, image, selected, onSelect }) => (
  <div 
    onClick={onSelect}
    className={`min-w-35 p-4 rounded-2xl border-2 transition-all cursor-pointer flex flex-col items-center relative ${selected ? 'border-brand-primary bg-white shadow-lg shadow-brand-soft' : 'border-transparent bg-gray-50 hover:bg-white hover:border-gray-200'}`}
  >
    {selected && <div className="absolute top-2 right-2 bg-brand-primary text-white rounded-full p-0.5"><Check size={10} /></div>}
    <img src={image} className="w-14 h-14 rounded-xl mb-2 object-cover" alt={name} />
    <p className="font-bold text-xs text-gray-800">{name}</p>
    <p className="text-[10px] text-gray-400">{breed}</p>
  </div>
);