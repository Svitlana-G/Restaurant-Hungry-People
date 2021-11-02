import { Link } from "react-router-dom"
import '../css/Navigation.css'
const Navigation = () => {
    return (
        <nav>
            <div class="logo"> </div>
            <ul>
                <li>
                    <Link to="/" exact>HOME</Link>
                </li>
                <li>
                    <Link to="/" exact>ABOUT</Link>
                </li>
                <li>
                    <Link to="/team">TEAM</Link>
                </li>
                <li>
                    <Link to="/booking">BOOKING</Link>
                </li>
            </ul>
            <ul>
                <li>
                    <Link to="/menu">MENU</Link>
                </li>
                <li>
                    <Link to="/galerie">GALERIE</Link>
                </li>
                <li>
                    <Link to="/events">EVENTS</Link>
                </li>
                <li>
                    <Link to="/contact">CONTACT</Link>
                </li>
                <li>
                    <Link to="/feedback">FEEDBACK</Link>
                </li>
            </ul>
        </nav >
    );
}

export default Navigation;