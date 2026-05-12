import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { MainLayout } from '../components/layout/MainLayout';
import NewBooking from '../pages/NewBooking';

export const AppRoutes = () => (
  <BrowserRouter>
    <Routes>
      <Route element={<MainLayout />}>
        {/* Redireciona a página inicial para o novo agendamento */}
        <Route path="/" element={<Navigate to="/novo-agendamento" replace />} />
        <Route path="/novo-agendamento" element={<NewBooking />} />
        
        {/* Adicione rotas vazias para não quebrar ao clicar nos outros links da sidebar */}
        <Route path="/meus-agendamentos" element={<div className="p-8">Tela de Meus Agendamentos</div>} />
        <Route path="/pets" element={<div className="p-8">Tela de Pets</div>} />
        <Route path="/veterinarios" element={<div className="p-8">Tela de Veterinários</div>} />
        <Route path="/notificacoes" element={<div className="p-8">Tela de Notificações</div>} />
      </Route>
    </Routes>
  </BrowserRouter>
);