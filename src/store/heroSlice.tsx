import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {Hero} from '../typescript/types/hero.types';

interface InitialState {
  heroes: Hero[];
  selectedHero: null | Hero;
  favorites: Hero[];
}

const initialState: InitialState = {
  heroes: [],
  selectedHero: null,
  favorites: [],
};

const heroSlice = createSlice({
  name: 'heroes',
  initialState,
  reducers: {
    setHeroes: (state, action: PayloadAction<Hero[]>) => {
      return {
        ...state,
        heroes: action.payload,
      };
    },
    getHeroID: (state, action: PayloadAction<Hero>) => {
      return {
        ...state,
        selectedHero: action.payload,
      };
    },
    setHeroFavorite: (state, action: PayloadAction<Hero>) => {
      return {
        ...state,
        favorites: [...state.favorites, action.payload],
      };
    },
  },
});

export const {setHeroes, getHeroID, setHeroFavorite} = heroSlice.actions;
export default heroSlice.reducer;
