import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import {
  Temporal,
  Intl,
  toTemporalInstant,
} from '@js-temporal/polyfill';

import { Button } from '../Button';
import { Header } from '../Header';

import Digit from './Digit';
import DigitSep from './DigitSep';


import './ErgoTimer.scss';

// attach subcomponent; todo: move digit components into suite folder
Digit.Sep = DigitSep;

// implement the Temporal polyfill (normally near an entry file)
Date.prototype.toTemporalInstant = toTemporalInstant;


export default function ErgoTimer() {
  // console.log('Initialization complete', Temporal.Now.instant().toString());

  const [isStopwatchStarted, setIsStopwatchStarted] = useState(false);
  const [startInstant, setStartInstant] = useState(null);
  const [stopwatchDuration, setStopwatchDuration] = useState(null);
  console.log('stopwatchDuration: %o', stopwatchDuration)


  function handleStartStopwatch() {
    console.log('handleStartStopwatch');
    setIsStopwatchStarted(!isStopwatchStarted);
    setStartInstant(null);
  }


  // every second, get current duration from a set point in time
  // (the chosen time)
  useEffect(() => {
    let stopwatchInterval;

    if (isStopwatchStarted) {
      if (!startInstant) {
        // set start instant
        const nowInEpoch = Temporal.Now.instant();
        const newStartInstant = Temporal.Instant.from(nowInEpoch);
        console.log('newStartInstant: ', newStartInstant);
        setStartInstant(newStartInstant);

        // get timer running
        // set stopwatch time from new start instant
        const duration = newStartInstant.since(newStartInstant);
        console.log('duration: ', duration)
        console.log('duration.toString(): ', duration.toString())
        console.log('duration.hours: ', duration.hours)
        setStopwatchDuration(duration);

        stopwatchInterval = setInterval(() => {
          const newNowInEpoch = Temporal.Now.instant();
          const stopwatchElapsedDuration = newNowInEpoch.since(newStartInstant);
          console.log('[interval] newNowInEpoch: %o', newNowInEpoch);
          console.log('[interval] stopwatchElapsedDuration: %o', stopwatchElapsedDuration);
          setStopwatchDuration(stopwatchElapsedDuration);
        }, 1000);
      }
    } else {
      // just got turned off
      // stop timer (preserve time?)
      // set startInstant to null
    }

    return () => {
      // cleanup
      console.log('effect cleanup');
      if (!isStopwatchStarted) {
        clearInterval(stopwatchInterval);
      }
    };
  }, [isStopwatchStarted, startInstant])

  console.log('stopwatchDuration.round.seconds: %o', )

  const roundedStopwatchDuration = stopwatchDuration?.round({ largestUnit: 'days' });

  const minutes = roundedStopwatchDuration ? `${roundedStopwatchDuration.minutes}`.padStart(2, '0') : '99';
  const [leadingHour, trailingHour] = minutes.split('');
  console.log('minutes: %o', roundedStopwatchDuration?.minutes)

  const seconds = roundedStopwatchDuration ? `${roundedStopwatchDuration.seconds}`.padStart(2, '0') : '99';
  const [leadingMinute, trailingMinute] = seconds.split('');
  console.log('seconds: %o', stopwatchDuration?.seconds)

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
          <Button onClick={handleStartStopwatch}>Start/Stop</Button>
        </div>
      </div>
    </div>
  );
}

ErgoTimer.displayName = 'ErgoTimer';

ErgoTimer.propTypes = {};
