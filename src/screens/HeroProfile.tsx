import React, {useContext} from 'react';
import {Text, ScrollView} from 'react-native';
import {HeroContext} from '../context/Heroes/HeroState';
import {styles} from '../styles/heroProfile';

export default function HeroProfile({navigation}) {
  const {selectedHero} = useContext(HeroContext);

  return (
    <ScrollView style={styles.container}>
      <Text>{selectedHero.name}</Text>
    </ScrollView>
  );
}
