import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

import { Header } from '../Header';

import './View.scss';


/**
 * A generic view wrapper, ensuring all views follow the same layout.
 *
 * may be redundant to Layout?
 */
export default function View(props) {
  const {
    children,
    className,
    heading,
  } = props;

  const classes = classNames('View', className);

  return (
    <div className={classes}>
      {heading && <Header as="h2" heading={heading} />}
      {children}
    </div>
  );
}

View.displayName = 'View';

View.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string,
  heading: PropTypes.string,
};
