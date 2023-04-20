import {useContext, useState, createContext, useEffect} from "react"
import { auth,googleProvider,db } from "../firebase/firebase-config"
import { doc, setDoc } from "firebase/firestore"
import { 
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword, 
    signInWithPopup, 
    signOut,
    sendPasswordResetEmail
 } from "firebase/auth"


const AuthContext = createContext<any>({})

export function useAuth() {
    return useContext(AuthContext)
}

export function AuthProvider({children}:any) {
    const [currentUser, setCurrentUser] = useState<any>()
    
    const signup = (email: string, password: string) => {
        createUserWithEmailAndPassword(auth, email, password)
        .then((res) => {
            const uid = res.user.uid;
            const data = {
                email,
                id: uid,
                cart: [],
            };
            const userRef = doc(db,'users',uid)
            setDoc(userRef, data)
            .then(() => console.log("Created New User Document Successfully"))
            .catch((err) => console.log(err.message))
        });
    }


    function login(email:string,password:string){
        return signInWithEmailAndPassword(auth,email,password)
    }

    function loginWithGoogle() {
      return  signInWithPopup(auth,googleProvider)
    }

    function passwordReset(email:string) {
        return sendPasswordResetEmail(auth,email)
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
        logout,
        passwordReset
    }

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}