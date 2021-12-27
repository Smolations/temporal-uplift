import React from 'react';

import DigitControl from './DigitControl';

import './DigitPairControl.scss';


export default function DigitPairControl(props) {
  const { value } = props;


  return (
    <span className="DigitPairControl">
      <DigitControl />
      <DigitControl />
    </span>
  );
}
