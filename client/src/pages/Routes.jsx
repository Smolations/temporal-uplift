import React from 'react';
import { useRoutes } from 'react-router-dom';

import { Layout } from 'components/Layout';

import { ErgoTimerPage } from './ergo-timer';
import { Home } from './home';
import { Theming } from './theming';


// configure in such a way that menus can be nested
// as well.
// route metadata: nav, name
export const routes = [
  {
    element: <Layout />,
    children: [
      {
        name: 'Home',
        index: true,
        path: '/',
        element: <Home />,
      },
      {
        name: 'Theming',
        path: '/theming',
        element: <Theming />,
      },
      {
        name: 'ErgoTimer',
        path: '/ergo-timer',
        element: <ErgoTimerPage />,
      },
    ],
  },
];

export default function Routes() {
  const element = useRoutes(routes);
  return element;
}
