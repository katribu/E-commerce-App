import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import  userReducer from '../slices/users';
import themeReducer from '../slices/theme'

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
