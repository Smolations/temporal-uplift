import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { toTemporalInstant } from '@js-temporal/polyfill';

import { Theme } from 'components/Theme';
import { Routes } from 'views';
import { GlobalStateProvider } from 'state/global';

import './App.scss';

// implement the Temporal polyfill (normally near an entry file)
Date.prototype.toTemporalInstant = toTemporalInstant;


export default function App() {
  return (
    <GlobalStateProvider>
      <div className="App">
        <Theme>
          <MemoryRouter initialEntries={['/main']}>
            <Routes />
          </MemoryRouter>
        </Theme>
      </div>
    </GlobalStateProvider>
  );
}
