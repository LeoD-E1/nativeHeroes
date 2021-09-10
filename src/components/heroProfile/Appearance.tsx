import React from 'react';
import {View, Text} from 'react-native';
import {styles} from '../../styles/Appareance.styles';

export default function Appearance({item}: any) {
  return (
    <View>
      <Text style={styles.details}>Height - {item.height[1]}</Text>
      <Text style={styles.details}>Weight - {item.weight[1]}</Text>
      <Text style={styles.details}>Eye Color - {item.eyeColor}</Text>
      <Text style={styles.details}>Hair Color - {item.hairColor}</Text>
    </View>
  );
}
