namespace Agendamento_Veterinario___Back.Domain.Entities
{
   
        public class Pet
        {
            public int Id { get; set; }

            public int ClienteId { get; set; }

            public string Nome { get; set; }

            public string Especie { get; set; }

            public string Raca { get; set; }

            public decimal Peso { get; set; }

            public DateTime DataNascimento { get; set; }

            public string Cor { get; set; }

            public string Sexo { get; set; }

            public string NumeroMicrochip { get; set; }

            public DateTime DataCriacao { get; set; } = DateTime.UtcNow;

            public DateTime? DataAtualizacao { get; set; }

            public bool Ativo { get; set; } = true;

            
            public virtual Clientes Cliente { get; set; }

            public virtual ICollection<Agendamento> Agendamentos { get; set; } = new List<Agendamento>();

          
            public Pet(int clienteId, string nome, string especie, string raca, decimal peso, DateTime dataNascimento)
            {
                ClienteId = clienteId;
                Nome = nome;
                Especie = especie;
                Raca = raca;
                Peso = peso;
                DataNascimento = dataNascimento;
            }

            public int GetIdadeEmAnos()
            {
                var hoje = DateTime.UtcNow;
                var idade = hoje.Year - DataNascimento.Year;

                if (DataNascimento.Date > hoje.AddYears(-idade))
                    idade--;

                return idade;
            }
        }
    }


