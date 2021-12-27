import React from 'react';

import Digit from './Digit';

import './DigitPair.scss';


export default function DigitPair(props) {
  const { value } = props;

  const paddedValue = `${value}`.padStart(2, '0');
  const [
    firstDigit,
    secondDigit,
  ] = paddedValue.split('').slice(0, 2); // maybe use digits instead?


  return (
    <span className="DigitPair">
      <Digit>{firstDigit}</Digit>
      <Digit>{secondDigit}</Digit>
    </span>
  );
}
