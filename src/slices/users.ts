import { createSlice} from "@reduxjs/toolkit";

interface UserInfo {
    name: string;

}
const initialState: UserInfo = { name: "User"};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    changeName: (state, action) => {
      state.name = action.payload;
    },
  },
});

export const { changeName } = userSlice.actions;

export default userSlice.reducer;