import React from 'react';

import { TimeControls } from '../Control';

import './TimeConfiguration.scss';


export default function TimeConfiguration() {
  return (
    <div className="TimeConfiguration">
      <h6>Time Configuration</h6>
      <div className="TimeConfiguration--container">
        <TimeControls />
      </div>
    </div>
  )
}

TimeConfiguration.displayName = 'TimeConfiguration';

TimeConfiguration.propTypes = {};
