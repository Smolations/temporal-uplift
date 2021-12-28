import React from 'react';

import { TimerControl } from '../Control';

import './Timer.scss';


export default function Timer() {
  return (
    <div className="Timer">
      <h6>Timer</h6>
      <TimerControl />
    </div>
  );
}

Timer.displayName = 'Timer';

Timer.propTypes = {};
