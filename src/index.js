// src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; // Importez vos styles globaux ici
import App from './App'; // Importez le composant principal App

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);