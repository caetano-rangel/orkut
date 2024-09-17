import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App.jsx';
import Home from './Home.jsx'; // Importar a página Home
import './styles/main.sass';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <Routes>
        {/* Rota para a página de login */}
        <Route path="/" element={<App />} />
        {/* Rota para a página Home */}
        <Route path="/home" element={<Home />} />
      </Routes>
    </Router>
  </StrictMode>
);
