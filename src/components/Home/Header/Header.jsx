import "./header.css"
import { Link } from "react-router-dom"

function Header(props){
    return (
        <>
            <header>
                <Link to="/"><img src={props.icon}/></Link>
                <nav>
                    <Link to="/Stories" className="nav-bar">STORIES</Link>
                    <Link to="/Features" className="nav-bar">FEATURES</Link>
                    <Link to="/Pricing" className="nav-bar">Pricing</Link>
                </nav>
                <button>GET AN INVITE</button>
            </header>
        </>
    )
}

export default Header;