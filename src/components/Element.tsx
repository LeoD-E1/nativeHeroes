import React, {useContext} from 'react';
import {Image, Text, Pressable} from 'react-native';
import {HeroContext} from '../context/Heroes/HeroState';
import {styles} from '../styles/heroList';

//Lo que renderiza la flatlist de herolist

const Element = ({item, navigation}) => {
  const {getHeroProfile} = useContext(HeroContext);

  return (
    <Pressable
      key={item.id}
      style={styles.results}
      onPress={() => {
        getHeroProfile(item.id);
        navigation.navigate('profile');
      }}>
      <Text style={styles.id}>{item.id}</Text>
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
