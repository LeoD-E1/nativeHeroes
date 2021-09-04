import React from 'react';
import {FlatList} from 'react-native';
/* import {Hero} from '../types/hero.types'; */
import Element from './Element';
import {styles} from '../styles/heroList';
import {SafeAreaView} from 'react-native-safe-area-context';

export default function HeroList({hero, navigation}) {
  return (
    <SafeAreaView>
      <FlatList
        style={styles.container}
        data={hero}
        renderItem={({item}) => <Element item={item} navigation={navigation} />}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
}
