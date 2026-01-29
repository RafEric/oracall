import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';       // ✅ votre CSS Tailwind + custom
import 'aos/dist/aos.css';  // ✅ CSS de AOS directement ici, pas via Tailwind
import App from './App';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
