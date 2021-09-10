import React from 'react';
import {View, Text} from 'react-native';

export default function Appearance({item}: any) {
  return (
    <View>
      <Text>Height - {item.height[1]}</Text>
      <Text>Weight - {item.weight[1]}</Text>
      <Text>Eye Color - {item.eyeColor}</Text>
      <Text>Hair Color - {item.hairColor}</Text>
    </View>
  );
}
