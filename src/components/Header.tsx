import { Link } from "react-router-dom"
import Theme from "./Theme"
import { FiLogOut } from "react-icons/fi"
import { signOut } from "firebase/auth"
import { auth } from "../firebase/firebase-config"

interface NameProp {
    userName?:string;
}

export default function Header({userName}: NameProp){
    

    const logout = async () => {
        try{
            await signOut(auth)
        }catch(err){
            console.error(err)
        }   
    }
    return (
        <header className="header-container">
            <div>
                <h1>Welcome {userName} to TSP</h1>
            </div>

            <nav className="nav-container">
                <div>
                    <Link 
                    to={"/"} 
                    className="nav-logout-link"
                    onClick={logout}
                    >
                        <FiLogOut className="logout-icon"/>
                    </Link>
                </div>
                <div className="toggle-theme-div">
                    <Theme />
                </div>
            </nav>
        </header>
    )
}