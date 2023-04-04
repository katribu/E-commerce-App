import { createSlice, PayloadAction} from "@reduxjs/toolkit";
import { Items } from "../utils/interfaces";

const initialState: Items[] = [];

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
        addItemToCart: (state ,action:PayloadAction<any>) => { 
            const newItem = action.payload
            return [
                ...state,
                newItem
            ]
        }
    }
});
  

export const { addItemToCart } = cartSlice.actions;

export default cartSlice.reducer;