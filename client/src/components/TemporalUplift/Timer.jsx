import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import { Temporal } from '@js-temporal/polyfill';

import { Button } from '../Button';
import { TimerControls } from '../Control';

import { Time } from '../Time';

import './Timer.scss';


export default function Timer() {
  return (
    <div className="Timer">
      <h6>Timer</h6>
      <TimerControls />
    </div>
  );
}

Timer.displayName = 'Timer';

Timer.propTypes = {};
