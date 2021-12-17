import PropTypes from 'prop-types';
import React from 'react';
import {
  Temporal,
  Intl,
  toTemporalInstant,
} from '@js-temporal/polyfill';

import { Button } from '../Button';
import { Header } from '../Header';

import './ErgoTimer.scss';


// implement the Temporal polyfill (normally near an entry file)
Date.prototype.toTemporalInstant = toTemporalInstant;


export default function ErgoTimer() {
  console.log('Initialization complete', Temporal.Now.instant().toString());

  // every second, get current duration from a set point in time
  // (the chosen time)

  return (
    <div className="ErgoTimer">
      <Header as="h5" heading="Temporal Uplift" />

      <div>
        <h6>Stopwatch</h6>
        <div className="ErgoTimer--stopwatch-container">
          <div className="the-timer-container">
            container
          </div>
          <Button>Start/Stop</Button>
        </div>
      </div>
    </div>
  );
}

ErgoTimer.displayName = 'ErgoTimer';

ErgoTimer.propTypes = {};
