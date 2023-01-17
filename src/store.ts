import { configureStore } from '@reduxjs/toolkit';
import commentsReducer from './slices/comments';

const store = configureStore({
  reducer: {
    comments: commentsReducer,
  },
  devTools: true,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
