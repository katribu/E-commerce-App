import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import  userReducer from '../features/users';
import themeReducer from '../features/theme'

export const store = configureStore({
  reducer: {
  user: userReducer,
  theme: themeReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
