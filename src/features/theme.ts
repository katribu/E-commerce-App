import { createSlice} from "@reduxjs/toolkit";

interface Theme {
  value:{
   theme: string;
   isDarkMode: boolean;
  }
}
const initialState: Theme = {value: { theme: "light-mode", isDarkMode: false}};

export const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    changeTheme: (state, action) => {
      state.value.theme = action.payload;
    },
    changeMode: (state) => {
      state.value.isDarkMode = !state.value.isDarkMode
    }
  },
});

export const { changeTheme, changeMode } = themeSlice.actions;

export default themeSlice.reducer;