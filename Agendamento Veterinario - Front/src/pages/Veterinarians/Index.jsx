import {
  Stethoscope,
  Search,
  Star,
  MapPin,
  Clock3,
  CalendarDays,
  Filter,
} from 'lucide-react';

export default function Veterinarians() {
  const vets = [
    {
      id: 1,
      name: 'Dra. Ana Beatriz',
      specialty: 'Clínica Geral',
      experience: '8 anos',
      rating: 4.9,
      location: 'São Paulo • SP',
      nextAvailable: 'Hoje • 14:30',
      image: 'https://i.pravatar.cc/300?img=32',
      online: true,
      description:
        'Especialista em atendimento clínico geral e check-up preventivo para cães e gatos.',
    },
    {
      id: 2,
      name: 'Dr. Ricardo Lima',
      specialty: 'Cardiologia Veterinária',
      experience: '12 anos',
      rating: 4.8,
      location: 'Campinas • SP',
      nextAvailable: 'Amanhã • 09:00',
      image: 'https://i.pravatar.cc/300?img=12',
      online: true,
      description:
        'Referência em cardiologia animal e acompanhamento cardíaco especializado.',
    },
    {
      id: 3,
      name: 'Dra. Juliana Costa',
      specialty: 'Dermatologia Animal',
      experience: '6 anos',
      rating: 4.7,
      location: 'Santos • SP',
      nextAvailable: 'Sex • 11:00',
      image: 'https://i.pravatar.cc/300?img=47',
      online: false,
      description:
        'Atendimento especializado em alergias, infecções e cuidados dermatológicos.',
    },
    {
      id: 4,
      name: 'Dr. Felipe Martins',
      specialty: 'Ortopedia Veterinária',
      experience: '10 anos',
      rating: 5.0,
      location: 'São Paulo • SP',
      nextAvailable: 'Hoje • 17:00',
      image: 'https://i.pravatar.cc/300?img=15',
      online: true,
      description:
        'Especialista em cirurgias ortopédicas e recuperação motora animal.',
    },
  ];

  return (
    <div className="space-y-8">

      {/* HEADER */}
      <div className="flex flex-col xl:flex-row xl:items-center xl:justify-between gap-6">

        <div>
          <h1 className="text-3xl font-bold text-brand-dark flex items-center gap-3">
            <Stethoscope className="text-brand-primary" />
            Veterinários
          </h1>

          <p className="text-sm text-gray-400 mt-2">
            Encontre especialistas para cuidar do seu pet.
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
              placeholder="Buscar veterinário..."
              className="bg-white border border-gray-100 rounded-2xl pl-11 pr-4 py-3 text-sm outline-none shadow-sm w-65 focus:border-brand-primary transition-all"
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

      {/* STATS */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5">

        <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100">
          <p className="text-sm text-gray-400 font-medium">
            Especialistas
          </p>

          <h2 className="text-4xl font-bold text-brand-dark mt-3">
            24
          </h2>
        </div>

        <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100">
          <p className="text-sm text-gray-400 font-medium">
            Online agora
          </p>

          <h2 className="text-4xl font-bold text-brand-dark mt-3">
            12
          </h2>
        </div>

        <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100">
          <p className="text-sm text-gray-400 font-medium">
            Avaliação média
          </p>

          <h2 className="text-4xl font-bold text-brand-dark mt-3">
            4.9
          </h2>
        </div>

        <div className="bg-brand-primary rounded-3xl p-6 shadow-lg text-white overflow-hidden relative">
          <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-3xl" />

          <div className="relative z-10">
            <p className="text-sm text-white/70 font-medium">
              Próximo disponível
            </p>

            <h2 className="text-xl font-bold mt-4 leading-relaxed">
              Hoje • 14:30
            </h2>
          </div>
        </div>

      </div>

      {/* GRID */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">

        {vets.map((vet) => (
          <div
            key={vet.id}
            className="group bg-white rounded-4xl border border-gray-100 shadow-sm overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
          >

            <div className="relative p-7 overflow-hidden">

              <div className="absolute top-0 right-0 w-40 h-40 bg-brand-primary/5 rounded-full blur-3xl" />

              <div className="relative z-10 flex flex-col lg:flex-row gap-6">

                <div className="relative shrink-0">
                  <img
                    src={vet.image}
                    alt={vet.name}
                    className="w-28 h-28 rounded-3xl object-cover shadow-sm"
                  />

                  <div
                    className={`
                      absolute
                      bottom-1
                      right-1
                      w-5
                      h-5
                      rounded-full
                      border-2
                      border-white

                      ${vet.online ? 'bg-green-500' : 'bg-gray-400'}
                    `}
                  />
                </div>

                <div className="flex-1 min-w-0">

                  <div className="flex flex-wrap items-start justify-between gap-4">

                    <div>
                      <h2 className="text-2xl font-bold text-brand-dark">
                        {vet.name}
                      </h2>

                      <p className="text-sm font-semibold text-brand-primary mt-1">
                        {vet.specialty}
                      </p>
                    </div>

                    <div className="bg-amber-50 border border-amber-100 px-4 py-2 rounded-2xl flex items-center gap-2 shrink-0">
                      <Star size={16} className="text-amber-500 fill-amber-500" />

                      <span className="text-sm font-bold text-amber-600">
                        {vet.rating}
                      </span>
                    </div>

                  </div>

                  <p className="text-sm text-gray-500 leading-relaxed mt-5">
                    {vet.description}
                  </p>

                  <div className="flex flex-wrap items-center gap-3 mt-5">

                    <span className="bg-zinc-100 text-gray-600 text-xs font-semibold px-4 py-2 rounded-full">
                      {vet.experience} de experiência
                    </span>

                    <span
                      className={`
                        text-xs
                        font-bold
                        px-4
                        py-2
                        rounded-full

                        ${
                          vet.online
                            ? 'bg-green-50 text-green-600'
                            : 'bg-zinc-100 text-zinc-500'
                        }
                      `}
                    >
                      {vet.online ? 'Online' : 'Offline'}
                    </span>

                  </div>

                </div>

              </div>
            </div>

            <div className="border-t border-gray-100 p-6 bg-zinc-50/60">

              <div className="flex flex-col xl:flex-row xl:items-center xl:justify-between gap-5">

                <div className="flex flex-wrap items-center gap-5 text-sm text-gray-500">

                  <div className="flex items-center gap-2">
                    <MapPin size={16} />
                    {vet.location}
                  </div>

                  <div className="flex items-center gap-2">
                    <Clock3 size={16} />
                    {vet.nextAvailable}
                  </div>

                </div>

                <div className="flex items-center gap-3">

                  <button className="bg-white border border-gray-200 hover:border-brand-primary transition-all px-5 py-3 rounded-2xl text-sm font-bold text-brand-dark">
                    Ver perfil
                  </button>

                  <button className="bg-brand-primary hover:opacity-90 transition-all text-white px-5 py-3 rounded-2xl text-sm font-bold shadow-lg flex items-center gap-2">
                    <CalendarDays size={16} />
                    Agendar
                  </button>

                </div>

              </div>

            </div>

          </div>
        ))}

      </div>
    </div>
  );
}
