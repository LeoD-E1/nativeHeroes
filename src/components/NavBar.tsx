import React from 'react';
import {StatusBar} from 'react-native';

export default function NavBar(props: any) {
  /*  const dark = 'dark-content';
  const light = 'light-content'; */
  return (
    <>
      <StatusBar
        animated={true}
        backgroundColor={props.color}
        hidden={props.hide}
        translucent={props.translucent}
        barStyle={props.fontColor}
      />
    </>
  );
}
