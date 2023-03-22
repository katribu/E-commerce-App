import { Link } from "react-router-dom"
import Theme from "./Theme"

export default function Header(){
    return (
        <header className="header-container">
            <div>
                <h1>Welcome to TSP</h1>
            </div>

            <nav className="nav-container">
                <div>
                    <Link to={"/"} className="nav-logout-link">Logout</Link>
                </div>
                <div className="toggle-theme-div">
                    <Theme />
                </div>
            </nav>
        </header>
    )
}