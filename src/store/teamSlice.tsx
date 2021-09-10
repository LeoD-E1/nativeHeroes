import {createSlice} from '@reduxjs/toolkit';
import {Hero} from '../types/hero.types';

const teamSlice = createSlice({
  name: 'teams',
  initialState: {
    teams: [],
    selectedTeam: null,
    name: '',
    members: [],
  },
  reducers: {
    saveTeam: (state: any, action: any) => {
      return {
        ...state,
        teams: [...state.teams, action.payload],
        name: '',
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
    addName: (state: any, action: any) => {
      return {
        ...state,
        name: action.payload,
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

export const {saveTeam, getTeam, addMembers, addName} = teamSlice.actions;
export default teamSlice.reducer;
