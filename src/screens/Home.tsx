import React, {useEffect} from 'react';
import {ScrollView, Text} from 'react-native';
import {styles} from '../styles/homescreen';

import NavBar from '../components/NavBar';

import Card from '../components/Card';
import {axiosTool} from '../helpers/axios';
// redux
import {setHeroes} from '../store/heroSlice';
import {useAppDispatch, useAppSelector} from '../typescript/hooks';
import {Hero} from '../typescript/types/hero.types';

export default function Homescreen({navigation}: any) {
  const dispatch = useAppDispatch();
  const {favorites} = useAppSelector(state => state.heroes);

  const getHeroes = async () => {
    try {
      const {data} = await axiosTool.get('/all.json');
      dispatch(setHeroes(data));
    } catch (error) {
      console.log(error);
    }
  };

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
      <Text style={styles.favoritesTitle}>Favorites</Text>
      {favorites.map((item: Hero, i: number) => (
        <Card item={item} navigation={navigation} key={i} />
      ))}
    </ScrollView>
  );
}
