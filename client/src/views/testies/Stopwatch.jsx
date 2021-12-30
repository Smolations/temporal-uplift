import React from 'react';

import { StopwatchControl } from 'components/Control';
import { Surface } from 'components/Surface';

import './Stopwatch.scss';


export default function Stopwatch() {
  return (
    <Surface className="Stopwatch">
      <h6>Stopwatch</h6>
      <StopwatchControl />
    </Surface>
  );
}

Stopwatch.displayName = 'Stopwatch';

Stopwatch.propTypes = {};
