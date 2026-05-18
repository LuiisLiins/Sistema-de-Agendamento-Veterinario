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

export function HoursSelectionSection() {
  const dates = [
    {
      day: 'Seg',
      number: '12',
      month: 'Mai',
      selected: false,
    },
    {
      day: 'Ter',
      number: '13',
      month: 'Mai',
      selected: true,
    },
    {
      day: 'Qua',
      number: '14',
      month: 'Mai',
      selected: false,
    },
    {
      day: 'Qui',
      number: '15',
      month: 'Mai',
      selected: false,
    },
    {
      day: 'Sex',
      number: '16',
      month: 'Mai',
      selected: false,
    },
  ];

  const hours = [
    '08:00',
    '08:30',
    '09:00',
    '09:30',
    '10:00',
    '10:30',
    '11:00',
    '13:30',
    '14:00',
    '14:30',
    '15:00',
    '16:00',
  ];

  return (
    <section className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-sm font-bold text-brand-dark mb-1">
            3. Selecione o horário
          </h3>

          <p className="text-xs text-gray-400">
            Escolha uma data e horário disponível para o atendimento.
          </p>
        </div>

        <div className="bg-white px-4 py-2 rounded-2xl shadow-sm border border-gray-100">
          <p className="text-xs text-gray-500 font-medium">
            Fuso horário • GMT-3
          </p>
        </div>
      </div>

      <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100 space-y-6">
        <div>
          <div className="flex items-center justify-between mb-4">
            <h4 className="text-sm font-bold text-brand-dark">
              Datas disponíveis
            </h4>

            <button className="text-xs font-semibold text-brand-primary hover:opacity-80 transition-all">
              Ver calendário
            </button>
          </div>

          <div className="flex gap-4 overflow-x-auto pb-2">
            {dates.map((date) => (
              <button
                key={date.number}
                className={`
                  min-w-[90px]
                  rounded-2xl
                  p-4
                  border
                  transition-all
                  duration-300
                  text-center
                  shrink-0

                  ${
                    date.selected
                      ? 'bg-brand-primary border-brand-primary text-white shadow-lg scale-105'
                      : 'bg-zinc-50 border-zinc-100 hover:border-brand-primary hover:-translate-y-1'
                  }
                `}
              >
                <p
                  className={`
                    text-xs font-semibold uppercase tracking-wide
                    ${date.selected ? 'text-white/80' : 'text-gray-400'}
                  `}
                >
                  {date.day}
                </p>

                <h2 className="text-2xl font-bold mt-1">
                  {date.number}
                </h2>

                <p
                  className={`
                    text-xs mt-1 font-medium
                    ${date.selected ? 'text-white/80' : 'text-gray-500'}
                  `}
                >
                  {date.month}
                </p>
              </button>
            ))}
          </div>
        </div>

        <div>
          <div className="flex items-center justify-between mb-4">
            <h4 className="text-sm font-bold text-brand-dark">
              Horários disponíveis
            </h4>

            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-green-500" />

              <span className="text-xs text-gray-500 font-medium">
                12 horários livres
              </span>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4">
            {hours.map((hour, index) => {
              const selected = index === 5;

              return (
                <button
                  key={hour}
                  className={`
                    relative
                    py-4
                    rounded-2xl
                    border
                    text-sm
                    font-bold
                    transition-all
                    duration-300
                    overflow-hidden

                    ${
                      selected
                        ? 'bg-brand-primary border-brand-primary text-white shadow-lg scale-[1.03]'
                        : 'bg-zinc-50 border-zinc-100 text-brand-dark hover:border-brand-primary hover:-translate-y-1 hover:bg-white'
                    }
                  `}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-white/0 to-white/10 pointer-events-none" />

                  <span className="relative z-10">
                    {hour}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        <div className="bg-brand-soft/30 border border-brand-soft rounded-2xl p-5 flex items-start gap-4">
          <div className="w-10 h-10 rounded-2xl bg-brand-primary text-white flex items-center justify-center text-lg font-bold shrink-0">
            ✓
          </div>

          <div>
            <h5 className="text-sm font-bold text-brand-dark mb-1">
              Horário selecionado
            </h5>

            <p className="text-xs text-gray-500 leading-relaxed">
              Consulta agendada para terça-feira, 13 de maio às 10:30.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export function ServiceSelectionSection() {
  const services = [
    {
      id: 1,
      name: 'Consulta Geral',
      duration: '30 min',
      price: 'R$ 120',
      description: 'Avaliação clínica completa para check-up e diagnóstico.',
      icon: '🩺',
      selected: true,
    },
    {
      id: 2,
      name: 'Vacinação',
      duration: '20 min',
      price: 'R$ 90',
      description: 'Aplicação de vacinas essenciais para proteção do pet.',
      icon: '💉',
      selected: false,
    },
    {
      id: 3,
      name: 'Banho e Tosa',
      duration: '1h 30min',
      price: 'R$ 150',
      description: 'Serviço completo de higiene e estética animal.',
      icon: '✂️',
      selected: false,
    },
    {
      id: 4,
      name: 'Exames Laboratoriais',
      duration: '45 min',
      price: 'R$ 210',
      description: 'Coleta e análise para exames clínicos veterinários.',
      icon: '🧪',
      selected: false,
    },
  ];

  return (
    <section className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-sm font-bold text-brand-dark mb-1">
            4. Selecione o serviço
          </h3>

          <p className="text-xs text-gray-400">
            Escolha o tipo de atendimento desejado para o seu pet.
          </p>
        </div>

        <div className="bg-white px-4 py-2 rounded-2xl shadow-sm border border-gray-100">
          <p className="text-xs font-medium text-gray-500">
            4 serviços disponíveis
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-5">
        {services.map((service) => (
          <button
            key={service.id}
            className={`
              group
              relative
              bg-white
              rounded-3xl
              p-6
              border
              text-left
              transition-all
              duration-300
              overflow-hidden

              ${
                service.selected
                  ? 'border-brand-primary shadow-xl scale-[1.02]'
                  : 'border-gray-100 hover:border-brand-primary hover:-translate-y-1 hover:shadow-lg'
              }
            `}
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-brand-primary/5 rounded-full blur-3xl" />

            <div className="relative z-10">
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-center gap-4">
                  <div
                    className={`
                      w-16
                      h-16
                      rounded-2xl
                      flex
                      items-center
                      justify-center
                      text-3xl
                      shadow-sm

                      ${
                        service.selected
                          ? 'bg-brand-primary text-white'
                          : 'bg-zinc-100'
                      }
                    `}
                  >
                    {service.icon}
                  </div>

                  <div>
                    <h4 className="text-base font-bold text-brand-dark">
                      {service.name}
                    </h4>

                    <p className="text-xs text-gray-400 mt-1 leading-relaxed max-w-[220px]">
                      {service.description}
                    </p>
                  </div>
                </div>

                <div
                  className={`
                    w-6
                    h-6
                    rounded-full
                    border-2
                    flex
                    items-center
                    justify-center
                    shrink-0
                    transition-all

                    ${
                      service.selected
                        ? 'border-brand-primary bg-brand-primary text-white'
                        : 'border-gray-300'
                    }
                  `}
                >
                  {service.selected && '✓'}
                </div>
              </div>

              <div className="mt-6 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="bg-zinc-100 text-gray-600 text-[11px] font-semibold px-3 py-1 rounded-full">
                    ⏱ {service.duration}
                  </span>
                </div>

                <div>
                  <p className="text-xs text-gray-400 text-right">
                    Valor
                  </p>

                  <h5 className="text-lg font-bold text-brand-primary">
                    {service.price}
                  </h5>
                </div>
              </div>
            </div>
          </button>
        ))}
      </div>

      <div className="bg-brand-soft/30 border border-brand-soft rounded-2xl p-5 flex items-start gap-4">
        <div className="w-10 h-10 rounded-2xl bg-brand-primary text-white flex items-center justify-center text-lg font-bold shrink-0">
          ✓
        </div>

        <div>
          <h5 className="text-sm font-bold text-brand-dark mb-1">
            Serviço selecionado
          </h5>

          <p className="text-xs text-gray-500 leading-relaxed">
            Consulta Geral • duração média de 30 minutos.
          </p>
        </div>
      </div>
    </section>
  );
}

