import React from 'react';

import { StopwatchControl } from 'components/Control';

import './Stopwatch.scss';


export default function Stopwatch() {
  return (
    <div className="Stopwatch">
      <h6>Stopwatch</h6>
      <StopwatchControl />
    </div>
  );
}

Stopwatch.displayName = 'Stopwatch';

Stopwatch.propTypes = {};
