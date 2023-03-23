import { useAppSelector } from '../app/hooks'
import Header from './Header'
import { auth } from '../firebase/firebase-config'
import { updateProfile } from 'firebase/auth'
import { Mode } from '../interfaces'
import { useState,useEffect, useCallback } from "react"

export default function Profile() {
    const theme:Mode["theme"] = useAppSelector(state => state.theme.value.theme)
    const mode:Mode["mode"] = useAppSelector(state => state.theme.value.isDarkMode)

    
    const user: any  = auth?.currentUser
    const name:string = user?.displayName
    const [newName, setNewName] = useState<string>(name)

    // when I refresh, the display name disappears.....
    const editName = useCallback(async () => {
        try{
            if(!newName){
                return;
            }else{
                await updateProfile(user, {displayName: newName})
            }
            }catch(err){
                console.error(err)
            }
        },[user, newName])

    useEffect(()=>{
        editName()
    },[editName])

    
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
                    <p>Add a file.</p>
                    <input type="file"/>
                </div>

            </div>
        </div>
    )

}