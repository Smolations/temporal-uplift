import {
  faPlay,
  faStop,
  faStepBackward,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import { Temporal } from '@js-temporal/polyfill';

import { ControlButton } from '../Button';
import { Time } from '../Time';

import './StopwatchControl.scss';


const startIcon = (<FontAwesomeIcon icon={faPlay} />);
const stopIcon = (<FontAwesomeIcon icon={faStop} />);
const resetIcon = (<FontAwesomeIcon icon={faStepBackward} />);


function getZeroDuration() {
  return Temporal.Duration.from({ seconds: 0 });
}


export default function StopwatchControl() {
  console.groupCollapsed('[StopwatchControl]');
  // console.log('Initialization complete', Temporal.Now.instant().toString());

  const [timerDuration, setTimerDuration] = useState(getZeroDuration());
  const [timerInterval, setTimerInterval] = useState(null);
  // console.log('startInstant: %o', startInstant?.toString());


  function handleResetStopwatch() {
    clearInterval(timerInterval);
    setTimerDuration(getZeroDuration());
  }

  function handleStartStopwatch() {
    console.log('handleStartStopStopwatch');
    // start interval
    setTimerInterval(
      setInterval(() => {
        console.log('interval');
        setTimerDuration((duration) => (
          duration.add(Temporal.Duration.from({ seconds: 1 }))
        ));
      }, 1000),
    );
  }

  function handleStopStopwatch() {
    console.log('handleStopStopwatch');
    // stop interval
    clearInterval(timerInterval);
  }


  const roundedStopwatchDuration = timerDuration?.round({ largestUnit: 'days' });

  console.groupEnd();
  return (
    <div className="StopwatchControl">
      <Time
        hours={roundedStopwatchDuration?.hours}
        minutes={roundedStopwatchDuration?.minutes}
        seconds={roundedStopwatchDuration?.seconds}
      />
      <ControlButton onClick={handleStartStopwatch}>
        {startIcon}
      </ControlButton>
      <ControlButton onClick={handleStopStopwatch}>
        {stopIcon}
      </ControlButton>
      <ControlButton onClick={handleResetStopwatch}>
        {resetIcon}
      </ControlButton>
    </div>
  );
}

StopwatchControl.displayName = 'StopwatchControl';

StopwatchControl.propTypes = {};
