import React, {useContext, useEffect} from 'react';
import {ScrollView} from 'react-native';
import {styles} from '../styles/homescreen';
import SearchBar from '../components/SearchBar';
import {HeroContext} from '../context/Heroes/HeroState';
import NavBar from '../components/NavBar';
import Slider from '../components/Slider';
import Card from '../components/Card';

export default function Homescreen({navigation}: any) {
  const {getHeroes} = useContext(HeroContext);

  useEffect(() => {
    getHeroes();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const dark = 'dark-content';
  return (
    <ScrollView style={styles.container}>
      <NavBar
        hide={false}
        translucent={false}
        color={styles.container.backgroundColor}
        fontColor={dark}
      />
      <SearchBar navigation={navigation} />
      <Slider />
      <Card />
    </ScrollView>
  );
}
