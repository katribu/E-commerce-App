import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import themeReducer from '../slices/theme'
import cartReducer from '../slices/cart'

export const store = configureStore({
  reducer: {
  theme: themeReducer,
  cart: cartReducer,
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
