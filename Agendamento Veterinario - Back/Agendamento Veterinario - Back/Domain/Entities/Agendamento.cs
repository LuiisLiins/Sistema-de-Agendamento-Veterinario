namespace Agendamento_Veterinario___Back.Domain.Entities
{
    public class Agendamento
    {
        public int Id { get; set; }

        public int ClienteId { get; set; }

        public int PetId { get; set; }

        public int VeterinarioId { get; set; }

        public DateTime DataHoraAgendamento { get; set; }

        public DateTime? DataHoraFim { get; set; }

        public string TipoServico { get; set; }

        public string Descricao { get; set; }

        public decimal Valor { get; set; }


        public string Observacoes { get; set; }

        public DateTime DataCriacao { get; set; } = DateTime.UtcNow;

        public DateTime? DataAtualizacao { get; set; }

        public bool Ativo { get; set; } = true;

        
        public virtual Clientes Cliente { get; set; }

        public virtual Pet  Pet { get; set; }

        public virtual Veterinario Veterinario { get; set; }
        public object StatusAgendamento { get; private set; }

     

        public Agendamento(int clienteId, int petId, int veterinarioId, DateTime dataHora,
                          string tipoServico, decimal valor)
        {
            ClienteId = clienteId;
            PetId = petId;
            VeterinarioId = veterinarioId;
            DataHoraAgendamento = dataHora;
            TipoServico = tipoServico;
            Valor = valor;
        }

       
        }
    }

 
