import React, {useContext, useEffect} from 'react';
import {ScrollView} from 'react-native';
import {styles} from '../styles/homescreen';
import SearchBar from '../components/SearchBar';
import {HeroContext} from '../context/Heroes/HeroState';

export default function Homescreen({navigation}) {
  const {getHeroes} = useContext(HeroContext);

  useEffect(() => {
    getHeroes();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <ScrollView style={styles.container}>
      <SearchBar navigation={navigation} />
    </ScrollView>
  );
}
