import React from 'react';
import HeroState from './src/context/Heroes/HeroState';
import Homescreen from './src/screens/Homescreen';

const App: React.FC = () => {
  return (
    <HeroState>
      <Homescreen />
    </HeroState>
  );
};

export default App;
