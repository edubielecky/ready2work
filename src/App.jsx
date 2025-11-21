import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate, Outlet } from 'react-router-dom';

// Componentes
import Header from './components/header/header';
import LoginPage from './pages/loginPage/loginPage';
import LandingPage from './pages/landingPage/LandingPage'; 

// Páginas do sistema (Logado)
import MainPage from './pages/mainPage/mainPage';
import CollaboratorMainPage from './pages/mainPage/CollaboratorMainPage';
import ManagerDashboard from './pages/managerDashboard/ManagerDashboard';
import MyTeamPage from './pages/minhaEquipe/MyTeamPage';
import MyProfilePage from './pages/myProfilePage/MyProfilePage';
import MinhasInscricoesPage from './pages/minhasInscricoes/MinhasInscricoesPage';
import MeuDesempenhoPage from './pages/meuDesempenho/MeuDesempenhoPage';
import CollaboratorProfilePage from './pages/myProfilePage/CollaboratorProfilePage';

// Logins fictícios (mantidos)
const fakeUsers = {
  'colaborador': { password: '123', role: 'collaborator', id: 1 },
  'gestor': { password: '123', role: 'manager' },
  'diretor': { password: '123', role: 'director' },
};

// Componente de Layout simples que inclui o Header e o Outlet (conteúdo da rota)
const LayoutWithHeader = ({ userRole }) => {
  return (
    <>
      <Header userRole={userRole} />
      {/* Outlet renderiza a rota filha correspondente */}
      <Outlet />
    </>
  );
};

function App() {
  const [userRole, setUserRole] = useState(null); 
  const loggedInUserId = 1;

  const handleLogin = (username, password) => {
    const user = fakeUsers[username];
    if (user && user.password === password) {
      setUserRole(user.role);
      return true;
    }
    return false;
  };

  const getHomeRoute = () => {
    if (userRole === 'collaborator') return '/home';
    if (userRole === 'manager') return '/dashboard';
    if (userRole === 'director') return '/dashboard';
    return '/';
  };

  return (
    <Router>
      <Routes>
        {/* Rotas que PRECISAM do Header dentro do "LayoutWithHeader".
               Isso inclui a Landing Page (userRole é null, mas o Header lida com isso)
               e as rotas protegidas.
        */}
        <Route element={<LayoutWithHeader userRole={userRole} />}>
          
          {/* Rota Pública (Landing) */}
          <Route path="/" element={<LandingPage />} />

          {/* Rotas Protegidas (Só acessíveis se logado) */}
          {userRole && (
            <>
              <Route path="/home" element={<CollaboratorMainPage />} />
              <Route path="/dashboard" element={userRole === 'manager' ? <MainPage /> : <Navigate to="/home" />} />
              <Route path="/team" element={<MyTeamPage />} />
              <Route 
                path="/profile" 
                element={userRole === 'collaborator' ? <CollaboratorProfilePage /> : <MyProfilePage />} 
              />
              <Route path="/applications" element={<MinhasInscricoesPage userId={loggedInUserId} />} />
              <Route path="/performance" element={<MeuDesempenhoPage />} />
            </>
          )}
        </Route>

        {/*   A rota de Login fica FORA do grupo do Layout.
               Assim, ela renderiza "crua", sem o Header.
        */}
        <Route 
          path="/login" 
          element={
            !userRole ? (
              <LoginPage onLogin={handleLogin} />
            ) : (
              <Navigate to={getHomeRoute()} replace />
            )
          } 
        />

        {/* Rota de fallback */}
        <Route path="*" element={<Navigate to={userRole ? getHomeRoute() : "/"} />} />

      </Routes>
    </Router>
  );
}

export default App;