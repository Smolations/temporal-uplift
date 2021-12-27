import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';

import { Header } from '../Header';
import { TimeControl } from '../Control';

import Stopwatch from './Stopwatch';
import TimeConfiguration from './TimeConfiguration';
import Timer from './Timer';

import './TemporalUplift.scss';


export default function TemporalUplift() {
  console.groupCollapsed('[TemporalUplift]');


  console.groupEnd();
  return (
    <div className="TemporalUplift">
      <Header as="h5" heading="Temporal Uplift" />

      <Stopwatch />
      <Timer />
      <TimeConfiguration />
    </div>
  );
}

TemporalUplift.displayName = 'TemporalUplift';

TemporalUplift.propTypes = {};
