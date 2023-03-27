import { useAppSelector, useAppDispatch } from '../app/hooks'
import { changeName } from '../features/users'
import Header from './Header'
import { Mode } from '../interfaces'
import { useState } from "react"
import { storage } from "../firebase/firebase-config"

export default function Profile() {
    const theme:Mode["theme"] = useAppSelector(state => state.theme.value.theme)
    const mode:Mode["mode"] = useAppSelector(state => state.theme.value.isDarkMode)
    const myName:string = useAppSelector(state => state.user.name)
    const dispatch = useAppDispatch()
    
    const [newName, setNewName] = useState<string>("");
    const [fileUpload, setFileUpload] = useState<FileList | null>(null)

   

    return(
        <div className={`main-container`}>
            <div>
                <Header userName={myName} />
            </div>

            <div className={`second-container ${mode? theme : "light-mode"}`}>
                <div>
                    <input 
                        type="text" 
                        placeholder="Edit Name" 
                        onChange={(e: any) => setNewName(e.target.value)}
                    />
                    <button 
                        onClick={()=> {
                            dispatch(changeName(newName))
                        }}
                    >Edit Name
                    </button>
                </div>
                <div className="profile-title">
                    <h1>Welcome {myName}!</h1>
                </div>
                <div>
                    <p>Add a file.</p>
                    <input type="file" onChange={(e) => setFileUpload(e.target.files)}/>
                    <button> Add </button>
                </div>

            </div>
        </div>
    )

}