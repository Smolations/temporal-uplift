import React from 'react';

import { TimeControl } from 'components/Control';
import { Surface } from 'components/Surface';

import './TimeConfiguration.scss';


export default function TimeConfiguration() {
  function handleChange(digitPairs) {
    console.log('[TimeConfiguration handleChange] digitPairs: %o', digitPairs)
  }

  return (
    <Surface className="TimeConfiguration">
      <h6>Time Configuration</h6>
      <div className="TimeConfiguration--container">
        <TimeControl onChange={handleChange} />
      </div>
    </Surface>
  )
}

TimeConfiguration.displayName = 'TimeConfiguration';

TimeConfiguration.propTypes = {};
