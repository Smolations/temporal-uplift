import PropTypes from 'prop-types';
import React, { useState } from 'react';

import DigitControl from './DigitControl';

import './DigitPairControls.scss';


// yet another component that will be passing around
// number couples to represent digits
export default function DigitPairControls(props) {
  console.groupCollapsed('[DigitPairControls]');
  const {
    children,
    defaultDigits,
    max,
    onChange,
  } = props;

  const [digits, setDigits] = useState(defaultDigits);
  console.log('digits: %o', digits)

  // time for a utility method yet?
  const [maxLeadingDigit, maxTrailingDigit] = `${max}`.padStart(2, '0').split('').map(Number);
  console.log('maxLeading(%o)/maxTrailing(%o)', maxLeadingDigit, maxTrailingDigit)


  function handleLeadingDigitChange(digit) {
    console.log('[DigitPairControls handleLeadingDigitChange] digit: %o', digit);
    setDigits((prevDigits) => {
      const newDigits = [...prevDigits];
      newDigits[0] = Number(digit);

      if (parseInt(newDigits.join(''), 10) > max) {
        console.log('[DigitPairControls handleLeadingDigitChange] max hit')
        return prevDigits;
      }

      onChange?.(newDigits);
      return newDigits;
    });
  }

  function handleTrailingDigitChange(digit) {
    console.log('[DigitPairControls handleTrailingDigitChange] digit: %o', digit);
    setDigits((prevDigits) => {
      const newDigits = [...prevDigits];
      newDigits[1] = digit;

      onChange?.(newDigits);
      return newDigits;
    });
  }


  console.groupEnd();
  return (
    <span className="DigitPairControls">
      <DigitControl
        max={maxLeadingDigit}
        defaultDigit={0}
        onChange={handleLeadingDigitChange}
      >
        {digits[0]}
      </DigitControl>
      <DigitControl
        max={digits[0] === maxLeadingDigit ? maxTrailingDigit : 9}
        defaultDigit={0}
        onChange={handleTrailingDigitChange}
      >
        {digits[1]}
      </DigitControl>
    </span>
  );
}

DigitPairControls.displayName = 'DigitPairControls';

DigitPairControls.propTypes = {
  /**
   * To control this component, pass values as children. It should
   * be a 2-element array of single-digit numbers.
   */
  children: PropTypes.arrayOf(PropTypes.number),
};

DigitPairControls.defaultProps = {
  defaultDigits: [0, 0],
  max: 99,
};
