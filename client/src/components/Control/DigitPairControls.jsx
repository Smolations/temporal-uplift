import React from 'react';

import DigitControls from './DigitControls';

import './DigitPairControls.scss';


export default function DigitPairControls(props) {
  const { value } = props;

  function handleLeadingDigitChange() {}

  function handleTrailingDigitChange() {}


  return (
    <span className="DigitPairControls">
      <DigitControls onChange={handleLeadingDigitChange} />
      <DigitControls onChange={handleTrailingDigitChange} />
    </span>
  );
}
