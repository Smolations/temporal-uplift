import PropTypes from 'prop-types';
import React, { useState } from 'react';

import { ControlButton } from '../Button';
import { Digit } from '../Digit';

import './DigitControl.scss';


export default function DigitControl(props) {
  const {
    children,
    defaultValue,
    max,
    min,
    onChange,
  } = props;

  const isControlled = (children !== undefined);

  // only if not controlled..
  const [digit, setDigit] = useState(Number(children || defaultValue));



  function handleIncrease() {
    const nextDigitFrom = (cur) => (cur === max ? min : cur + 1);

    if (isControlled) {
      const newDigit = nextDigitFrom(children);
      onChange?.(newDigit);
    } else {
      setDigit((prevDigit) => {
        const newDigit = nextDigitFrom(prevDigit);
        onChange?.(newDigit);
        return newDigit;
      });
    }
  }

  function handleDecrease() {
    const nextDigitFrom = (cur) => (cur === min ? max : cur - 1);

    if (isControlled) {
      const newDigit = nextDigitFrom(children);
      onChange?.(newDigit);
    } else {
      setDigit((prevDigit) => {
        const newDigit = nextDigitFrom(prevDigit);
        onChange?.(newDigit);
        return newDigit;
      });
    }
  }


  return (
    <span className="DigitControl">
      <ControlButton onClick={handleIncrease} />
      <Digit>{isControlled ? children : digit}</Digit>
      <ControlButton onClick={handleDecrease} />
    </span>
  );
}

DigitControl.displayName = 'DigitControl';

DigitControl.propTypes = {
  children: PropTypes.number,
  max: PropTypes.number,
  min: PropTypes.number,
  onChange: PropTypes.func,
};

DigitControl.defaultProps = {
  defaultValue: 0,
  max: 9,
  min: 0,
};
