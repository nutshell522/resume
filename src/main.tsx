import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './assets/styles/base.scss';
import App from './App.tsx';
import { BrowserRouter } from 'react-router-dom';
import './i18n';
import { DarkModeProvider } from './context/DarkModeProvider.tsx';
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <I18nextProvider i18n={i18n}>
      <BrowserRouter>
        <DarkModeProvider>
          <App />
        </DarkModeProvider>
      </BrowserRouter>
    </I18nextProvider>
  </StrictMode>
);
