import React, {useContext} from 'react';
import {Text, ScrollView, Image, View} from 'react-native';
import {HeroContext} from '../context/Heroes/HeroState';
//Style
import {styles} from '../styles/heroProfile';
import {Hero} from '../types/hero.types';
import NavBar from '../components/NavBar';
import {IconButton} from 'react-native-paper';

export default function HeroProfile() {
  const {selectedHero}: any = useContext(HeroContext);
  const dark = 'dark-content';
  return (
    <>
      <NavBar
        hide={false}
        translucent={false}
        color={styles.container.backgroundColor}
        fontColor={dark}
      />
      {selectedHero.map((item: Hero) => (
        <ScrollView style={styles.container} key={item.id}>
          <Image
            style={styles.image}
            source={{
              uri: `${item.images.lg}`,
            }}
          />
          <ScrollView style={styles.description}>
            <View style={styles.headerDescription}>
              <Text style={styles.title}>
                {item.biography.aliases[0]} ({item.biography.fullName})
              </Text>
              <IconButton
                style={styles.icon}
                icon="star"
                color="#777"
                size={27}
                onPress={() => console.log('Pressed')}
              />
            </View>
            <Text style={styles.subtitle}>{item.work.occupation}</Text>
          </ScrollView>
        </ScrollView>
      ))}
    </>
  );
}
