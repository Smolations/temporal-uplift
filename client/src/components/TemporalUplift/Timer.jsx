import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import { Temporal } from '@js-temporal/polyfill';

import { Button } from '../Button';
import { Header } from '../Header';

import './Timer.scss';


function getZeroDuration() {
  return Temporal.Duration.from({ seconds: 0 });
}


export default function Timer() {
  console.groupCollapsed('[Timer]');
  // console.log('Initialization complete', Temporal.Now.instant().toString());

  const [timerDuration, setTimerDuration] = useState(getZeroDuration());
  const [timerInterval, setTimerInterval] = useState(null);
  // console.log('startInstant: %o', startInstant?.toString());


  function handleResetTimer() {
    clearInterval(timerInterval);
    setTimerDuration(getZeroDuration());
  }

  function handleStartTimer() {
    console.log('handleStartStopTimer');
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

  function handleStopTimer() {
    console.log('handleStopTimer');
    // stop interval
    clearInterval(timerInterval);
  }


  const roundedTimerDuration = timerDuration?.round({ largestUnit: 'days' });

  const minutes = roundedTimerDuration ? `${roundedTimerDuration.minutes}`.padStart(2, '0') : '00';
  const [leadingHour, trailingHour] = minutes.split('');
  console.log('minutes: %o', roundedTimerDuration?.minutes);

  const seconds = roundedTimerDuration ? `${roundedTimerDuration.seconds}`.padStart(2, '0') : '00';
  const [leadingMinute, trailingMinute] = seconds.split('');
  console.log('seconds: %o', roundedTimerDuration?.seconds);

  console.groupEnd();
  return (
    <div className="Timer">
      <h6>Timer</h6>
      <div className="Timer--timer-container">
        <div className="Timer--the-timer-container">
          <Digit>{leadingHour}</Digit>
          <Digit>{trailingHour}</Digit>
          <Digit.Sep />
          <Digit>{leadingMinute}</Digit>
          <Digit>{trailingMinute}</Digit>
        </div>
        <Button onClick={handleStartTimer}>Start</Button>
        <Button onClick={handleStopTimer}>Stop</Button>
        <Button onClick={handleResetTimer}>Reset</Button>
      </div>
    </div>
  );
}

Timer.displayName = 'Timer';

Timer.propTypes = {};
