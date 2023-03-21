import { Link } from 'react-router-dom'
import { useAppSelector, useAppDispatch } from '../app/hooks'
import { logout } from '../features/users'
import Theme from './Theme'

export default function Profile() {
    const user = useAppSelector(state => state.user.value)
   

    const dispatch = useAppDispatch()
    return(
        <div className={`main-container `}>
            <div className="toggle-theme-div">
                <Theme />
            </div>
            <div className="profile-title">
                <h1>Welcome {user.email}!</h1>
            </div>

            <div className="logout-link-div">
                <Link 
                    to={"/"} 
                    onClick={()=>{
                        console.log("logging out")
                        //doesn't reset to the empty string....
                        dispatch(logout())
                    }}
                    className="logout-link"
                >Log Out
                </Link>
            </div>
        </div>
    )

}