import React from 'react';

import { Button } from 'components/Button';
import { Link } from 'components/Link';
import { View } from 'components/View';

import { useGlobalState } from 'state/global';

import './Home.scss';


export default function Home(props) {
  const [{ themeClass }] = useGlobalState();

  function handleClick() {

  }


  console.log('themeClass: %o', themeClass)
  return (
    <View className="Home">
      <Link to="/main" target="_blank">external</Link>
      <Button onClick={handleClick}>New Timer</Button>
    </View>
  );
}
