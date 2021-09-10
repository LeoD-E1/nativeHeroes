import React from 'react';
import {View, Text} from 'react-native';

export default function Stats({item}: any) {
  return (
    <View>
      <Text>Inteligence - {item.intelligence}</Text>
      <Text>Speed - {item.strength}</Text>
      <Text>Durability - {item.durability}</Text>
      <Text>Power - {item.power}</Text>
      <Text>Combat - {item.combat}</Text>
    </View>
  );
}
