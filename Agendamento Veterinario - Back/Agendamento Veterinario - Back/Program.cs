using Agendamento_Veterinario___Back.Domain.Repositories;
using Agendamento_Veterinario___Back.Domain.Services;
using Agendamento_Veterinario___Back.Repositories;
using Agendamento_Veterinario___Back.Services;

namespace Agendamento_Veterinario___Back
{
    public class Program
    {
        public static void Main(string[] args)
        {
            var builder = WebApplication.CreateBuilder(args);

            // Add services to the container.

            builder.Services.AddControllers();
            builder.Services.AddScoped(typeof(IRepository<,>), typeof(GenericRepository<,>));
            builder.Services.AddScoped<IClienteService, ClienteService>();
            builder.Services.AddScoped<IPetService, PetService>();
            builder.Services.AddScoped<IVeterinarioService, VeterinarioService>();
            builder.Services.AddScoped<IAgendamentoService, AgendamentoService>();
            builder.Services.AddScoped<IUsuarioService, UsuarioService>();
            // Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
            builder.Services.AddEndpointsApiExplorer();
            builder.Services.AddSwaggerGen();

            var app = builder.Build();

            // Configure the HTTP request pipeline.
            if (app.Environment.IsDevelopment())
            {
                app.UseSwagger();
                app.UseSwaggerUI();
            }

            app.UseHttpsRedirection();

            app.UseAuthorization();


            app.MapControllers();

            app.Run();
        }
    }
}

