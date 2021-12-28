import React from 'react';

import { TimeControl } from '../Control';

import './TimeConfiguration.scss';


export default function TimeConfiguration() {
  function handleChange(digitPairs) {
    console.log('[TimeConfiguration handleChange] digitPairs: %o', digitPairs)
  }

  return (
    <div className="TimeConfiguration">
      <h6>Time Configuration</h6>
      <div className="TimeConfiguration--container">
        <TimeControl onChange={handleChange} />
      </div>
    </div>
  )
}

TimeConfiguration.displayName = 'TimeConfiguration';

TimeConfiguration.propTypes = {};
