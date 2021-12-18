import PropTypes from 'prop-types';
import React from 'react';
import { Temporal } from '@js-temporal/polyfill';

import { Digit } from '../Digit';

import './Time.scss';


export default function Time(props) {
  const {
    hours,
    minutes,
    seconds,
  } = props;

  const plainTime = Temporal.PlainTime.from({
    hour: parseInt(hours, 10),
    minute: parseInt(minutes, 10),
    second: parseInt(seconds, 10),
  });
  console.log('plainTime: %o', plainTime)

  const newHours = `${plainTime.hour}`.padStart(2, '0');
  const [leadingHour, trailingHour] = newHours.split('');
  console.log('[Time] hours: %o', newHours);

  const newMinutes = `${plainTime.minute}`.padStart(2, '0');
  const [leadingMinute, trailingMinute] = newMinutes.split('');
  console.log('[Time] minutes: %o', newMinutes);

  const newSeconds = `${plainTime.second}`.padStart(2, '0');
  const [leadingSecond, trailingSecond] = newSeconds.split('');
  console.log('[Time] seconds: %o', newSeconds);


  return (
    <div className="Time">
      <Digit>{leadingHour}</Digit>
      <Digit>{trailingHour}</Digit>
      <Digit.Sep />
      <Digit>{leadingMinute}</Digit>
      <Digit>{trailingMinute}</Digit>
      <Digit.Sep />
      <Digit>{leadingSecond}</Digit>
      <Digit>{trailingSecond}</Digit>
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
};

Time.defaultProps = {
  hours: '00',
  minutes: '00',
  seconds: '00',
};
