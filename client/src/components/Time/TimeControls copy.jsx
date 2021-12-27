import React from 'react';

import TimeControl from './TimeControl';


export default function TimeControls(props) {
  return (
    <div className="TimeControls">
      <TimeControl />
      <TimeControl />
      <TimeControl />
    </div>
  );
}

TimeControls.displayName = 'TimeControls';

TimeControls.propTypes = {};
