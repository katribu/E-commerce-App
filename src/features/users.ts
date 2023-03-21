import { createSlice} from "@reduxjs/toolkit";

interface UserLogin {
  value:{
    email: string;
    password: string;
  }
}
const initialState: UserLogin = {value: { email: "", password: "" }};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, action) => {
      state.value = action.payload;
    },
    logout: (state) => {state.value = initialState.value}
  },
});

export const { login, logout } = userSlice.actions;

export default userSlice.reducer;