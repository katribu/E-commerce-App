import { changeTheme } from "../features/theme"
import { useAppDispatch } from "../app/hooks"

export default function Theme() {
    const dispatch = useAppDispatch()
    return(
        <div className="toggle-container">
            <div className="toggle-button" 
                onClick={()=>{
                dispatch(changeTheme({theme:"dark-mode", isLightMode:false}))
                }}>

            </div>
        </div>
    )
}