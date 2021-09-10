import React from 'react';
import {View, Text} from 'react-native';
import NavBar from '../components/NavBar';
import SearchBar from '../components/SearchBar';

export default function Search({navigation}) {
  return (
    <View>
      <NavBar />
      <SearchBar navigation={navigation} screen="Search" />
    </View>
  );
}
