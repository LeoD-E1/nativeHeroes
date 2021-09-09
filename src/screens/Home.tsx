import React, {useEffect} from 'react';
import {ScrollView, Text} from 'react-native';
import {styles} from '../styles/homescreen';

import NavBar from '../components/NavBar';
import Slider from '../components/Slider';
import Card from '../components/Card';
import {axiosTool} from '../helpers/axios';
import {setHeroes} from '../store/heroSlice';
import {useDispatch} from 'react-redux';
import {Hero} from '../types/hero.types';

export default function Homescreen({navigation}: any) {
  const dispatch = useDispatch();

  const getHeroes = async () => {
    try {
      const {data} = await axiosTool.get('/all.json');
      const hero: Hero = data;
      dispatch(setHeroes(hero));
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
      <Card />
      <Slider />
    </ScrollView>
  );
}
