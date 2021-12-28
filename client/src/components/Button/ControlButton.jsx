import React from 'react';

import './ControlButton.scss';


export default function ControlButton(props) {
  const { onClick } = props;

  return (
    <button
      className="ControlButton"
      type="button"
      onClick={onClick}
    >
      ↑
    </button>
  );
}

ControlButton.displayName = 'ControlButton';

ControlButton.propTypes = {};
