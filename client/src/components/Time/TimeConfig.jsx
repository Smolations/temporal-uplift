import React from 'react';

import Time from './Time';
import TimeConfigControls from './TimeControls';


export default function TimeConfig() {
  return (
    <div className="TimeConfig">
      <div className="TimeConfig--controls-top">
      </div>
      <Time temporal={null} />
      <div className="TimeConfig--controls-top">
      </div>
    </div>
  )
}

TimeConfig.displayName = 'TimeConfig';

TimeConfig.propTypes = {};
