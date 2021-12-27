import React, { useState } from 'react';

import DigitControls from './DigitControls';

import './DigitPairControls.scss';


export default function DigitPairControls(props) {
  const { onChange } = props;

  const [digits, setDigits] = useState('00'); // sensible default?
  console.log('[DigitPairControls] digits: %o', digits)

  function handleLeadingDigitChange(digit) {
    console.log('[DigitPairControls handleLeadingDigitChange] digit: %o', digit);
    setDigits((digits) => {
      const [leadingDigit, trailingDigit] = digits.split('');
      const newDigits = `${digit}${trailingDigit}`;

      onChange?.([digit, Number(trailingDigit)]);
      return newDigits;
    });
  }

  function handleTrailingDigitChange(digit) {
    console.log('[DigitPairControls handleTrailingDigitChange] digit: %o', digit);
    setDigits((digits) => {
      const [leadingDigit, trailingDigit] = digits.split('');
      const newDigits = `${leadingDigit}${digit}`;

      onChange?.([Number(leadingDigit), digit]);
      return newDigits;
    });
  }


  return (
    <span className="DigitPairControls">
      <DigitControls onChange={handleLeadingDigitChange} />
      <DigitControls onChange={handleTrailingDigitChange} />
    </span>
  );
}
