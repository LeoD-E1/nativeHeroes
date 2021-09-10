import React from 'react';
import {View, Text} from 'react-native';
// Screens
import NavBar from '../components/NavBar';
import SearchBar from '../components/SearchBar';

import {styles} from '../styles/searchScreen';

export default function Search({navigation}) {
  return (
    <View style={styles.container}>
      <NavBar color={styles.container.backgroundColor} />
      <SearchBar navigation={navigation} screen="Search" />
    </View>
  );
}
