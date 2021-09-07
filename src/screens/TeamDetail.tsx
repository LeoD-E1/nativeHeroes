import React, {useContext} from 'react';
import {Text, ScrollView, View, Image, SectionList} from 'react-native';
import {HeroContext} from '../context/Heroes/HeroState';
import {styles} from '../styles/heroProfile';
import {Hero} from '../types/hero.types';
import NavBar from '../components/NavBar';

export default function TeamDetail({navigation}) {
  const {selectedTeam} = useContext(HeroContext);

  const dark = 'dark-content';
  return (
    <>
      <NavBar
        hide={false}
        translucent={false}
        color={styles.container.backgroundColor}
        fontColor={dark}
      />
      {selectedTeam.map((item: Hero) => (
        <ScrollView style={styles.container} key={item.id}>
          <Image
            style={styles.image}
            source={{
              uri: `${item.images.lg}`,
            }}
          />
          <ScrollView style={styles.description}>
            <Text style={styles.title}>
              {item.biography.aliases[0]} ({item.biography.fullName})
            </Text>
            <Text style={styles.subtitle}>{item.work.occupation}</Text>
          </ScrollView>
        </ScrollView>
      ))}
    </>
  );
}
