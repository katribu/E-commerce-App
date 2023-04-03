import { Mode } from "../../utils/interfaces"
import { useAppSelector,useAppDispatch } from "../../app/hooks"
import Header from "../Header/Header"
import {useState} from "react"
import { changeName } from '../../slices/users'

export default function Profile() {
    const dispatch = useAppDispatch()
    
    const [newName, setNewName] = useState<string>("");

    const theme:Mode["theme"] = useAppSelector(state => state.theme.value.theme)
    const mode: Mode["mode"] = useAppSelector(state => state.theme.value.isDarkMode)
    const myName:string = useAppSelector(state => state.user.name)

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

            </div>
        </div>
    )
}