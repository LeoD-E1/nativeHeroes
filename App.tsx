import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {Provider as PaperProvider} from 'react-native-paper';
import {Provider} from 'react-redux';
import store from './src/store/store';

import Navigator from './src/navegation/Navigator';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <PaperProvider>
          <Navigator />
        </PaperProvider>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
