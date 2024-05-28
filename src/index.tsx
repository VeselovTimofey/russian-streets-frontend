import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import App from './App.tsx';
import './index.css';
import { setupStore } from './service/store.ts';

const store = setupStore();
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    {' '}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
