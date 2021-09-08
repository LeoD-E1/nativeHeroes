import React from 'react';
import HeroState from './src/context/Heroes/HeroState';
import {NavigationContainer} from '@react-navigation/native';
import {DefaultTheme, Provider as PaperProvider} from 'react-native-paper';

import Navigator from './src/navegation/Navigator';

const App: React.FC = () => {
  const theme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      primary: 'tomato',
      accent: 'yellow',
    },
  };

  return (
    <HeroState theme={theme}>
      <NavigationContainer>
        <PaperProvider>
          <Navigator />
        </PaperProvider>
      </NavigationContainer>
    </HeroState>
  );
};

export default App;
