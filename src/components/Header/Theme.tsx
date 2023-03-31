import { changeMode } from "../../slices/theme"
import { useAppDispatch,useAppSelector } from "../../app/hooks"


export default function Theme() {
    const dispatch = useAppDispatch()
    const mode = useAppSelector(state => state.theme.value.isDarkMode)
    return(
        <div 
            className="toggle-container"
            onClick={()=>{
                dispatch(changeMode())
            }}
            >
            <div className={`toggle-button ${mode? "new-toggle-pos": ""}`}></div>
        </div>
    )
}