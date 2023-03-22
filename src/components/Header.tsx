import { Link } from "react-router-dom"
import Theme from "./Theme"
import { FiLogOut } from "react-icons/fi"

export default function Header(){
    return (
        <header className="header-container">
            <div>
                <h1>Welcome to TSP</h1>
            </div>

            <nav className="nav-container">
                <div>
                    <Link to={"/"} className="nav-logout-link"><FiLogOut className="logout-icon"/></Link>
                </div>
                <div className="toggle-theme-div">
                    <Theme />
                </div>
            </nav>
        </header>
    )
}