import React from 'react';

import { View } from 'components/View';

import Stopwatch from './Stopwatch';
import TimeConfiguration from './TimeConfiguration';
import Timer from './Timer';

import './Testies.scss';


export default function Testies(props) {
  return (
    <View className="Testies">
      <Stopwatch />
      <Timer />
      <TimeConfiguration />
    </View>
  );
}
