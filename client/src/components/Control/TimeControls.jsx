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
    reverse,
    single,
  } = props;

  const [duration, setDuration] = useState(Temporal.Duration.from({ seconds: 0 }));
  const classes = classNames('TimeControls', {
    'TimeControls--single': single,
    'TimeControls--reverse': reverse,
  });


  function handleChange() {

  }

  return (
    <div className={classes}>
      <DigitPairControls onChange={handleChange} />
      <Digit.Sep />
      <DigitPairControls onChange={handleChange} />
      <Digit.Sep />
      <DigitPairControls onChange={handleChange} />
    </div>
  );
}

TimeControls.displayName = 'TimeControls';

TimeControls.propTypes = {};
