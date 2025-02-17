import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';  // Ensure you're importing Router

import App from './App.jsx';
import Header from './component/header.jsx';
import './main.css';
import Login from './auth/login.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>  {/* Wrap everything inside Router */}
      <Header />
      <Routes>  {/* Define the routes here */}
        <Route path="/home" element={<App />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  </StrictMode>
);
