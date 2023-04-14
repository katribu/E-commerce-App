import {useContext, useState, createContext, useEffect} from "react"
import { auth,googleProvider } from "../firebase/firebase-config"
import { createUserWithEmailAndPassword,signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth"


const AuthContext = createContext<any>({})

export function useAuth() {
    return useContext(AuthContext)
}

export function AuthProvider({children}:any) {
    const [currentUser, setCurrentUser] = useState<any>()

    function signup(email:string,password:string) {
        return createUserWithEmailAndPassword(auth,email,password)
    }

    function login(email:string,password:string){
        return signInWithEmailAndPassword(auth,email,password)
    }

    function loginWithGoogle() {
      return  signInWithPopup(auth,googleProvider)
    }

    function logout() {
        return signOut(auth)
    }

    useEffect(()=>{
      const unsubscribe =  auth.onAuthStateChanged(user => setCurrentUser(user))
      return unsubscribe;
    },[])

    const value = {
        currentUser,
        signup,
        login,
        loginWithGoogle,
        logout
    }

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}