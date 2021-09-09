import React from 'react';
import {Text, ScrollView, Image, View} from 'react-native';
//Style
import {styles} from '../styles/heroProfile';
import {Hero} from '../types/hero.types';
import NavBar from '../components/NavBar';

import {setHeroFavorite} from '../store/heroSlice';
import {IconButton, Button} from 'react-native-paper';
import {useSelector, useDispatch} from 'react-redux';

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
      {selectedHero.map((item: Hero) => (
        <View style={styles.container} key={item.id}>
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
                onPress={() => dispatch(setHeroFavorite(item.id))}
              />
            </View>
            <Text style={styles.subtitle}>{item.work.occupation}</Text>
            <Button
              icon="account-check"
              mode="outlined"
              onPress={() => navigation.navigate('Teams')}>
              Add to Team
            </Button>
          </ScrollView>
        </View>
      ))}
    </>
  );
}
