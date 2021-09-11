import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {Hero} from '../typescript/types/hero.types';
import {Team} from '../typescript/types/team.types';

interface InitialState {
  teams: Team[];
  selectedTeam: null | Team;
  team: Team;
}

const initialState: InitialState = {
  teams: [],
  selectedTeam: null,
  team: {
    id: '',
    name: '',
    members: [],
  },
};

const teamSlice = createSlice({
  name: 'teams',
  initialState,
  reducers: {
    saveTeam: (state, action: PayloadAction<Team>) => {
      return {
        ...state,
        teams: [...state.teams, action.payload],
        team: {
          id: '',
          name: '',
          members: [],
        },
      };
    },

    addName: (state, action: PayloadAction<string>) => {
      return {
        ...state,
        team: {
          id: state.team.id,
          name: action.payload,
          members: [...state.team.members],
        },
      };
    },

    addMembers: (state, action: PayloadAction<Hero>) => {
      return {
        ...state,
        team: {
          id: state.team.id,
          name: state.team.name,
          members: [...state.team.members, action.payload],
        },
      };
    },
    /* deleteMemberTeam: (state, action: PayloadAction<string>) => {}, */
  },
});

export const {saveTeam, addMembers, addName} = teamSlice.actions;
export default teamSlice.reducer;
