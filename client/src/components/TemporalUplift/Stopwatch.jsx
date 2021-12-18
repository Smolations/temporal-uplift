import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import { Temporal } from '@js-temporal/polyfill';

import { Button } from '../Button';
import { Header } from '../Header';

import { Digit } from '../Digit';

import './Stopwatch.scss';


function getZeroDuration() {
  return Temporal.Duration.from({ seconds: 0 });
}


export default function Stopwatch() {
  console.groupCollapsed('[Stopwatch]');
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

  const minutes = roundedStopwatchDuration ? `${roundedStopwatchDuration.minutes}`.padStart(2, '0') : '00';
  const [leadingHour, trailingHour] = minutes.split('');
  console.log('minutes: %o', roundedStopwatchDuration?.minutes);

  const seconds = roundedStopwatchDuration ? `${roundedStopwatchDuration.seconds}`.padStart(2, '0') : '00';
  const [leadingMinute, trailingMinute] = seconds.split('');
  console.log('seconds: %o', roundedStopwatchDuration?.seconds);

  console.groupEnd();
  return (
    <div className="Stopwatch">
      <h6>Stopwatch</h6>
      <div className="Stopwatch--stopwatch-container">
        <div className="Stopwatch--the-timer-container">
          <Digit>{leadingHour}</Digit>
          <Digit>{trailingHour}</Digit>
          <Digit.Sep />
          <Digit>{leadingMinute}</Digit>
          <Digit>{trailingMinute}</Digit>
        </div>
        <Button onClick={handleStartStopwatch}>Start</Button>
        <Button onClick={handleStopStopwatch}>Stop</Button>
        <Button onClick={handleResetStopwatch}>Reset</Button>
      </div>
    </div>
  );
}

Stopwatch.displayName = 'Stopwatch';

Stopwatch.propTypes = {};
