import React from 'react';

import ReactDOM from 'react-dom/client';

import { CharactersProvider } from 'context/CharactersContext';
import { ComicsProvider } from 'context/ComicsContext';

import App from './App';

import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <CharactersProvider>
      <ComicsProvider>
        <App />
      </ComicsProvider>
    </CharactersProvider>
  </React.StrictMode>,
);
