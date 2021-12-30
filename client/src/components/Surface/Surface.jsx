import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

import './Surface.scss';


/**
 * working from MUI principles, a surface.
 */
export default function Surface(props) {
  const {
    children,
    className,
  } = props;

  const classes = classNames('Surface', className);

  return (
    <div className={classes}>
      {children}
    </div>
  );
}

Surface.displayName = 'Surface';

Surface.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string,
};
