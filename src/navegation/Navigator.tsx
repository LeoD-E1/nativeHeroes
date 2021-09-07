import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
// Screens
import HomeScreen from '../screens/Home';
import HeroProfile from '../screens/HeroProfile';
import TeamDetail from '../screens/TeamDetail';
import Search from '../screens/Search';
import CreateTeam from '../screens/CreateTeam';

const Stack = createNativeStackNavigator();

export default function Navigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="home" component={HomeScreen} />
      <Stack.Screen name="profile" component={HeroProfile} />
      <Stack.Screen name="create-team" component={CreateTeam} />
      <Stack.Screen name="team" component={TeamDetail} />
      <Stack.Screen name="search" component={Search} />
    </Stack.Navigator>
  );
}
