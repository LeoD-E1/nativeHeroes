import {configureStore} from '@reduxjs/toolkit';
// Slice
import heroSlice from './heroSlice';

export default configureStore({
  reducer: {
    heroes: heroSlice,
  },
});
