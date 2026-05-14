export const Stepper = ({
  currentStep = 1,
  onStepClick,
}) => {

  const steps = [
    "Pet",
    "Veterinário",
    "Data e Horário",
    "Serviço",
    "Confirmar",
  ];

  return (
    <div className="flex justify-between items-center w-full bg-zinc-100 p-4 rounded-2xl shadow-sm mb-8 overflow-x-auto">

      {steps.map((step, idx) => {

        const stepNumber = idx + 1;

        const isDisabled = stepNumber > currentStep;

        return (
          <div key={step} className="flex items-center">

            <div className="flex flex-1 items-center gap-2">

              <button
                disabled={isDisabled}
                onClick={() => onStepClick(stepNumber)}
                className={`
                  flex items-center gap-2 group transition-all
                  ${isDisabled ? "opacity-50 cursor-not-allowed" : ""}
                `}
              >

                <div
                  className={`
                    w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold transition-all
                    ${
                      stepNumber <= currentStep
                        ? "bg-brand-primary text-white"
                        : "bg-brand-soft text-brand-light"
                    }
                  `}
                >
                  {stepNumber}
                </div>

                <span
                  className={`
                    text-xs font-semibold transition-all
                    ${
                      stepNumber === currentStep
                        ? "text-brand-dark"
                        : "text-gray-400"
                    }

                    ${!isDisabled && "group-hover:text-brand-primary"}
                  `}
                >
                  {step}
                </span>

              </button>

            </div>

            {idx < steps.length - 1 && (
              <div className="h-px w-8 bg-gray-400 mx-4 rounded-full shrink-0" />
            )}

          </div>
        );
      })}

    </div>
  );
};