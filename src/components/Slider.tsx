import React from 'react';
import {View, Pressable, Text, ScrollView, Image} from 'react-native';
import {styles} from '../styles/slider.styles';
import {Hero} from '../typescript/types/hero.types';
import ModalProfileHero from './ModalProfileHero';

export default function Slider({item}: any) {
  return (
    <View style={styles.containter}>
      <ScrollView horizontal style={styles.sliderContainer}>
        {item.map((element: Hero) => (
          <View style={styles.elementContainer} key={element.id}>
            <Image
              style={styles.image}
              source={{
                uri: `${element.images.md}`,
              }}
            />
            <ModalProfileHero item={element} />
          </View>
        ))}
      </ScrollView>
    </View>
  );
}
