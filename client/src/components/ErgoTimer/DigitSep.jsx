import React from 'react'

import './DigitSep.scss';


export default function DigitSep(props) {
  const { children } = props;

  return (
    <span className="DigitSep">
      {children}
    </span>
  )
}
