import React from 'react';
import HeroState from './src/context/Heroes/HeroState';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import HomeScreen from './src/screens/Homescreen';
import HeroProfile from './src/screens/HeroProfile';

const Stack = createNativeStackNavigator();

const App: React.FC = () => {
  return (
    <HeroState>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="home" component={HomeScreen} />
          <Stack.Screen name="profile" component={HeroProfile} />
        </Stack.Navigator>
      </NavigationContainer>
    </HeroState>
  );
};

export default App;
