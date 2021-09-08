import React, {useReducer, createContext} from 'react';
import HeroReducer from './HeroReducer';
import {axiosTool} from '../../helpers/axios';
import {Hero, Heroes} from '../../types/hero.types';

export const HeroContext = createContext(null);

const HeroState = ({children}: any) => {
  let initialState: Heroes = {
    heroes: [],
    selectedHero: null,
    selectedTeam: null,
    favorites: [],
    teams: {},
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

  const getHeroProfile = async (id: number) => {
    try {
      const target = state.heroes.filter((item: Hero) => item.id === id);
      const hero: Hero = target;
      dispatch({
        type: 'GET_HERO_PROFILE',
        payload: hero,
      });
    } catch (error) {
      console.log(error);
    }
  };

  const addToFavorites = async (id: number) => {
    try {
      const target = state.heroes.filter((item: Hero) => item.id === id);
      const hero: Hero = target;
      dispatch({
        type: 'ADD_TO_FAVORITES',
        payload: hero,
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <HeroContext.Provider
      value={{
        heroes: state.heroes,
        selectedHero: state.selectedHero,
        selectedTeam: state.selectedTeam,
        favorites: state.favorites,
        teams: state.teams,
        getHeroes,
        getHeroProfile,
        addToFavorites,
      }}>
      {children}
    </HeroContext.Provider>
  );
};

export default HeroState;
