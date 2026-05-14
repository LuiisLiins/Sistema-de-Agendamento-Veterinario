import {
  CalendarDays,
  Clock3,
  PawPrint,
  Search,
  Filter,
  MoreHorizontal,
} from 'lucide-react';

export default function MyBookings() {
  const bookings = [
    {
      id: 1,
      pet: 'Rex',
      breed: 'Golden Retriever',
      service: 'Consulta Geral',
      vet: 'Dra. Ana Beatriz',
      date: '13 Maio 2026',
      hour: '10:30',
      status: 'Confirmado',
      image:
        'https://images.dog.ceo/breeds/retriever-golden/n02099601_3004.jpg',
    },
    {
      id: 2,
      pet: 'Luna',
      breed: 'Shih Tzu',
      service: 'Vacinação',
      vet: 'Dr. Ricardo Lima',
      date: '15 Maio 2026',
      hour: '14:00',
      status: 'Pendente',
      image:
        'https://images.dog.ceo/breeds/terrier-norfolk/n02094114_3325.jpg',
    },
    {
      id: 3,
      pet: 'Thor',
      breed: 'Pastor Alemão',
      service: 'Banho e Tosa',
      vet: 'Dra. Juliana Costa',
      date: '18 Maio 2026',
      hour: '09:00',
      status: 'Concluído',
      image:
        'https://images.dog.ceo/breeds/germanshepherd/n02106662_6950.jpg',
    },
  ];

  function getStatusStyle(status) {
    switch (status) {
      case 'Confirmado':
        return 'bg-green-50 text-green-600 border-green-100';

      case 'Pendente':
        return 'bg-amber-50 text-amber-600 border-amber-100';

      case 'Concluído':
        return 'bg-blue-50 text-blue-600 border-blue-100';

      default:
        return 'bg-zinc-100 text-zinc-600 border-zinc-200';
    }
  }

  return (
    <div className="space-y-8">

      {/* HEADER */}
      <div className="flex flex-col xl:flex-row xl:items-center xl:justify-between gap-6">

        <div>
          <h1 className="text-3xl font-bold text-brand-dark flex items-center gap-3">
            <CalendarDays className="text-brand-primary" />
            Meus Agendamentos
          </h1>

          <p className="text-sm text-gray-400 mt-2">
            Gerencie consultas, serviços e atendimentos do seu pet.
          </p>
        </div>

        <div className="flex items-center gap-4 flex-wrap">

          <div className="relative">
            <Search
              size={18}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
            />

            <input
              type="text"
              placeholder="Buscar agendamento..."
              className="bg-white border border-gray-100 rounded-2xl pl-11 pr-4 py-3 text-sm outline-none shadow-sm w-[260px] focus:border-brand-primary transition-all"
            />
          </div>

          <button className="bg-white border border-gray-100 rounded-2xl px-5 py-3 flex items-center gap-2 shadow-sm hover:border-brand-primary transition-all">
            <Filter size={16} />
            <span className="text-sm font-semibold text-brand-dark">
              Filtrar
            </span>
          </button>

        </div>
      </div>

      {/* CARDS DE STATUS */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5">

        <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100">
          <p className="text-sm text-gray-400 font-medium">
            Próximas Consultas
          </p>

          <h2 className="text-4xl font-bold text-brand-dark mt-3">
            08
          </h2>
        </div>

        <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100">
          <p className="text-sm text-gray-400 font-medium">
            Concluídos
          </p>

          <h2 className="text-4xl font-bold text-brand-dark mt-3">
            24
          </h2>
        </div>

        <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100">
          <p className="text-sm text-gray-400 font-medium">
            Pets Atendidos
          </p>

          <h2 className="text-4xl font-bold text-brand-dark mt-3">
            03
          </h2>
        </div>

        <div className="bg-brand-primary rounded-3xl p-6 shadow-lg text-white overflow-hidden relative">
          <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-3xl" />

          <div className="relative z-10">
            <p className="text-sm text-white/70 font-medium">
              Próximo Atendimento
            </p>

            <h2 className="text-xl font-bold mt-4 leading-relaxed">
              Hoje às 10:30
            </h2>
          </div>
        </div>

      </div>

      {/* LISTA */}
      <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">

        <div className="p-6 border-b border-gray-100 flex items-center justify-between">
          <div>
            <h3 className="text-lg font-bold text-brand-dark">
              Lista de agendamentos
            </h3>

            <p className="text-sm text-gray-400 mt-1">
              Visualize e acompanhe seus atendimentos.
            </p>
          </div>
        </div>

        <div className="divide-y divide-gray-100">

          {bookings.map((booking) => (
            <div
              key={booking.id}
              className="p-6 hover:bg-zinc-50/80 transition-all"
            >

              <div className="flex flex-col xl:flex-row xl:items-center xl:justify-between gap-6">

                <div className="flex items-center gap-5 min-w-0">

                  <img
                    src={booking.image}
                    alt={booking.pet}
                    className="w-20 h-20 rounded-3xl object-cover shadow-sm shrink-0"
                  />

                  <div className="min-w-0">
                    <div className="flex items-center gap-3 flex-wrap">

                      <h4 className="text-lg font-bold text-brand-dark">
                        {booking.pet}
                      </h4>

                      <span
                        className={`
                          px-3
                          py-1
                          rounded-full
                          border
                          text-xs
                          font-bold
                          ${getStatusStyle(booking.status)}
                        `}
                      >
                        {booking.status}
                      </span>

                    </div>

                    <p className="text-sm text-gray-400 mt-1">
                      {booking.breed}
                    </p>

                    <div className="flex flex-wrap items-center gap-4 mt-4">

                      <div className="flex items-center gap-2 text-sm text-gray-500">
                        <PawPrint size={15} />
                        {booking.service}
                      </div>

                      <div className="flex items-center gap-2 text-sm text-gray-500">
                        <CalendarDays size={15} />
                        {booking.date}
                      </div>

                      <div className="flex items-center gap-2 text-sm text-gray-500">
                        <Clock3 size={15} />
                        {booking.hour}
                      </div>

                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-4 justify-between xl:justify-end">

                  <div className="text-left xl:text-right">
                    <p className="text-xs text-gray-400 uppercase tracking-wide font-semibold">
                      Veterinário
                    </p>

                    <h5 className="text-sm font-bold text-brand-dark mt-1">
                      {booking.vet}
                    </h5>
                  </div>

                  <button className="w-12 h-12 rounded-2xl bg-zinc-100 hover:bg-zinc-200 transition-all flex items-center justify-center shrink-0">
                    <MoreHorizontal size={18} className="text-brand-dark" />
                  </button>

                </div>

              </div>
            </div>
          ))}

        </div>
      </div>
    </div>
  );
}
