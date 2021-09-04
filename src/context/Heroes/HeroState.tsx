import React, {useReducer, createContext} from 'react';
import HeroReducer from './HeroReducer';
import {axiosTool} from '../../helpers/axios';
import {Hero} from '../../types/hero.types';

export const HeroContext = createContext();

const HeroState = ({children}) => {
  let initialState = {
    heroes: [],
    selectedHero: null,
  };
  const [state, dispatch] = useReducer(HeroReducer, initialState);

  const getHeroes = async () => {
    try {
      const {data} = await axiosTool.get('/all.json');
      const hero: Hero = data;
      dispatch({
        type: 'GET_HEROES',
        payload: hero,
      });
    } catch (error) {
      console.log(error);
    }
  };

  const getHeroProfile = (id: number) => {
    const hero: Hero = state.heroes.filter((item: Hero) => item.id === id);

    dispatch({
      type: 'GET_HERO_PROFILE',
      payload: hero,
    });
  };

  return (
    <HeroContext.Provider
      value={{
        heroes: state.heroes,
        selectedHero: state.selectedHero,
        getHeroes,
        getHeroProfile,
      }}>
      {children}
    </HeroContext.Provider>
  );
};

export default HeroState;
