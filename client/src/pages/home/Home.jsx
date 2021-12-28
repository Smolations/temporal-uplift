import React from 'react';

import { Page } from 'components/Page';

import Stopwatch from './Stopwatch';
import TimeConfiguration from './TimeConfiguration';
import Timer from './Timer';

import './Home.scss';


export default function Home(props) {

  return (
    <Page className="Home">
      <Stopwatch />
      <Timer />
      <TimeConfiguration />
    </Page>
  );
}
