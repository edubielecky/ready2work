import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/header/header';
import MainPage from './pages/mainPage/mainPage';
import LoginPage from './pages/loginPage/loginPage';
import ManagerDashboard from './pages/managerDashboard/ManagerDashboard';
import MyTeamPage from './pages/minhaEquipe/MyTeamPage';
import MyProfilePage from './pages/myProfilePage/MyProfilePage';
import CollaboratorMainPage from './pages/mainPage/CollaboratorMainPage';
import MinhasInscricoesPage from './pages/minhasInscricoes/MinhasInscricoesPage';
import MeuDesempenhoPage from './pages/meuDesempenho/MeuDesempenhoPage';
import CollaboratorProfilePage from './pages/myProfilePage/CollaboratorProfilePage';

// Logins fictícios para simulação
const fakeUsers = {
  'colaborador': { password: '123', role: 'collaborator', id: 1 },
  'gestor': { password: '123', role: 'manager' },
  'diretor': { password: '123', role: 'director' },
};

function App() {
  const [userRole, setUserRole] = useState(null); // Começa como null (não logado)

  // Simulação de ID do usuário logado. No futuro, isso virá do estado de autenticação.
  const loggedInUserId = 1;

  const handleLogin = (username, password) => {
    const user = fakeUsers[username];
    if (user && user.password === password) {
      setUserRole(user.role); // <-- AQUI ESTAVA FALTANDO ATUALIZAR O ESTADO
      return true;
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
              <Route 
                path="/" 
                element={userRole === 'collaborator' ? <CollaboratorMainPage /> : <MainPage />} 
              />
              <Route path="/dashboard" element={<ManagerDashboard />} />
              <Route path="/team" element={<MyTeamPage />} />
              <Route 
                path="/profile" 
                element={userRole === 'collaborator' ? <CollaboratorProfilePage /> : <MyProfilePage />} 
              />
              <Route path="/applications" element={<MinhasInscricoesPage userId={loggedInUserId} />} />
              <Route path="/performance" element={<MeuDesempenhoPage />} />
            </>
          )}
        </Routes>
      </main>
    </Router>
  );
}

export default App;
