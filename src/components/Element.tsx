import React from 'react';
import {Image, Text, Pressable, View} from 'react-native';
import {styles} from '../styles/searchBar';
import {useDispatch} from 'react-redux';
import {getHeroID} from '../store/heroSlice';

const Element = ({item, navigation}: any) => {
  const dispatch = useDispatch();

  return (
    <Pressable
      key={item.id}
      style={styles.results}
      onPress={() => {
        dispatch(getHeroID(item));
        navigation.navigate('Profile');
      }}>
      {item.biography.alignment === 'good' ? (
        <View style={styles.alignmentGood} />
      ) : (
        <View style={styles.alignmentBad} />
      )}
      <Image
        style={styles.image}
        source={{
          uri: `${item.images.md}`,
        }}
      />
      <Text style={styles.item}>{item.biography.aliases[0]}</Text>
    </Pressable>
  );
};

export default Element;
