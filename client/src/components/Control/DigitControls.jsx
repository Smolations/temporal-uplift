import React, { useState } from 'react';

import { Digit } from '../Digit';

import DigitControl from './DigitControl';

import './DigitControls.scss';


export default function DigitControls(props) {
  const {
    defaultValue,
    max,
    min,
    onChange,
  } = props;

  const [digit, setDigit] = useState(Number(defaultValue));


  function handleIncrease() {
    setDigit((prevDigit) => {
      const newDigit = (prevDigit === max) ? min : prevDigit + 1;
      onChange?.(newDigit);
      return newDigit;
    });
  }

  function handleDecrease() {
    setDigit((prevDigit) => {
      const newDigit = (prevDigit === min) ? max : prevDigit - 1;
      onChange?.(newDigit);
      return newDigit;
    });
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
