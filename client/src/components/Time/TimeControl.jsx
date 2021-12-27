import classNames from 'classnames';
import React from 'react';

import './TimeControl.scss';


export default function TimeControl(props) {
  const {
    // className,
    reverse,
    single,
  } = props;

  const classes = classNames('TimeControl', {
    'TimeControl--single': single,
    'TimeControl--reverse': reverse,
  });

  return (
    <div className={classes}>
      <button className="TimeControl--digit-left"></button>
      <button className="TimeControl--digit-right"></button>
    </div>
  );
}

TimeControl.displayName = 'TimeControl';

TimeControl.propTypes = {};
