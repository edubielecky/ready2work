import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/header/header';
import MainPage from './pages/mainPage/mainPage';
import LoginPage from './pages/loginPage/loginPage';
import ManagerDashboard from './pages/managerDashboard/ManagerDashboard';
import MyTeamPage from './pages/minhaEquipe/MyTeamPage';
import MyProfilePage from './pages/myProfilePage/MyProfilePage';

// Logins fictícios para simulação
const fakeUsers = {
  'colaborador': { password: '123', role: 'collaborator' },
  'gestor': { password: '123', role: 'manager' },
  'diretor': { password: '123', role: 'director' },
};

function App() {
  const [userRole, setUserRole] = useState(null); // Começa como null (não logado)

  const handleLogin = (username, password) => {
    const user = fakeUsers[username];
    if (user && user.password === password) {
      setUserRole(user.role);
      return true; // Sucesso no login
    }
    return false; // Falha no login
  };

  return (
    <Router>
      {/* Renderiza o Header apenas se o usuário estiver logado */}
      {userRole && <Header userRole={userRole} />}
      <main>
        <Routes>
          {!userRole ? (
            // Se não estiver logado, a única rota é a de login
            <Route path="*" element={<LoginPage onLogin={handleLogin} />} />
          ) : (
            // Se estiver logado, define as rotas protegidas. Usamos um Fragment <> para agrupar múltiplas rotas.
            <>
              <Route path="/" element={<MainPage />} />
              <Route path="/dashboard" element={<ManagerDashboard />} />
              <Route path="/team" element={<MyTeamPage />} />
              <Route path="/profile" element={<MyProfilePage />} />
            </>
          )}
        </Routes>
      </main>
    </Router>
  );
}

export default App;
