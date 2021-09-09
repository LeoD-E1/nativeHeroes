import {createSlice} from '@reduxjs/toolkit';
import {Hero} from '../types/hero.types';

const heroSlice = createSlice({
  name: 'heroes',
  initialState: {
    heroes: [],
    selectedHero: null,
    favorites: [],
  },
  reducers: {
    setHeroes: (state, action) => {
      return {
        ...state,
        heroes: action.payload,
      };
    },
    getHeroID: (state: any, action: any) => {
      const hero = state.heroes.filter(
        (item: Hero) => item.id === action.payload,
      );
      return {
        ...state,
        selectedHero: hero,
      };
    },
    setHeroFavorite: (state, action) => {
      return {
        ...state,
        favorites: action.payload,
      };
    },
  },
});

export const {setHeroes, getHeroID, setHeroFavorite} = heroSlice.actions;
export default heroSlice.reducer;
