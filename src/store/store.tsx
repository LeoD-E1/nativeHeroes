import {configureStore} from '@reduxjs/toolkit';
// Slice
import heroSlice from './heroSlice';
import teamSlice from './teamSlice';

export default configureStore({
  reducer: {
    heroes: heroSlice,
    teams: teamSlice,
  },
});
