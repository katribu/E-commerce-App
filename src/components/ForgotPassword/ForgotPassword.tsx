import Header from "../Header/Header"
import { Link } from "react-router-dom"
import { useAppSelector } from "../../app/hooks"
import {useState} from "react"
import { Mode } from "../../utils/interfaces"
import { useAuth } from "../../contexts/AuthContext"
import "./forgotPassword.css"

export default function ForgotPassword(){
    const [email, setEmail] = useState<string>("")
    const theme:Mode["theme"] = useAppSelector(state => state.theme.value.theme)
    const mode: Mode["mode"] = useAppSelector(state => state.theme.value.isDarkMode)
    const {passwordReset} = useAuth()
    const handleEmailInput = (e:any) => {setEmail(e.target.value)}

    const resetPassword = async () => {
        await passwordReset(email)
    }
    return (
        <div className={`main-container`}>
            <div>
                <Header />
            </div>

            <div className={`second-container ${mode? theme : "light-mode"}`}>
                <div className="login-input-div">
                    <input type="email" placeholder="Email" onChange={handleEmailInput} />
                </div>
                <div className="link-div">
                    <Link to={"/createuser"} className="create-user-link">Create Account</Link>
                    <Link to={"/"} className="create-user-link">Login</Link>
                </div>
                
                <div className="login-button">
                    <button 
                        onClick={resetPassword}
                    >Send Email
                    </button>
                </div>

            </div>
            
            
        </div>
    )
}