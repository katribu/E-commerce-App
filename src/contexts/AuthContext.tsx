import {useContext, useState, createContext, useEffect} from "react"
import { auth } from "../firebase/firebase-config"
import { createUserWithEmailAndPassword } from "firebase/auth"


const AuthContext = createContext<any>({})

export function useAuth() {
    return useContext(AuthContext)
}

export function AuthProvider({children}:any) {
    const [currentUser, setCurrentUser] = useState<any>()

    function signup(email:any,password:any) {
        return createUserWithEmailAndPassword(auth,email,password)
    }

    useEffect(()=>{
      const unsubscribe =  auth.onAuthStateChanged(user => setCurrentUser(user))
      return unsubscribe;
    },[])

    const value = {
        currentUser,
        signup
    }

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}