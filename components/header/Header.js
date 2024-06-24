import "./styles.css";

function Header () {
    return(
        <header className="header">
            <div className="header__wrapper">
                <h1 className="header__title">
                    <strong>Добро пожаловать в <em>Favorite films</em></strong><br/>
                </h1>
                <div className="header__text">
                    <p>Готовы погрузиться в мир кино и насладиться увлекательными фильмами?</p>
                </div>
            </div>
        </header>
    );
}

export default Header;
