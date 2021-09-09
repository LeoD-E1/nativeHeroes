import {createSlice} from '@reduxjs/toolkit';
import {Hero} from '../types/hero.types';

const teamSlice = createSlice({
  name: 'teams',
  initialState: {
    teams: [],
    selectedTeam: null,
  },
  reducers: {
    saveTeam: (state, action) => {
      return {
        ...state,
        teams: action.payload,
      };
    },
    getTeam: (state: any, action: any) => {
      const hero = state.heroes.filter(
        (item: Hero) => item.id === action.payload,
      );
      return {
        ...state,
        selectedHero: hero,
      };
    },
  },
});

export const {saveTeam, getTeam} = teamSlice.actions;
export default teamSlice.reducer;
