import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "../src/i18next";
import { I18nextProvider } from 'react-i18next';
import './index.css'
import App from './App.jsx'
import i18next from 'i18next';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <I18nextProvider i18n={i18next}>
      <App />
    </I18nextProvider>
  </StrictMode>,
)
