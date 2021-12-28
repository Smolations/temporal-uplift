import React from 'react';
import { useRoutes } from 'react-router-dom';

import { Layout } from 'components/Layout';

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
        path: '/main',
        element: <Home />,
      },
      {
        nav: false,
        name: 'Theming',
        path: '/theming',
        element: <Theming />,
      },
    ],
  },
];

export default function Routes() {
  const element = useRoutes(routes);
  return element;
}
