import { useAppSelector } from '../app/hooks'
import Header from './Header'

export default function Profile() {
    const user = useAppSelector(state => state.user.value)
    const theme = useAppSelector(state => state.theme.value.theme)
    const mode = useAppSelector(state => state.theme.value.isDarkMode)
    return(
        <div className={`main-container`}>
            <div>
                <Header />
            </div>

            <div className={`second-container ${mode? theme : "light-mode"}`}>
                <div className="profile-title">
                    <h1>Welcome {user.email}!</h1>
                </div>
                <div>
                    <p>Important information will go here.....</p>
                </div>

            </div>
        </div>
    )

}