//Libraries
import React from 'react';
import {Text, ScrollView, Image, View} from 'react-native';
import {IconButton, Button} from 'react-native-paper';
//Style
import {styles} from '../styles/heroProfile';
//Components
import NavBar from '../components/NavBar';
import Appearance from '../components/heroProfile/Appearance';
//Redux
import {setHeroFavorite} from '../store/heroSlice';
import {useAppDispatch, useAppSelector} from '../typescript/hooks';

export default function HeroProfile({navigation}: any) {
  const {selectedHero} = useAppSelector(state => state.heroes);
  const dispatch = useAppDispatch();
  const dark = 'dark-content';

  return (
    <>
      <NavBar
        hide={false}
        translucent={false}
        color={styles.container.backgroundColor}
        fontColor={dark}
      />
      {selectedHero && (
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
            <Button
              mode="outlined"
              onPress={() => navigation.navigate('Teams')}>
              Add to Team
            </Button>
          </ScrollView>
        </View>
      )}
    </>
  );
}
