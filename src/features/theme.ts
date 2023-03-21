import { createSlice} from "@reduxjs/toolkit";

interface Theme {
  value:{
   theme: string;
   isLightMode:boolean;
  }
}
const initialState: Theme = {value: { theme: "light-mode", isLightMode: true}};

export const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    changeTheme: (state, action) => {
      state.value = action.payload;
    }
  },
});

export const { changeTheme } = themeSlice.actions;

export default themeSlice.reducer;