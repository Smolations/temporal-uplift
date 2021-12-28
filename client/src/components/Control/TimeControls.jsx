import classNames from 'classnames';
import React, { useState } from 'react';
import { Temporal } from '@js-temporal/polyfill';

import { Digit } from '../Digit';
import { Time } from '../Time';

import DigitPairControls from './DigitPairControls';

import './TimeControls.scss';


function digitPairFrom(digit) {
  return `${digit}`.padStart(2, '0').split('').slice(0, 2).map(Number);
}

export default function TimeControls(props) {
  console.groupCollapsed('[TimeControls]');
  const {
    onChange,
    reverse,
    single,
  } = props;

  const [duration, setDuration] = useState(Temporal.Duration.from({ seconds: 0 }));

  // timeArray is an array of actual Numbers representing
  // each digit pair. to support the possible addition of
  // days, weeks, etc. numbers, the units get larger deeper
  // into the array. i.e.:
  //  [seconds, minutes, hours]
  const [timeArray, setTimeArray] = useState([3, 2, 1]); // check incoming time?
  console.log('timeArray: %o', timeArray)

  const classes = classNames('TimeControls', {
    'TimeControls--single': single,
    'TimeControls--reverse': reverse,
  });


  function handleChange(digits, ndx) {
    console.groupCollapsed('[TimeControls handleChange]');
    console.log('digits: %o', digits);
    console.log('ndx: %o', ndx);

    setTimeArray((prevTimeArray) => {
      const newTimeArray = [...prevTimeArray];
      newTimeArray[ndx] = Number(digits.join(''));

      onChange?.(newTimeArray);
      return newTimeArray;
    });

    console.groupEnd();
  }

  console.groupEnd();
  return (
    <div className={classes}>
      {timeArray.map((timeDigits, ndx) => {
        const CAP = 59;
        const isNotSeconds = (ndx > 0);
        const isCapped = (ndx < 2); // seconds/minutes
        const max = isCapped ? CAP : undefined;

        return (
          <React.Fragment key={`.${ndx}`}>
            {isNotSeconds && (<Digit.Sep />)}
            <DigitPairControls
              defaultDigits={digitPairFrom(timeDigits)}
              onChange={(digits) => handleChange(digits, ndx)}
              max={max}
            />
          </React.Fragment>
        );
      })}
    </div>
  );
}

TimeControls.displayName = 'TimeControls';

TimeControls.propTypes = {};
