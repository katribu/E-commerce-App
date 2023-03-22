import { changeMode } from "../features/theme"
import { useAppDispatch,useAppSelector } from "../app/hooks"
import { changeTheme } from "../features/theme"




export default function Theme() {
    const dispatch = useAppDispatch()
    const mode = useAppSelector(state => state.theme.value.isDarkMode)
    return(
        <div 
            className="toggle-container"
            onClick={()=>{
                dispatch(changeTheme("dark-mode"))
                dispatch(changeMode())
            }}
        >
            <div className={`toggle-button ${mode? "new-toggle-pos": ""}`}></div>
        </div>
    )
}