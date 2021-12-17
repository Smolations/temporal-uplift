import React from 'react';

import { ErgoTimer } from 'components/ErgoTimer';
import { Header } from 'components/Header';
import { Page } from 'components/Page';

import './Home.scss';


export default function Home(props) {

  return (
    <Page className="Home">
      <ErgoTimer />
    </Page>
  );
}
