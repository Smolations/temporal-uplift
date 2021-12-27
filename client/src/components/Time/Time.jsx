import PropTypes from 'prop-types';
import React from 'react';
import { Temporal } from '@js-temporal/polyfill';

import { DigitPair } from '../Digit';

import './Time.scss';

console.log('[Time] attaching Temporal to window..')
window.Temporal ||= Temporal;


/**
 * The purpose of this component is _only_ to display a time that has been
 * provided to it.
 */
export default function Time(props) {
  console.groupCollapsed('[Time]');
  const {
    hours,
    minutes,
    seconds,
    temporal,
  } = props;
  console.log('props: %o', props)

  const hour =  temporal?.hour || hours;
  const minute =  temporal?.minute || minutes;
  const second =  temporal?.second || seconds;

  console.groupEnd();
  return (
    <div className="Time">
      <DigitPair value={hour} />
      <DigitPair.Sep />
      <DigitPair value={minute} />
      <DigitPair.Sep />
      <DigitPair value={second} />
    </div>
  );
}

Time.displayName = 'Time';

Time.propTypes = {
  hours: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  minutes: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  seconds: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  temporal: PropTypes.oneOfType([
    PropTypes.instanceOf(Temporal.PlainTime),
    PropTypes.instanceOf(Temporal.PlainDateTime),
    PropTypes.instanceOf(Temporal.ZonedDateTime),
  ]),
};

Time.defaultProps = {
  hours: '00',
  minutes: '00',
  seconds: '00',
};
