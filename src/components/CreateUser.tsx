import Header from "./Header"
import { useAppSelector } from "../app/hooks"
import { useNavigate } from "react-router-dom"
import { Mode } from "../interfaces"
import {createUserWithEmailAndPassword} from "firebase/auth"
import { auth } from "../firebase/firebase-config"
import {useState} from "react"


export default function CreateUser() {
    const [email, setEmail] = useState<string>("")
    const [password,setPassword] = useState<string>("")

    const handleEmailInput = (e:any) => {setEmail(e.target.value)}
    const handlePassInput = (e:any) => {setPassword(e.target.value)}

    const navigate = useNavigate()
    const theme: Mode["theme"] = useAppSelector(state => state.theme.value.theme)
    const mode: Mode["mode"] = useAppSelector(state => state.theme.value.isDarkMode)
    const myName:string = useAppSelector(state=> state.user.name)

    const redirect = async () => {
        try {
            if(email && password){
                await createUserWithEmailAndPassword(auth,email,password)
                navigate("/")
            }
        }catch(err){
            console.error(err)
        }
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
                <form className="form-container">
                    <input type="email" placeholder="Email" onChange={handleEmailInput} />
                    <input type="password" placeholder="Password" onChange={handlePassInput}  />
                    <button type="button" onClick={redirect}>Submit</button>
                </form>
            </div>

        </div>
    
    </div>
    )
}