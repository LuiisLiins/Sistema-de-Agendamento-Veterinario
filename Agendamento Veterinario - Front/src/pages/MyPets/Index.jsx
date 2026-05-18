import {
  PawPrint,
  Plus,
  Search,
  Heart,
  Weight,
  Syringe,
  MoreHorizontal,
} from 'lucide-react';

export default function MyPets() {
  const pets = [
    {
      id: 1,
      name: 'Rex',
      breed: 'Golden Retriever',
      age: '4 anos',
      weight: '32kg',
      health: 'Saudável',
      vaccine: 'Em dia',
      image:
        'https://images.dog.ceo/breeds/retriever-golden/n02099601_3004.jpg',
    },
    {
      id: 2,
      name: 'Luna',
      breed: 'Shih Tzu',
      age: '2 anos',
      weight: '7kg',
      health: 'Acompanhamento',
      vaccine: 'Pendente',
      image:
        'https://images.dog.ceo/breeds/terrier-norfolk/n02094114_3325.jpg',
    },
    {
      id: 3,
      name: 'Thor',
      breed: 'Pastor Alemão',
      age: '5 anos',
      weight: '40kg',
      health: 'Saudável',
      vaccine: 'Em dia',
      image:
        'https://images.dog.ceo/breeds/germanshepherd/n02106662_6950.jpg',
    },
  ];

  function vaccineStyle(status) {
    if (status === 'Em dia') {
      return 'bg-green-50 text-green-600 border-green-100';
    }

    return 'bg-amber-50 text-amber-600 border-amber-100';
  }

  return (
    <div className="space-y-8">

      {/* HEADER */}
      <div className="flex flex-col xl:flex-row xl:items-center xl:justify-between gap-6">

        <div>
          <h1 className="text-3xl font-bold text-brand-dark flex items-center gap-3">
            <PawPrint className="text-brand-primary" />
            Meus Pets
          </h1>

          <p className="text-sm text-gray-400 mt-2">
            Gerencie informações, histórico e saúde dos seus pets.
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
              placeholder="Buscar pet..."
              className="bg-white border border-gray-100 rounded-2xl pl-11 pr-4 py-3 text-sm outline-none shadow-sm w-[250px] focus:border-brand-primary transition-all"
            />
          </div>

          <button className="bg-brand-primary hover:opacity-90 transition-all text-white px-5 py-3 rounded-2xl shadow-lg flex items-center gap-2 font-semibold text-sm">
            <Plus size={18} />
            Novo Pet
          </button>

        </div>
      </div>

      {/* STATS */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5">

        <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100">
          <p className="text-sm text-gray-400 font-medium">
            Total de Pets
          </p>

          <h2 className="text-4xl font-bold text-brand-dark mt-3">
            03
          </h2>
        </div>

        <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100">
          <p className="text-sm text-gray-400 font-medium">
            Vacinas em dia
          </p>

          <h2 className="text-4xl font-bold text-brand-dark mt-3">
            02
          </h2>
        </div>

        <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100">
          <p className="text-sm text-gray-400 font-medium">
            Consultas este mês
          </p>

          <h2 className="text-4xl font-bold text-brand-dark mt-3">
            05
          </h2>
        </div>

        <div className="bg-brand-primary rounded-3xl p-6 shadow-lg text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-3xl" />

          <div className="relative z-10">
            <p className="text-sm text-white/70 font-medium">
              Próxima vacina
            </p>

            <h2 className="text-xl font-bold mt-4 leading-relaxed">
              Luna • 18 Maio
            </h2>
          </div>
        </div>

      </div>

      {/* GRID PETS */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">

        {pets.map((pet) => (
          <div
            key={pet.id}
            className="group bg-white rounded-[30px] shadow-sm border border-gray-100 overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
          >

            <div className="relative h-56 overflow-hidden">

              <img
                src={pet.image}
                alt={pet.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-all duration-500"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0" />

              <button className="absolute top-5 right-5 w-11 h-11 rounded-2xl bg-white/80 backdrop-blur-md flex items-center justify-center hover:bg-white transition-all">
                <MoreHorizontal size={18} className="text-brand-dark" />
              </button>

              <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between">

                <div>
                  <h2 className="text-3xl font-bold text-white">
                    {pet.name}
                  </h2>

                  <p className="text-sm text-white/80 mt-1">
                    {pet.breed}
                  </p>
                </div>

                <div className="bg-white/15 backdrop-blur-md px-4 py-2 rounded-2xl border border-white/10">
                  <span className="text-white text-sm font-bold">
                    {pet.age}
                  </span>
                </div>

              </div>
            </div>

            <div className="p-6 space-y-5">

              <div className="grid grid-cols-2 gap-4">

                <div className="bg-zinc-50 rounded-2xl p-4 border border-zinc-100">
                  <div className="flex items-center gap-2 text-gray-400 mb-2">
                    <Weight size={16} />
                    <span className="text-xs font-semibold uppercase tracking-wide">
                      Peso
                    </span>
                  </div>

                  <h4 className="text-lg font-bold text-brand-dark">
                    {pet.weight}
                  </h4>
                </div>

                <div className="bg-zinc-50 rounded-2xl p-4 border border-zinc-100">
                  <div className="flex items-center gap-2 text-gray-400 mb-2">
                    <Heart size={16} />
                    <span className="text-xs font-semibold uppercase tracking-wide">
                      Saúde
                    </span>
                  </div>

                  <h4 className="text-lg font-bold text-brand-dark">
                    {pet.health}
                  </h4>
                </div>

              </div>

              <div className="flex items-center justify-between flex-wrap gap-4">

                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-brand-soft flex items-center justify-center">
                    <Syringe className="text-brand-primary" size={20} />
                  </div>

                  <div>
                    <p className="text-xs text-gray-400 uppercase tracking-wide font-semibold">
                      Vacinação
                    </p>

                    <span
                      className={`
                        inline-flex
                        mt-1
                        px-3
                        py-1
                        rounded-full
                        border
                        text-xs
                        font-bold
                        ${vaccineStyle(pet.vaccine)}
                      `}
                    >
                      {pet.vaccine}
                    </span>
                  </div>
                </div>

                <button className="bg-zinc-100 hover:bg-brand-primary hover:text-white transition-all px-5 py-3 rounded-2xl text-sm font-bold text-brand-dark">
                  Ver perfil
                </button>

              </div>

            </div>
          </div>
        ))}

      </div>
    </div>
  );
}
