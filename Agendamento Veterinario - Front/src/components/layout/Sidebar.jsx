import { CalendarPlus, Calendar, Dog, User, Bell, LogOut } from 'lucide-react';
import { NavLink } from 'react-router-dom';


const SidebarItem = ({ icon: Icon, label, to, badge }) => (
  <NavLink 
    to={to} 
    className={({ isActive }) => 
      `flex items-center justify-between p-3 rounded-xl transition-all group 
      ${isActive ? 'bg-white/10 text-white shadow-sm' : 'text-white/60 hover:bg-white/5 hover:text-white'}`
    }
  >
    <div className="flex items-center gap-3">
      <Icon size={20} />
      <span className="font-medium text-sm">{label}</span>
    </div>
    {badge && <span className="bg-brand-primary text-[10px] px-1.5 py-0.5 rounded-full text-white">{badge}</span>}
  </NavLink>
);

export const Sidebar = () => (
  <aside className="w-64 bg-brand-dark min-h-screen p-6 flex flex-col fixed left-0 top-0 shadow-2xl">
    <div className="flex items-center gap-3 mb-10 px-2 text-white">
      <div className="bg-white p-2 rounded-xl rotate-3">
        <Dog className="text-brand-dark" size={22} />
      </div>
      <span className="text-xl font-bold tracking-tight">VetAgenda</span>
    </div>
    
    <nav className="flex-1 space-y-1">
      {/* Agora passamos o caminho 'to' para cada item */}
      <SidebarItem icon={CalendarPlus} label="Novo Agendamento" to="/novo-agendamento" />
      <SidebarItem icon={Calendar} label="Meus Agendamentos" to="/meus-agendamentos" />
      <SidebarItem icon={Dog} label="Pets" to="/pets" />
      <SidebarItem icon={User} label="Veterinários" to="/veterinarios" />
      <SidebarItem icon={Bell} label="Notificações" to="/notificacoes" badge="3" />
    </nav>
    
    <div className="mt-auto pt-6 border-t border-white/10">
      <SidebarItem icon={LogOut} label="Sair" to="/login" />
    </div>
  </aside>
);