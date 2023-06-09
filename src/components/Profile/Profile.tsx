import { Mode } from "../../utils/interfaces"
import { useAppSelector,useAppDispatch } from "../../app/hooks"
import Header from "../Header/Header"
import {useState } from "react"
import Item from "../Item/Item"
import { AiFillDelete } from "react-icons/ai";
import { deleteFromCart,resetToInitialState } from "../../slices/cart"
import './profile.css'
import PaymentModal from "../PaymentModal/PaymentModal"
import { useAuth } from "../../contexts/AuthContext"

//Firestore imports
import { doc, updateDoc, arrayRemove } from "firebase/firestore"
import { db } from "../../firebase/firebase-config"


export default function Profile() {
    const dispatch = useAppDispatch()
    const {currentUser} = useAuth()
    
    const [show, setShow] = useState<boolean>(false);
    const [isComplete, setIsComplete] = useState<boolean>(false)

    const theme:Mode["theme"] = useAppSelector(state => state.theme.value.theme)
    const mode: Mode["mode"] = useAppSelector(state => state.theme.value.isDarkMode)
    const myCart = useAppSelector(state => state.cart)

    const checkOutPrice = () => {
        const total = myCart?.reduce((acc,prevValue) => acc + prevValue.price, 0)
        return total.toFixed(2)
    }

    const handleCheckOut = () => {
        setShow(prevState => !prevState)
    }

    const deleteFromFirebaseCart = async (cartItem:any) => {
        const docRef = doc(db, "users", currentUser.uid);
        try {
            await updateDoc(docRef, {
                cart: arrayRemove(cartItem)
            });
        }catch(err:any){
            console.log(err.message)
        }
    }

    const emptyFirebaseCart = async () => {
        const docRef = doc(db, "users", currentUser.uid);
        try {
            await updateDoc(docRef, {
                cart: []
            });
        }catch(err:any){
            console.log(err.message)
        }
    }

    return(
        <div className={`main-container`}>
             <div>
                <Header />
            </div>

            <div className={`second-container ${mode? theme : "light-mode"}`}>
                <div>
                    <h2>My Cart</h2>
                </div>

                <div>
                    {myCart.length === 0 ? <p>You currently have no items in your cart.</p> :
                    <div>
                    <Item 
                    inventory={myCart}
                    children={<AiFillDelete className="cart-icon" />}
                    onClick={(item)=>{
                        dispatch(deleteFromCart(item))
                        deleteFromFirebaseCart(item)
                    }}
                    />
                    <button onClick={handleCheckOut}>Checkout <span className="checkout-price">${checkOutPrice()}</span></button>
                    </div>}
                </div>
                
                <div>
                <PaymentModal
                show={show}
                submit={()=> {
                    // setShow(false)
                    emptyFirebaseCart()
                    dispatch(resetToInitialState())
                    setIsComplete(true)
                }}
                cancel={() => setShow(false)}
                value={checkOutPrice()}
                isComplete={isComplete}
                />
                </div>

            </div>
        </div>
    )
}