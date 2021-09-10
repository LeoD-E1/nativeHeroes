import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HeroProfile from '../screens/HeroProfile';
import Search from '../screens/Search';

export default function ProfileStack() {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="search"
        component={Search}
        options={{headerShown: false}}
      />
      <Stack.Screen name="Profile" component={HeroProfile} />
    </Stack.Navigator>
  );
}
