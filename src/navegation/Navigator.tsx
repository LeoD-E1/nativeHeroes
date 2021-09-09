import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
// Screens

import TeamDetail from '../screens/TeamDetail';
import Search from '../screens/Search';
import CreateTeam from '../screens/CreateTeam';
import Ionicons from 'react-native-vector-icons/Ionicons';
import ProfileStack from './ProfileStack';
import Homescreen from '../screens/Home';

const Tab = createBottomTabNavigator();

export default function Navigator() {
  return (
    <>
      <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarIcon: ({focused, color, size}) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused ? 'home' : 'home-outline';
            } else if (route.name === 'Search') {
              iconName = focused ? 'search' : 'search-outline';
            } else if (route.name === 'Create-team') {
              iconName = focused ? 'add-circle-sharp' : 'add';
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: '#000',
          tabBarInactiveTintColor: '#111',
        })}>
        <Tab.Screen
          options={{headerShown: false}}
          name="Home"
          component={Homescreen}
        />
        <Tab.Screen
          name="Search"
          component={ProfileStack}
          options={{headerShown: false}}
        />
        <Tab.Screen name="Create-team" component={CreateTeam} />
      </Tab.Navigator>
    </>
  );
}
