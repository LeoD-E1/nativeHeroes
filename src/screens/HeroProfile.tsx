import React from 'react';
import {Text, ScrollView, Image, View} from 'react-native';
//Style
import {styles} from '../styles/heroProfile';
import {Hero} from '../types/hero.types';
import NavBar from '../components/NavBar';

import {setHeroFavorite} from '../store/heroSlice';
import {IconButton, Button} from 'react-native-paper';
import {useSelector, useDispatch} from 'react-redux';
import Appearance from '../components/heroProfile/Appearance';

export default function HeroProfile({navigation}) {
  const {selectedHero} = useSelector(state => state.heroes);
  const dispatch = useDispatch();
  const dark = 'dark-content';
  return (
    <>
      <NavBar
        hide={false}
        translucent={false}
        color={styles.container.backgroundColor}
        fontColor={dark}
      />

      <View style={styles.container}>
        <Image
          style={styles.image}
          source={{
            uri: `${selectedHero.images.lg}`,
          }}
        />
        <ScrollView style={styles.description}>
          <View style={styles.headerDescription}>
            <Text style={styles.title}>
              {selectedHero.biography.aliases[0]} (
              {selectedHero.biography.fullName})
            </Text>
            <IconButton
              style={styles.icon}
              icon="star"
              color="#777"
              size={27}
              onPress={() => dispatch(setHeroFavorite(selectedHero))}
            />
          </View>
          <Text style={styles.subtitle}>{selectedHero.work.occupation}</Text>
          <Appearance item={selectedHero.appearance} />
          <Button mode="outlined" onPress={() => navigation.navigate('Teams')}>
            Add to Team
          </Button>
        </ScrollView>
      </View>
    </>
  );
}
