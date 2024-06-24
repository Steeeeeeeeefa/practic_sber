import {NavLink} from "react-router-dom";
import "./styles.css";

function Navbar () {

    return(
        <nav className="nav">
        <div className="container">
            <div className="nav-row">
                <NavLink to="/" className="logo">
                    <strong>Favorite</strong> films
                </NavLink>
        
                <ul className="nav-list">
                    <li className="nav-list__item">
                        <NavLink to="/"className="nav-list__link">
                            На главную
                        </NavLink>
                    </li>

                    <li className="nav-list__item">
                        <NavLink to="/projects"className="nav-list__link">
                            Фильмы
                        </NavLink>
                    </li>

                    <li className="nav-list__item">
                        <NavLink to="/profile"className="nav-list__link">
                            Профиль
                        </NavLink>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    );
}

export default Navbar;
