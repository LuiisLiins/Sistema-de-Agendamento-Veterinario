import { useState } from 'react';

import { Stepper } from '../../components/booking/Stepper';
import { Button } from '../../components/common/Button';

import {
  ChevronRight,
  Calendar,
  Bell,
} from 'lucide-react';

import { PetSelectionSection } from '../../semi-page/booking/PetSelectionSection';
import { VetSelectionSection } from '../../semi-page/booking/VetSelectionSection';
import { HoursSelectionSection } from '../../semi-page/booking/HoursSelectionSection';
import { ServiceSelectionSection } from '../../Semi-Page/booking/ServiceSelectionSection';
import { ConfirmBooking } from '../../Semi-Page/booking/ConfirmBooking';

export default function NewBooking() {

  const [step, setStep] = useState(1);

  function handleNextStep() {
    setStep((prev) => prev + 1);
  }

  return (
    <div className="w-full max-w-7xl mx-auto">

      <header className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-2xl font-bold text-brand-dark flex items-center gap-2">
            <Calendar className="text-brand-primary" />
            Novo Agendamento
          </h1>

          <p className="text-xs text-gray-400">
            Início &gt; Novo Agendamento
          </p>
        </div>

        <div className="flex items-center gap-6">
          <div className="relative p-2 bg-white rounded-full shadow-sm cursor-pointer">
            <Bell size={20} className="text-brand-dark" />

            <span className="absolute top-1 right-1 bg-brand-primary text-[8px] text-white w-4 h-4 rounded-full flex items-center justify-center border-2 border-white font-bold">
              3
            </span>
          </div>
        </div>
      </header>

      
      <Stepper 
        currentStep={step} 
        onStepClick={setStep}
        />

      <div className="grid grid-cols-12 gap-8">

        <div className="col-span-8 space-y-8">

          {step === 1 && (
            <PetSelectionSection />
          )}

          {step === 2 && (
            <VetSelectionSection />
          )}

          {step === 3 && (
            <HoursSelectionSection />
          )}

          {step === 4 && (
            <ServiceSelectionSection />
          )}

          {step === 5 && (
            <ConfirmBooking />
          )}

        </div>

        <aside className="col-span-4 space-y-6">
          <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-50">

            <Button
              onClick={handleNextStep}
              className="w-full mt-6 py-4 flex items-center justify-center gap-2"
            >
              Continuar
              <ChevronRight size={18} />
            </Button>

          </div>
        </aside>

      </div>
    </div>
  );
}