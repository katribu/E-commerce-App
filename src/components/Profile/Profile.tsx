import { Mode } from "../../utils/interfaces"
import { useAppSelector,useAppDispatch } from "../../app/hooks"
import Header from "../Header/Header"
import {useState, useEffect} from "react"
import { changeName } from '../../slices/users'
import Item from "../Item/Item"
import { AiFillDelete } from "react-icons/ai";

export default function Profile() {
    const dispatch = useAppDispatch()
    
    const [newName, setNewName] = useState<string>("");

    const theme:Mode["theme"] = useAppSelector(state => state.theme.value.theme)
    const mode: Mode["mode"] = useAppSelector(state => state.theme.value.isDarkMode)
    const myName:string = useAppSelector(state => state.user.name)
    const myCart = useAppSelector(state => state.cart)

    useEffect(()=> {
        console.log(myCart)
    },[myCart])

    return(
        <div className={`main-container`}>
             <div>
                <Header userName={myName}/>
            </div>

            <div className={`second-container ${mode? theme : "light-mode"}`}>
                <div>
                    <h2>My Settings</h2>
                </div>

                <div>
                    <input 
                        type="text" 
                        placeholder="Change Username" 
                        onChange={(e: any) => setNewName(e.target.value)}
                    />
                    <button 
                        onClick={()=> {
                            dispatch(changeName(newName))
                        }}
                    >Edit Name
                    </button>
                </div>

                <div>
                    <h3> My Cart</h3>
                    <Item inventory={myCart} children={<AiFillDelete/>}/>
                </div>
            </div>
        </div>
    )
}