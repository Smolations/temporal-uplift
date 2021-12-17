import React from 'react';

import { Header } from 'components/Header';
import { Page } from 'components/Page';

import './Home.scss';


export default function Home(props) {

  return (
    <Page className="Home">
      <Header as="h2" heading="Home" />

    </Page>
  );
}
