import React from 'react';

import { Link } from 'components/Link';
import { View } from 'components/View';

import { useGlobalState } from 'state/global';

import './Home.scss';


export default function Home(props) {
  const [{ themeClass }] = useGlobalState();

  console.log('themeClass: %o', themeClass)
  return (
    <View className="Home">
      <Link to="testies">testies</Link>
    </View>
  );
}
