export function ConfirmBooking() {

  const bookingData = {
    pet: {
      name: 'Rex',
      breed: 'Golden Retriever',
      image:
        'https://images.dog.ceo/breeds/retriever-golden/n02099601_3004.jpg',
    },

    vet: {
      name: 'Dra. Ana Beatriz',
      specialty: 'Clínica Geral',
      image: 'https://i.pravatar.cc/300?img=32',
    },

    schedule: {
      date: '13 de Maio de 2026',
      hour: '10:30',
    },

    service: {
      name: 'Consulta Geral',
      duration: '30 min',
      price: 'R$ 120',
    },
  };

  return (
    <section className="space-y-6">

      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-sm font-bold text-brand-dark mb-1">
            5. Confirmar Agendamento
          </h3>

          <p className="text-xs text-gray-400">
            Revise todas as informações antes de finalizar.
          </p>
        </div>

        <div className="bg-green-50 border border-green-100 px-4 py-2 rounded-2xl">
          <p className="text-xs font-semibold text-green-600">
            Tudo pronto ✨
          </p>
        </div>
      </div>

      <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">

        {/* HEADER */}
        <div className="relative bg-brand-primary p-8 overflow-hidden">

          <div className="absolute top-0 right-0 w-52 h-52 bg-white/10 rounded-full blur-3xl" />

          <div className="relative z-10 flex items-center justify-between">

            <div>
              <p className="text-white/70 text-xs uppercase tracking-widest font-semibold">
                Resumo do atendimento
              </p>

              <h2 className="text-3xl font-bold text-white mt-2">
                Consulta Veterinária
              </h2>

              <p className="text-white/80 text-sm mt-2">
                Confira os detalhes do agendamento.
              </p>
            </div>

            <div className="hidden md:flex w-20 h-20 rounded-3xl bg-white/10 backdrop-blur-md items-center justify-center text-4xl">
              🐾
            </div>

          </div>
        </div>

        {/* CONTEÚDO */}
        <div className="p-8 space-y-8">

          {/* PET */}
          <div className="bg-zinc-50 rounded-3xl p-6 border border-zinc-100">
            <div className="flex items-center gap-5">

              <img
                src={bookingData.pet.image}
                alt={bookingData.pet.name}
                className="w-20 h-20 rounded-2xl object-cover shadow-sm"
              />

              <div className="flex-1">

                <p className="text-xs uppercase tracking-wide text-gray-400 font-semibold mb-1">
                  Pet selecionado
                </p>

                <h4 className="text-xl font-bold text-brand-dark">
                  {bookingData.pet.name}
                </h4>

                <p className="text-sm text-gray-500 mt-1">
                  {bookingData.pet.breed}
                </p>
              </div>

            </div>
          </div>

          {/* GRID */}
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-5">

            {/* Veterinário */}
            <div className="bg-zinc-50 rounded-3xl p-6 border border-zinc-100">

              <p className="text-xs uppercase tracking-wide text-gray-400 font-semibold mb-4">
                Veterinário
              </p>

              <div className="flex items-center gap-4">

                <img
                  src={bookingData.vet.image}
                  alt={bookingData.vet.name}
                  className="w-16 h-16 rounded-2xl object-cover shadow-sm"
                />

                <div>
                  <h4 className="text-base font-bold text-brand-dark">
                    {bookingData.vet.name}
                  </h4>

                  <p className="text-sm text-brand-primary font-semibold mt-1">
                    {bookingData.vet.specialty}
                  </p>
                </div>

              </div>
            </div>

            {/* Horário */}
            <div className="bg-zinc-50 rounded-3xl p-6 border border-zinc-100">

              <p className="text-xs uppercase tracking-wide text-gray-400 font-semibold mb-4">
                Data e horário
              </p>

              <div className="space-y-3">

                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">
                    Data
                  </span>

                  <span className="text-sm font-bold text-brand-dark">
                    {bookingData.schedule.date}
                  </span>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">
                    Horário
                  </span>

                  <span className="text-sm font-bold text-brand-dark">
                    {bookingData.schedule.hour}
                  </span>
                </div>

              </div>
            </div>

            {/* Serviço */}
            <div className="bg-zinc-50 rounded-3xl p-6 border border-zinc-100 xl:col-span-2">

              <p className="text-xs uppercase tracking-wide text-gray-400 font-semibold mb-4">
                Serviço selecionado
              </p>

              <div className="flex items-center justify-between flex-wrap gap-4">

                <div>
                  <h4 className="text-lg font-bold text-brand-dark">
                    {bookingData.service.name}
                  </h4>

                  <p className="text-sm text-gray-500 mt-1">
                    Duração aproximada de {bookingData.service.duration}
                  </p>
                </div>

                <div className="text-right">
                  <p className="text-xs text-gray-400">
                    Valor total
                  </p>

                  <h2 className="text-3xl font-bold text-brand-primary">
                    {bookingData.service.price}
                  </h2>
                </div>

              </div>

            </div>

          </div>

          {/* ALERTA */}
          <div className="bg-amber-50 border border-amber-100 rounded-3xl p-5">

            <div className="flex items-start gap-4">

              <div className="w-10 h-10 rounded-2xl bg-amber-100 flex items-center justify-center text-xl shrink-0">
                📌
              </div>

              <div>
                <h5 className="text-sm font-bold text-amber-700 mb-1">
                  Importante
                </h5>

                <p className="text-xs text-amber-600 leading-relaxed">
                  Chegue com pelo menos 10 minutos de antecedência para
                  garantir um atendimento tranquilo para você e seu pet.
                </p>
              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}