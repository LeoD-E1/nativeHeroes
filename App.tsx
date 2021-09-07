import React from 'react';
import HeroState from './src/context/Heroes/HeroState';
import {NavigationContainer} from '@react-navigation/native';

import Navigator from './src/navegation/Navigator';

const App: React.FC = () => {
  return (
    <HeroState>
      <NavigationContainer>
        <Navigator />
      </NavigationContainer>
    </HeroState>
  );
};

export default App;
