import React from 'react';

import './DigitControl.scss';


export default function DigitControl(props) {
  const { onClick } = props;

  return (
    <button
      className="DigitControl"
      type="button"
      onClick={onClick}
    >
      ↑
    </button>
  );
}

DigitControl.displayName = 'DigitControl';

DigitControl.propTypes = {};
