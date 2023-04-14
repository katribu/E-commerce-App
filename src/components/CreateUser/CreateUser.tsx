import Header from "../Header/Header"
import { useAppSelector } from "../../app/hooks"
import { useNavigate } from "react-router-dom"
import { Mode } from "../../utils/interfaces"
import {useState} from "react"
import "./createUser.css"
import { useAuth } from "../../contexts/AuthContext"


export default function CreateUser() {

    // States //
    const [email,setEmail] = useState<string>("")
    const [password, setPassword] = useState<string>("")
    const [confirmPass, setConfirmPass] = useState<string>("")
    const [error,setError] = useState<string>("")

    //input onChange handlers
    const handleEmailInput = (e:any) => {setEmail(e.target.value)}
    const handlePassInput = (e:any) => {setPassword(e.target.value)}
    const handleConfirmPass = (e:any) => {setConfirmPass(e.target.value)}
    
    const { signup } = useAuth()
    const navigate = useNavigate()
    const theme: Mode["theme"] = useAppSelector(state => state.theme.value.theme)
    const mode: Mode["mode"] = useAppSelector(state => state.theme.value.isDarkMode)

    const handleCreateUser = async (e:any) => {
        e.preventDefault()
        if(password !== confirmPass){
            return setError("The passwords do not match.")
        }
        try {
            await signup(email, password)
            navigate("/")
        }catch(err){
            console.error(err)
        }
        setError("")
    }

    return (
    <div className={`main-container`}>
        <div>
            <Header />
        </div>

        <div className={`second-container ${mode? theme : "light-mode"}`}>
            <div>
                <h2>New User</h2>
            </div>
            <div className="form-div" >
                <form className="form-container" onSubmit={handleCreateUser}>
                    <input type="email" placeholder="Email" onChange={handleEmailInput} required/>
                    <input type="password" placeholder="Password" onChange={handlePassInput} required />
                    <input type="password" placeholder="Confirm Password" onChange={handleConfirmPass} required />
                    <button type="submit">Submit</button>
                </form>

                <p>{error}</p>
            </div>

        </div>
    
    </div>
    )
}