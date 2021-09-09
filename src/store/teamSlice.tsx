import {createSlice} from '@reduxjs/toolkit';
import {Hero} from '../types/hero.types';

const teamSlice = createSlice({
  name: 'teams',
  initialState: {
    teams: [],
    selectedTeam: null,
    members: [],
  },
  reducers: {
    saveTeam: (state, action) => {
      return {
        ...state,
        teams: action.payload,
        members: [],
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
    addMembers: (state: any, action: any) => {
      return {
        ...state,
        members: [...state.members, action.payload],
      };
    },
  },
});

export const {saveTeam, getTeam, addMembers} = teamSlice.actions;
export default teamSlice.reducer;
