import React from 'react';

import { TemporalUplift } from 'components/TemporalUplift';
import { Page } from 'components/Page';

import './Home.scss';


export default function Home(props) {

  return (
    <Page className="Home">
      <TemporalUplift />
    </Page>
  );
}
