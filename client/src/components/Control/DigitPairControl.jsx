import React from 'react';

import { ControlButton } from '../Button';

import './DigitPairControl.scss';


export default function DigitPairControl(props) {
  const { value } = props;


  return (
    <span className="DigitPairControl">
      <ControlButton />
      <ControlButton />
    </span>
  );
}
