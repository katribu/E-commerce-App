import Header from "./Header"
import { useAppSelector } from "../app/hooks"

export default function CreateUser() {

    const theme = useAppSelector(state => state.theme.value.theme)
    const mode = useAppSelector(state => state.theme.value.isDarkMode)

    return (
    <div className={`main-container`}>
        <div>
            <Header/>
        </div>

        <div className={`second-container ${mode? theme : "light-mode"}`}>
            <div>
                <h2>New User</h2>
            </div>
            <div className="form-div" >
                <form className="form-container">
                    <input type="text" placeholder="Company Name"/>
                    <input type="text" placeholder="First Name"/>
                    <input type="text" placeholder="Last Name"/>
                    <input type="text" placeholder="Email"/>
                    <button type="submit">Submit</button>
                </form>
            </div>

        </div>
    
    </div>
    )
}