import React from 'react';

import './Digit.scss';


export default function Digit(props) {
  const { children } = props;

  return (
    <span className="Digit">
      {children}
    </span>
  );
}
