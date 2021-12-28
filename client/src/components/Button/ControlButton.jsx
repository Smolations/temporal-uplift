import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';
import React from 'react';

import Button from './Button';

import './ControlButton.scss';


export default function ControlButton(props) {
  const {
    children,
    onClick,
  } = props;

  return (
    <Button
      className="ControlButton"
      onClick={onClick}
    >
      {children}
    </Button>
  );
}

ControlButton.displayName = 'ControlButton';

ControlButton.propTypes = {
  children: PropTypes.element,
};
