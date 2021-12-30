import React from 'react';
import { useRoutes } from 'react-router-dom';

import { Layout } from 'components/Layout';

import { Home } from './home';
import { Testies } from './testies';


// configure in such a way that menus can be nested
// as well.
// route metadata: nav, name
export const routes = [
  {
    path: '/main',
    // index: true,
    element: <Layout />,
    children: [
      {
        name: 'Home',
        index: true,
        // path: '/main',
        element: <Home />,
      },
      {
        nav: false,
        name: 'Testies',
        path: 'testies',
        element: <Testies />,
      },
    ],
  },
];

export default function Routes() {
  const element = useRoutes(routes);
  return element;
}
