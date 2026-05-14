export function VetSelectionSection() {
  const vets = [
    {
      id: 1,
      name: 'Dra. Ana Beatriz',
      specialty: 'Clínica Geral',
      experience: '8 anos de experiência',
      rating: 4.9,
      image: 'https://i.pravatar.cc/300?img=32',
      available: true,
    },
    {
      id: 2,
      name: 'Dr. Ricardo Lima',
      specialty: 'Cardiologia Veterinária',
      experience: '12 anos de experiência',
      rating: 4.8,
      image: 'https://i.pravatar.cc/300?img=12',
      available: true,
    },
    {
      id: 3,
      name: 'Dra. Juliana Costa',
      specialty: 'Dermatologia Animal',
      experience: '6 anos de experiência',
      rating: 4.7,
      image: 'https://i.pravatar.cc/300?img=47',
      available: false,
    },
  ];

  return (
    <section className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-sm font-bold text-brand-dark mb-1">
            2. Selecione o veterinário
          </h3>

          <p className="text-xs text-gray-400">
            Escolha o profissional ideal para o atendimento do seu pet.
          </p>
        </div>

        <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-2xl shadow-sm border border-gray-100">
          <div className="w-2 h-2 rounded-full bg-green-500" />

          <span className="text-xs font-medium text-gray-500">
            2 disponíveis hoje
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-5">
        {vets.map((vet) => (
          <button
            key={vet.id}
            disabled={!vet.available}
            className={`
              group
              relative
              bg-white
              p-5
              rounded-3xl
              shadow-sm
              border
              transition-all
              duration-300
              text-left
              overflow-hidden

              ${
                vet.available
                  ? 'border-gray-100 hover:border-brand-primary hover:-translate-y-1 hover:shadow-xl cursor-pointer'
                  : 'opacity-60 cursor-not-allowed border-gray-100'
              }
            `}
          >
            <div className="absolute top-0 right-0 w-28 h-28 bg-brand-primary/5 rounded-full blur-3xl" />

            <div className="relative flex items-start gap-4">
              <div className="relative shrink-0">
                <img
                  src={vet.image}
                  alt={vet.name}
                  className="w-20 h-20 rounded-2xl object-cover shadow-sm"
                />

                <div
                  className={`
                    absolute
                    -bottom-1
                    -right-1
                    w-5
                    h-5
                    rounded-full
                    border-2
                    border-white

                    ${vet.available ? 'bg-green-500' : 'bg-red-500'}
                  `}
                />
              </div>

              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h4 className="text-base font-bold text-brand-dark leading-tight">
                      {vet.name}
                    </h4>

                    <p className="text-xs text-brand-primary font-semibold mt-1">
                      {vet.specialty}
                    </p>
                  </div>

                  <div className="bg-amber-50 text-amber-600 text-xs font-bold px-3 py-1 rounded-xl shrink-0">
                    ★ {vet.rating}
                  </div>
                </div>

                <div className="mt-4 flex flex-wrap items-center gap-2">
                  <span className="bg-zinc-100 text-gray-600 text-[11px] font-medium px-3 py-1 rounded-full">
                    {vet.experience}
                  </span>

                  <span
                    className={`
                      text-[11px]
                      font-semibold
                      px-3
                      py-1
                      rounded-full

                      ${
                        vet.available
                          ? 'bg-green-50 text-green-600'
                          : 'bg-red-50 text-red-600'
                      }
                    `}
                  >
                    {vet.available ? 'Disponível' : 'Indisponível'}
                  </span>
                </div>

                <div className="mt-5 flex items-center justify-between">
                  <div>
                    <p className="text-[11px] text-gray-400">
                      Próximo horário
                    </p>

                    <p className="text-sm font-bold text-brand-dark">
                      Hoje • 14:30
                    </p>
                  </div>

                  <div
                    className={`
                      px-4
                      py-2
                      rounded-2xl
                      text-xs
                      font-bold
                      transition-all

                      ${
                        vet.available
                          ? 'bg-brand-primary text-white group-hover:scale-105'
                          : 'bg-gray-200 text-gray-500'
                      }
                    `}
                  >
                    Selecionar
                  </div>
                </div>
              </div>
            </div>
          </button>
        ))}
      </div>
    </section>
  );
}
