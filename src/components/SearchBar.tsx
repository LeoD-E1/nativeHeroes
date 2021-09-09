import React, {useState} from 'react';
import {View, TextInput, FlatList} from 'react-native';
import {styles} from '../styles/searchBar';

import {Hero} from '../types/hero.types';
import Element from './Element';
import {useSelector} from 'react-redux';

export default function SearchBar({navigation}: any) {
  const {heroes} = useSelector(state => state.heroes);

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
          placeholder="Buscar Heroe"
          onChangeText={searchName}
          blurOnSubmit
          autoCorrect
        />
      </View>
      {hero && (
        <FlatList
          style={styles.listContainer}
          data={hero}
          renderItem={({item}) => (
            <Element item={item} navigation={navigation} />
          )}
        />
      )}
    </>
  );
}
