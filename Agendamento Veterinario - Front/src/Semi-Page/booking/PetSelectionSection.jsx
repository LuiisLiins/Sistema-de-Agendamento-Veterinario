import { Plus } from 'lucide-react';

import { PetCard } from '../../components/booking/PetCard';
import { Button } from '../../components/common/Button';

export function PetSelectionSection() {
  return (
    <section>
      <div className="flex justify-between mb-4">
        <h3 className="text-sm font-bold text-brand-dark">
          1. Selecione o pet
        </h3>

        <Button
          variant="soft"
          className="text-[10px] py-1 px-3"
        >
          <Plus size={14} />
          Adicionar pet
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
  );
}