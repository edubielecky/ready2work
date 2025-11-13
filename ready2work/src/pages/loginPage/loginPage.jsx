import React, { useState, useEffect, useRef } from 'react';
import './LoginPage.css';

const LoginPage = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const containerRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (containerRef.current) {
        const { clientX, clientY } = e;
        containerRef.current.style.setProperty('--mouse-x', `${clientX}px`);
        containerRef.current.style.setProperty('--mouse-y', `${clientY}px`);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    // A função onLogin (que virá do App.jsx) retornará true em caso de sucesso
    const success = onLogin(username, password);
    if (!success) {
      setError('Credenciais inválidas. Tente novamente.');
      setPassword(''); // Limpa o campo de senha
    }
  };

  // Usando 'text-white' e 'bg-dark' para se adequar ao tema escuro do index.css
  return (
    <div className="login-container" ref={containerRef}>
      <div className="login-card">
          <h2 className="card-title text-center mb-4">Login - Ready2Work</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="username" className="form-label">Usuário</label>
              <input type="text" className="form-control" id="username" value={username} onChange={(e) => setUsername(e.target.value)} required />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">Senha</label>
              <input type="password" className="form-control" id="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
            </div>
            {error && <div className="alert alert-danger">{error}</div>}
            <button type="submit" className="btn btn-primary w-100">Entrar</button>
          </form>
          <div className="mt-4 text-center text-muted">
            <p className="mb-1">Use um dos logins fictícios:</p>
            <small>
              <strong>Colaborador:</strong> user: colaborador, pass: 123<br />
              <strong>Gestor:</strong> user: gestor, pass: 123<br />
              <strong>Diretor:</strong> user: diretor, pass: 123
            </small>
          </div>
      </div>
    </div>
  );
};

export default LoginPage;