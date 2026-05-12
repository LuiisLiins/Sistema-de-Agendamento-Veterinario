export const Stepper = ({ currentStep = 1 }) => {
  const steps = [
    "Pet",
    "Veterinário",
    "Data e Horário",
    "Serviço",
    "Confirmar",
  ];

  return (
    <div className="flex justify-between items-center w-full bg-zinc-100 p-4 rounded-2xl shadow-sm mb-8 overflow-x-auto">
      {steps.map((step, idx) => (
        <div key={step} className="flex items-center">
          
          <div className="flex flex-1 items-center gap-2">
            <div
              className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold ${
                idx + 1 <= currentStep
                  ? "bg-brand-primary text-white"
                  : "bg-brand-soft text-brand-light"
              }`}
            >
              {idx + 1}
            </div>

            <span
              className={`text-xs font-semibold ${
                idx + 1 === currentStep
                  ? "text-brand-dark"
                  : "text-gray-400"
              }`}
            >
              {step}
            </span>
          </div>

          {idx < steps.length - 1 && (
            <div className="h-px w-8 bg-gray-400 mx-4 rounded-full shrink-0" />
          )}
        </div>
      ))}
    </div>
  );
};