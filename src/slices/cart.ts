import { createSlice, PayloadAction} from "@reduxjs/toolkit";
import { Items } from "../utils/interfaces";
import { v4 as uuid } from 'uuid';

interface cartItem extends Items {
    cartId: string;
}

const initialState: cartItem[] = [];

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
        addItemToCart: (state ,action:PayloadAction<any>) => { 
            const newItem = {
                ...action.payload,
                cartId: uuid(),
            }
            return [
                ...state,
                newItem
            ]
        },

        deleteFromCart: (state, action) => {
            return state.filter(item => item.cartId !== action.payload.cartId)
        }
    }
});
  

export const { addItemToCart, deleteFromCart } = cartSlice.actions;

export default cartSlice.reducer;