import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './asset/css/mainMotion.css'
import './asset/css/navMotion.css'
import './asset/css/transitionGroupMotion.css'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
