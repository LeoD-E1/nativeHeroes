import React from 'react';
import {Text, View, Image, Pressable} from 'react-native';
import {styles} from '../styles/card.styles';
import {useDispatch} from 'react-redux';
import {getHeroID} from '../store/heroSlice';

export default function Card({item, navigation}: any) {
  const dispatch = useDispatch();

  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <View style={styles.metaContainer}>
          <View>
            <Text style={styles.timings}>{item.biography.aliases[0]}</Text>
            <Text style={styles.description}>{item.biography.fullName}</Text>
          </View>
          <Pressable
            style={styles.button}
            onPress={() => {
              dispatch(getHeroID(item));
              navigation.navigate('Profile');
            }}>
            <Text style={styles.buttonText}>View profile</Text>
          </Pressable>
        </View>
        <Image
          source={{
            uri: `${item.images.lg}`,
          }}
          style={styles.avatar}
        />
      </View>
    </View>
  );
}
