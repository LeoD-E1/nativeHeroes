import React from 'react';
import {View, Text} from 'react-native';
import SearchBar from '../components/SearchBar';

export default function Search({navigation}) {
  return (
    <View>
      <SearchBar navigation={navigation} screen="Search" />
    </View>
  );
}
