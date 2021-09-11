import {configureStore} from '@reduxjs/toolkit';
// Slice
import heroSlice from './heroSlice';
import teamSlice from './teamSlice';

const store = configureStore({
  reducer: {
    heroes: heroSlice,
    teams: teamSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
