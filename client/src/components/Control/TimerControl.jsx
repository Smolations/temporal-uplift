import {
  faPlay,
  faStop,
  faStepBackward,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Temporal } from '@js-temporal/polyfill';
import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';

import { ControlButton } from '../Button';
import { Time } from '../Time';

import './TimerControl.scss';


const startIcon = (<FontAwesomeIcon icon={faPlay} />);
const stopIcon = (<FontAwesomeIcon icon={faStop} />);
const resetIcon = (<FontAwesomeIcon icon={faStepBackward} />);

// @param {string} time  To start, expect hh:mm:ss format
function getTimerDuration(time = '00:00:00') {
  const [
    hours,
    minutes,
    seconds,
  ] = time.split(':');

  return Temporal.Duration.from({
    hours: parseInt(hours, 10),
    minutes: parseInt(minutes, 10),
    seconds: parseInt(seconds, 10),
  });
}


export default function TimerControl() {
  console.groupCollapsed('[TimerControl]');
  // console.log('Initialization complete', Temporal.Now.instant().toString());

  const [timerDuration, setTimerDuration] = useState(getTimerDuration());
  const [timerInterval, setTimerInterval] = useState(null);
  console.log('timerDuration: %o', timerDuration?.toString());


  function isTimerZero() {
    console.log('[isTimerZero] timerDuration(%o).blank: %o', timerDuration.toString(), timerDuration.blank)
    const isAtZero = !Math.max(
      timerDuration.hours,
      timerDuration.minutes,
      timerDuration.seconds,
    );
    return isAtZero;
  }


  function handleResetTimer() {
    const initialTime = prompt('Enter time:', '00:00:00');
    clearInterval(timerInterval);
    setTimerDuration(getTimerDuration(initialTime));
  }

  function handleStartTimer() {
    console.log('handleStartStopTimer');
    if (isTimerZero()) {
      console.log('timer at zero, BAILING');
      return;
    }

    const newInterval = setInterval(() => {
      console.log('[inside interval]');
      setTimerDuration((duration) => (
        duration.subtract(getTimerDuration('00:00:01'))
      ));
    }, 1000);

    setTimerInterval(newInterval);
  }

  function handleStopTimer() {
    console.log('handleStopTimer');
    // stop interval
    clearInterval(timerInterval);
  }


  // cleanup interval when component unmounts
  useEffect(() => {
    return () => clearInterval(timerInterval);
  }, []);

  useEffect(() => {
    console.log('[useEffect timer duration/interval]')
    if (timerDuration?.blank) {
      console.log('[useEffect timer duration/interval] CLEARING INTERVAL')
      clearInterval(timerInterval);
    }
  }, [timerDuration, timerInterval]);


  const roundedTimerDuration = timerDuration?.round({ largestUnit: 'days' });

  console.groupEnd();
  return (
    <div className="TimerControl">
      <Time
        hours={roundedTimerDuration?.hours}
        minutes={roundedTimerDuration?.minutes}
        seconds={roundedTimerDuration?.seconds}
      />
      <ControlButton onClick={handleStartTimer}>
        {startIcon}
      </ControlButton>
      <ControlButton onClick={handleStopTimer}>
        {stopIcon}
      </ControlButton>
      <ControlButton onClick={handleResetTimer}>
        {resetIcon}
      </ControlButton>
    </div>
  );
}

TimerControl.displayName = 'TimerControl';

TimerControl.propTypes = {};
