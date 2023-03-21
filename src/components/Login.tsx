import { Link } from "react-router-dom"
import { useAppDispatch } from "../app/hooks"
import { login } from "../features/users"
import {useState} from "react"



export default function Login() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const dispatch = useAppDispatch()
    const handleEmailInput = (e:any) => {setEmail(e.target.value)}
    const handlePassInput = (e:any) => {setPassword(e.target.value)}

    return (
        <div>
            <input type="email" placeholder="Email" onChange={handleEmailInput} />
            <input type="password" placeholder="Password" onChange={handlePassInput}  />
            <Link to={"/profile"} onClick={()=>dispatch(login({email:email , password:password}))}>Log In </Link>
            
        </div>
    )
}