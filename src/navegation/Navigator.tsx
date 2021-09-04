import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
// Screens
import HomeScreen from '../screens/Homescreen';
import HeroProfile from '../screens/HeroProfile';

const Stack = createNativeStackNavigator();

export default function Navigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="home" component={HomeScreen} />
      <Stack.Screen name="profile" component={HeroProfile} />
    </Stack.Navigator>
  );
}
