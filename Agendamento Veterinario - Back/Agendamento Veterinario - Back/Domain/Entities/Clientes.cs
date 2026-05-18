namespace Agendamento_Veterinario___Back.Domain.Entities
{
    public class Clientes
    {

        public int Id { get; set; }

        public string Nome { get; set; }

        public string CPF { get; set; }

        public string Email { get; set; }

        public string Telefone { get; set; }

        public string Endereco { get; set; }
        public string Cidade { get; set; }

        public string Estado { get; set; }

        public string CEP { get; set; }

        public DateTime DataCriacao { get; set; } = DateTime.UtcNow;

        public DateTime? DataAtualizacao { get; set; }

        public bool Ativo { get; set; } = true;

        public virtual ICollection<Pet> Animais { get; set; } = new List<Pet>();

        public virtual ICollection<Agendamento> Agendamentos { get; set; } = new List<Agendamento>();

       

        public Clientes(string nome, string cpf, string email, string telefone, string endereco)
        {
            Nome = nome;
            CPF = cpf;
            Email = email;
            Telefone = telefone;
            Endereco = endereco;
        }
    }
}

