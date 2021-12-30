import React from 'react';

import { TimerControl } from 'components/Control';
import { Surface } from 'components/Surface';

import './Timer.scss';


export default function Timer() {
  return (
    <Surface className="Timer">
      <h6>Timer</h6>
      <TimerControl />
    </Surface>
  );
}

Timer.displayName = 'Timer';

Timer.propTypes = {};
