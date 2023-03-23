import { useAppSelector } from '../app/hooks'
import Header from './Header'
import { auth } from '../firebase/firebase-config'
import { updateProfile } from 'firebase/auth'
import { Mode } from '../interfaces'
import { useState } from "react"

export default function Profile() {
    const theme:Mode["theme"] = useAppSelector(state => state.theme.value.theme)
    const mode:Mode["mode"] = useAppSelector(state => state.theme.value.isDarkMode)

    const [newName, setNewName] = useState<string | null>("")

    const user: any  = auth?.currentUser
    const name:string = user?.displayName
    console.log(name)

    const editName = async () => {
        try{
           await updateProfile(user, {displayName: newName})
        
        }catch(err){
            console.error(err)
        }
    }



    
    return(
        <div className={`main-container`}>
            <div>
                <Header />
            </div>

            <div className={`second-container ${mode? theme : "light-mode"}`}>
                <div>
                    <input 
                        type="text" 
                        placeholder="Edit Name" 
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setNewName(e.target.value)}
                    />
                    <button onClick={editName}>Edit Name</button>
                </div>
                <div className="profile-title">
                    <h1>Welcome {name}!</h1>
                </div>
                <div>
                    <p>Important information will go here.....</p>
                </div>

            </div>
        </div>
    )

}