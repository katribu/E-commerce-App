import { Link } from 'react-router-dom'
import { useAppSelector, useAppDispatch } from '../app/hooks'
import { logout } from '../features/users'

export default function Profile() {
    const user = useAppSelector(state => state.user.value)
    const dispatch = useAppDispatch()
    return(
        <div>
            <h1>Welcome {user.email}!</h1>

            <Link 
                to={"/"} 
                onClick={()=>{
                    console.log("logging out")
                    //doesn't reset to the empty string....
                    dispatch(logout())
                }}
            >Log Out
            </Link>
        </div>
    )

}