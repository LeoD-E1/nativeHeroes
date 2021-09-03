import React from 'react';
import {View, Image, Text, FlatList} from 'react-native';
/* import {Hero} from '../types/hero.types'; */

import {styles} from '../styles/heroList';

const Element = ({item}, {navigation}) => (
  <View key={item.id} style={styles.results}>
    <Text style={styles.id}>{item.id}</Text>
    <Image
      style={styles.image}
      source={{
        uri: `${item.images.md}`,
      }}
    />
    <Text style={styles.item}>{item.biography.aliases[0]}</Text>
  </View>
);

export default function HeroList({hero}) {
  return (
    <>
      {hero.length > 0 ? (
        <FlatList
          style={styles.container}
          data={hero}
          renderItem={({item}) => <Element item={item} />}
          keyExtractor={item => item.id}
        />
      ) : (
        <Text style={styles.noResult}>No results</Text>
      )}
    </>
  );
}
