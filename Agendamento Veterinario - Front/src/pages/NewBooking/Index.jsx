import { Stepper } from '../../components/booking/Stepper';
import { PetCard } from '../../components/booking/PetCard';
import { Button } from '../../components/common/Button';
import { Plus, ChevronRight, Calendar, Bell } from 'lucide-react';

export default function NewBooking() {
  return (
    // Removido o wrapper de flex e a margem duplicada
    <div className="w-full max-w-7xl mx-auto"> 
      <header className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-2xl font-bold text-brand-dark flex items-center gap-2">
            <Calendar className="text-brand-primary" /> Novo Agendamento
          </h1>
          <p className="text-xs text-gray-400">Início &gt; Novo Agendamento</p>
        </div>
        
        {/* Adicionado Perfil e Notificação conforme o design original */}
        <div className="flex items-center gap-6">
          <div className="relative p-2 bg-white rounded-full shadow-sm cursor-pointer">
            <Bell size={20} className="text-brand-dark" />
            <span className="absolute top-1 right-1 bg-brand-primary text-[8px] text-white w-4 h-4 rounded-full flex items-center justify-center border-2 border-white font-bold">3</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="text-right">
              <p className="text-sm font-bold text-brand-dark">Mariana Silva</p>
              <p className="text-[10px] text-gray-400 font-bold uppercase">Cliente</p>
            </div>
            <img src="https://i.pravatar.cc/150?u=mariana" className="w-10 h-10 rounded-xl object-cover shadow-sm" alt="Perfil" />
          </div>
        </div>
      </header>

      <Stepper currentStep={1} />

      <div className="grid grid-cols-12 gap-8">
        <div className="col-span-8 space-y-8">
          <section>
            <div className="flex justify-between mb-4">
              <h3 className="text-sm font-bold text-brand-dark">1. Selecione o pet</h3>
              <Button variant="soft" className="text-[10px] py-1 px-3">
                <Plus size={14} /> Adicionar pet
              </Button>
            </div>
            <div className="flex gap-4 overflow-x-auto pb-2">
              <PetCard 
                name="Rex" 
                breed="Golden Retriever" 
                image="https://images.dog.ceo/breeds/retriever-golden/n02099601_3004.jpg" 
                selected 
              />
            </div>
          </section>
        </div>

        <aside className="col-span-4 space-y-6">
          <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-50">
            <h3 className="text-sm font-bold text-brand-dark mb-4 text-center border-b pb-4">Resumo</h3>
            <div className="bg-gray-50 p-6 rounded-2xl border border-dashed border-gray-200 text-center text-xs text-gray-400 leading-relaxed">
              Selecione um pet e veterinário para ver o resumo.
            </div>
            <Button className="w-full mt-6 py-4 flex items-center justify-center gap-2">
              Continuar <ChevronRight size={18} />
            </Button>
          </div>
        </aside>
      </div>
    </div>
  );
}