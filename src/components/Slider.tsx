import React from 'react';
import {View, Pressable, Text, ScrollView, Image} from 'react-native';
import {styles} from '../styles/slider.styles';
import {Hero} from '../types/hero.types';
import {useSelector} from 'react-redux';

export default function Slider(props: any) {
  const {heroes} = useSelector(state => state.heroes);

  const filters = heroes.filter((hero: Hero) => hero.id < 7);

  return (
    <View style={styles.containter}>
      <Text style={styles.title}>Team Strong</Text>
      <ScrollView horizontal style={styles.sliderContainer}>
        {filters.map((item: Hero) => (
          <View style={styles.elementContainer} key={item.id}>
            <Image
              style={styles.image}
              source={{
                uri: `${item.images.md}`,
              }}
            />
            <Text style={styles.text}>{item.biography.fullName}</Text>
          </View>
        ))}
      </ScrollView>
      <Pressable
        onPress={() => props.navigation.navigate('teams')}
        style={styles.button}>
        <Text style={styles.buttonText}>Go to Team</Text>
      </Pressable>
    </View>
  );
}
