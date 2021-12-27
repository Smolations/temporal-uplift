import React, { useState } from 'react';

import { Digit } from '../Digit';

import DigitControl from './DigitControl';

import './DigitControls.scss';


export default function DigitControls(props) {
  const {
    defaultValue,
    max,
    min,
    onClick,
  } = props;

  const [digit, setDigit] = useState(Number(defaultValue));


  function handleIncrease() {
    setDigit((prevDigit) => prevDigit === 9 ? 0 : prevDigit + 1);
  }

  function handleDecrease() {
    setDigit((prevDigit) => prevDigit === 0 ? 9 : prevDigit - 1);
  }


  return (
    <span className="DigitControls">
      <DigitControl onClick={handleIncrease} />
      <Digit>{digit}</Digit>
      <DigitControl onClick={handleDecrease} />
    </span>
  );
}

DigitControls.displayName = 'DigitControls';

DigitControls.propTypes = {};

DigitControls.defaultProps = {
  defaultValue: 0,
  max: 9,
  min: 0,
};
