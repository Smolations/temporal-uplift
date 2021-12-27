import classNames from 'classnames';
import React, { useState } from 'react';
import { Temporal } from '@js-temporal/polyfill';

import { Digit } from '../Digit';
import { Time } from '../Time';

import DigitPairControl from './DigitPairControl';
import DigitPairControls from './DigitPairControls';

import './TimeControls.scss';


export default function TimeControls(props) {
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
  const [timeArray, setTimeArray] = useState([0, 0, 0]); // check incoming time?
  console.log('[TimeControls] timeArray: %o', timeArray)

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

  return (
    <div className={classes}>
      {timeArray.map((timeDigits, ndx) => {
        const timeArrayNdx = (timeArray.length - 1) - ndx;
        return (
          <React.Fragment key={`.${ndx}`}>
            {ndx > 0 && (<Digit.Sep />)}
            <DigitPairControls
              onChange={(digits) => handleChange(digits, timeArrayNdx)}
            />
          </React.Fragment>
        );
      })}
    </div>
  );
}

TimeControls.displayName = 'TimeControls';

TimeControls.propTypes = {};
