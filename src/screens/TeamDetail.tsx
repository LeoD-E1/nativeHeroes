import React from 'react';
import {Text, ScrollView, View, Image, SectionList} from 'react-native';
import {styles} from '../styles/heroProfile';
import {Hero} from '../types/hero.types';
import NavBar from '../components/NavBar';

export default function TeamDetail({navigation}) {
  const dark = 'dark-content';
  return (
    <>
      <NavBar
        hide={false}
        translucent={false}
        color={styles.container.backgroundColor}
        fontColor={dark}
      />
    </>
  );
}
