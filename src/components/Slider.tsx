import React from 'react';
import {View, Pressable, Text, ScrollView, Image} from 'react-native';
import {styles} from '../styles/slider.styles';
import {Hero} from '../types/hero.types';
import {useSelector} from 'react-redux';

export default function Slider({item, navigation}) {
  //const {heroes} = useSelector(state => state.heroes);

  //const filters = heroes.filter((hero: Hero) => hero.id < 7);

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
            <Text style={styles.text}>{element.biography.fullName}</Text>
          </View>
        ))}
      </ScrollView>
      <Pressable
        onPress={() => navigation.navigate('TeamDetail')}
        style={styles.button}>
        <Text style={styles.buttonText}>Go to Team</Text>
      </Pressable>
    </View>
  );
}
