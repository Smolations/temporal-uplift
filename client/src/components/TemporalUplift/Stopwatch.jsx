import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import { Temporal } from '@js-temporal/polyfill';

import { Button } from '../Button';
import { StopwatchControls } from '../Control';

import { Time } from '../Time';

import './Stopwatch.scss';


export default function Stopwatch() {
  return (
    <div className="Stopwatch">
      <h6>Stopwatch</h6>
      <StopwatchControls />
    </div>
  );
}

Stopwatch.displayName = 'Stopwatch';

Stopwatch.propTypes = {};
