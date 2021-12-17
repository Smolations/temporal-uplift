import PropTypes from 'prop-types';
import React from 'react';
import {
  Temporal,
  Intl,
  toTemporalInstant,
} from '@js-temporal/polyfill';

import { Header } from '../Header';

import './ErgoTimer.scss';


// implement the Temporal polyfill (normally near an entry file)
Date.prototype.toTemporalInstant = toTemporalInstant;


export default function ErgoTimer() {
  console.log('Initialization complete', Temporal.Now.instant().toString());

  return (
    <div className="ErgoTimer">
      <Header as="h5" heading="Temporal Uplift" />

    </div>
  );
}

ErgoTimer.displayName = 'ErgoTimer';

ErgoTimer.propTypes = {};
