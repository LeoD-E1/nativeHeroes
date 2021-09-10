import {createSlice} from '@reduxjs/toolkit';

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
      return {
        ...state,
        selectedHero: action.payload,
      };
    },
    setHeroFavorite: (state: any, action: any) => {
      return {
        ...state,
        favorites: [...state.favorites, action.payload],
      };
    },
  },
});

export const {setHeroes, getHeroID, setHeroFavorite} = heroSlice.actions;
export default heroSlice.reducer;
