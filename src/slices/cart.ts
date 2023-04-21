import { createSlice, PayloadAction} from "@reduxjs/toolkit";
import { Items } from "../utils/interfaces";
import { v4 as uuid } from 'uuid';

//Firebase imports
import { db } from "../firebase/firebase-config";
import { doc,updateDoc, arrayUnion } from "firebase/firestore"
import { auth } from "../firebase/firebase-config";



interface cartItem extends Items {
    cartId: string;
}

const updateUserCart = async (id:string , newItem: cartItem) => {
    const userDoc = doc(db, "users", id);
    const newFields = { cart: arrayUnion(newItem) };
    await updateDoc(userDoc, newFields);
};
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
            auth.onAuthStateChanged(user => {
                if (user){
                    const uid = user.uid
                    return updateUserCart(uid,newItem)
                }
                else {
                    return;
                }
            })
            return [
                ...state,
                newItem
            ]
        },

        deleteFromCart: (state, action) => {
            return state.filter(item => item.cartId !== action.payload.cartId)
        },

        resetToInitialState: () => {
            return initialState
        }
    }
});
  

export const { addItemToCart, deleteFromCart, resetToInitialState } = cartSlice.actions;

export default cartSlice.reducer;