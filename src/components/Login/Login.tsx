import { Link, useNavigate } from "react-router-dom"
import { useAppSelector } from "../../app/hooks"
import {useState} from "react"
import Header from "../Header/Header"
import { Mode } from "../../utils/interfaces"
import "./login.css"
import { useAuth } from "../../contexts/AuthContext"




export default function Login() {
    const navigate = useNavigate()
    const {login, loginWithGoogle} = useAuth()

    const [email, setEmail] = useState<string>("")
    const [password, setPassword] = useState<string>("")

    const theme:Mode["theme"] = useAppSelector(state => state.theme.value.theme)
    const mode: Mode["mode"] = useAppSelector(state => state.theme.value.isDarkMode)

    const handleEmailInput = (e:any) => {setEmail(e.target.value)}
    const handlePassInput = (e:any) => {setPassword(e.target.value)}

    const signIn = async () => {
        try{
            if(email && password){
                await login(email,password)
                navigate("/home")
            }
        }catch(err){
            console.error(err)
        }
    }

    const signInWithGoogle = async () => {
        try {
            await loginWithGoogle()
            navigate("/home")
        } catch(err){
            console.error(err)
        }
    }

    return (
        <div className={`main-container`}>
            <div>
                <Header />
            </div>

            <div className={`second-container ${mode? theme : "light-mode"}`}>
                <div className="login-input-div">
                    <input type="email" placeholder="Email" onChange={handleEmailInput} />
                    <input type="password" placeholder="Password" onChange={handlePassInput}  />
                </div>
                <div className="link-div">
                    <Link to={"/createuser"} className="create-user-link">Create Account</Link>
                    <Link to={'/forgot-password'} className="create-user-link">Forgot Password?</Link>
                </div>
                <div className="login-link-div">
                    <div className="login-button">
                        <button 
                            onClick={signIn}
                        >Log In 
                        </button>
                    </div>

                    <div className="login-button">
                        <button 
                            onClick={signInWithGoogle} 
                        >Google Log In
                        </button>
                    </div>
                </div>

            </div>
            
            
        </div>
    )
}