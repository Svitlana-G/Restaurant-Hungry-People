import { Link } from "react-router-dom"
import '../css/Nav.css'
const Navigation = () => {
    return (
        <nav>
            <ul>
                <li>
                    <Link to="/">HOME</Link>
                </li>
                <li>
                    <Link to="/">ABOUT</Link>
                </li>
                <li>
                    <Link to="/">TEAM</Link>
                </li>
                <li>
                    <Link to="/">BOOKING</Link>
                </li>
            </ul>
            <img src="../img/logo.svg" alt="Logo" />
            <ul>
                <li>
                    <Link to="/">MENU</Link>
                </li>
                <li>
                    <Link to="/">GALERIE</Link>
                </li>
                <li>
                    <Link to="/">EVENTS</Link>
                </li>
                <li>
                    <Link to="/">CONTACT</Link>
                </li>
                <li>
                    <Link to="/">FEEDBACK</Link>
                </li>
            </ul>
        </nav>
    );
}

export default Navigation;