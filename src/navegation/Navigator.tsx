import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
// Screens

import Search from '../screens/Search';
import CreateTeam from '../screens/CreateTeam';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Homescreen from '../screens/Home';
//Stacks
import ProfileStack from './ProfileStack';

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
            } else if (route.name === 'Teams') {
              iconName = focused ? 'shirt' : 'shirt-outline';
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: '#0891b2',
          tabBarInactiveTintColor: '#999',
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
        <Tab.Screen
          name="Teams"
          component={CreateTeam}
          options={{headerShown: false}}
        />
      </Tab.Navigator>
    </>
  );
}
