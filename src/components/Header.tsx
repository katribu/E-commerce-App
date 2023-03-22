import Theme from "./Theme"

export default function Header(){
    return (
        <header className="header-container">
            <div>
                <h1>Welcome to TSP</h1>
            </div>
            <div className="toggle-theme-div">
                <Theme />
            </div>
        </header>
    )
}