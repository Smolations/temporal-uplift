import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import {
  Temporal,
  Intl,
  toTemporalInstant,
} from '@js-temporal/polyfill';
window.Temporal = Temporal;

import { Button } from '../Button';
import { Header } from '../Header';

import Digit from './Digit';
import DigitSep from './DigitSep';


import './ErgoTimer.scss';

// attach subcomponent; todo: move digit components into suite folder
Digit.Sep = DigitSep;

// implement the Temporal polyfill (normally near an entry file)
Date.prototype.toTemporalInstant = toTemporalInstant;


function getZeroDuration() {
  return Temporal.Duration.from({ minutes: 0 });
}


export default function ErgoTimer() {
  console.groupCollapsed('[ErgoTimer]');
  // console.log('Initialization complete', Temporal.Now.instant().toString());

  const [isStopwatchStarted, setIsStopwatchStarted] = useState(false);
  const [startInstant, setStartInstant] = useState(null);
  const [currentStopwatchDuration, setCurrentStopwatchDuration] = useState(getZeroDuration());
  const [elapsedStopwatchDuration, setElapsedStopwatchDuration] = useState(getZeroDuration());
  const [stopwatchInterval, setStopwatchInterval] = useState(null);
  console.log('currentStopwatchDuration: %o', currentStopwatchDuration);
  console.log('elapsedStopwatchDuration: %o', elapsedStopwatchDuration);
  console.log('startInstant: %o', startInstant?.toString());



  function resetTimer() {
    console.log('[resetTimer]');
    setStartInstant(null);
    setElapsedStopwatchDuration(getZeroDuration());
    setCurrentStopwatchDuration(getZeroDuration());
    stopTimer();
  }

  function stopTimer() {
    setStopwatchInterval(clearInterval(stopwatchInterval));
    setCurrentStopwatchDuration(elapsedStopwatchDuration);
  }


  function handleResetStopwatch() {
    resetTimer();
  }

  function handleStartStopStopwatch() {
    console.log('handleStartStopStopwatch');

    if (isStopwatchStarted) {
      // intent is to STOP the stopwatch
      console.log('clearing interval');
      stopTimer();
    } else {
      // intent is to START the stopwatch

      // set start instant
      const nowInstant = Temporal.Now.instant();
      console.log('nowInstant: %o', nowInstant);

      let currentStartInstant;
      let duration;


      if (startInstant) {
        // restarting timer
        console.log('restarting timer');
        currentStartInstant = startInstant;
        duration = currentStopwatchDuration;
      } else {
        // starting timer from zero
        console.log('starting timer from zero');
        currentStartInstant = nowInstant;
        duration = getZeroDuration();
      }

      console.log('setting startInstant: ', currentStartInstant);
      setStartInstant(currentStartInstant);

      // get timer running
      // set stopwatch time from new start instant
      // need start + duration for starting back up?
      console.log('duration: ', duration);
      console.log('duration.toString(): ', duration.toString());
      console.log('duration.hours: ', duration.hours);
      setCurrentStopwatchDuration(duration);

      setStopwatchInterval(
        setInterval(() => {
          console.groupCollapsed('[interval]');
          const newNowInstant = Temporal.Now.instant();
          const stopwatchElapsedDuration = elapsedStopwatchDuration.add(currentStopwatchDuration);
          console.log('newNowInstant: %o', newNowInstant);
          console.log('stopwatchElapsedDuration: %o', stopwatchElapsedDuration);
          setCurrentStopwatchDuration(stopwatchElapsedDuration);
          console.groupEnd();
        }, 1000),
      );
    }

    setIsStopwatchStarted(!isStopwatchStarted);
  }


  console.log('stopwatchDuration.round.seconds: %o',);

  const roundedStopwatchDuration = elapsedStopwatchDuration?.add(currentStopwatchDuration)?.round({ largestUnit: 'days' });

  const minutes = roundedStopwatchDuration ? `${roundedStopwatchDuration.minutes}`.padStart(2, '0') : '00';
  const [leadingHour, trailingHour] = minutes.split('');
  console.log('minutes: %o', roundedStopwatchDuration?.minutes);

  const seconds = roundedStopwatchDuration ? `${roundedStopwatchDuration.seconds}`.padStart(2, '0') : '00';
  const [leadingMinute, trailingMinute] = seconds.split('');
  console.log('seconds: %o', roundedStopwatchDuration?.seconds);

  console.groupEnd();
  return (
    <div className="ErgoTimer">
      <Header as="h5" heading="Temporal Uplift" />

      <div>
        <h6>Stopwatch</h6>
        <div className="ErgoTimer--stopwatch-container">
          <div className="ErgoTimer--the-timer-container">
            <Digit>{leadingHour}</Digit>
            <Digit>{trailingHour}</Digit>
            <Digit.Sep />
            <Digit>{leadingMinute}</Digit>
            <Digit>{trailingMinute}</Digit>
          </div>
          <Button onClick={handleStartStopStopwatch}>Start/Stop</Button>
          <Button onClick={handleResetStopwatch}>Reset</Button>
        </div>
      </div>
    </div>
  );
}

ErgoTimer.displayName = 'ErgoTimer';

ErgoTimer.propTypes = {};
