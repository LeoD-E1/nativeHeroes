import React, {useState} from 'react';
import {View, TextInput} from 'react-native';
import {styles} from '../styles/searchBar';

import {Hero} from '../typescript/types/hero.types';
import HeroList from './HeroList';

import {useAppSelector} from '../typescript/hooks';

export default function SearchBar({navigation, screen}: any) {
  const {heroes} = useAppSelector(state => state.heroes);

  const [hero, setHero] = useState<Hero[]>();

  const findMatches = (nameToSearch: string) => {
    return heroes.filter((character: Hero) => {
      const regex = new RegExp(nameToSearch, 'gi');
      return (
        character.biography.aliases[0].match(regex) ||
        character.biography.fullName.match(regex)
      );
    });
  };

  const searchName = (e: string) => {
    const heroName: Hero[] = findMatches(e);
    setHero(heroName);
    e === '' && setHero(undefined);
  };

  return (
    <>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Search Hero"
          onChangeText={searchName}
          blurOnSubmit
          autoCorrect
        />
      </View>
      {hero && <HeroList screen={screen} hero={hero} navigation={navigation} />}
    </>
  );
}
