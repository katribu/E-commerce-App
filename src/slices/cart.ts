import { createSlice, PayloadAction} from "@reduxjs/toolkit";
import { Items } from "../utils/interfaces";
import { v4 as uuid } from 'uuid';

//Firebase imports
// import { db } from "../firebase/firebase-config";
// import { collection, addDoc } from "firebase/firestore"


interface cartItem extends Items {
    cartId: string;
}

// const cartCollectionRef = collection(db, "cart")
// const addToFirebase = async (data: cartItem) => {
//     await addDoc(cartCollectionRef, data)
// }

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
            // addToFirebase(newItem)
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