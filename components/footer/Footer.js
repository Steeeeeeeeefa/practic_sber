import "./styles.css";
import vk from "./../../img/icons/vk.svg";
import instagram from "./../../img/icons/instagram.svg";
import twitter from "./../../img/icons/twitter.svg";
function Footer () {
    return(
        <footer className="footer">
                <div className="container">
                    <div className="footer__wrapper">
                        <ul className="social">
                            <li className="social__item"><a href="#!"><img src={vk} alt="Link"/></a></li>
                            <li className="social__item"><a href="#!"><img src={instagram} alt="Link"/></a></li>
                            <li className="social__item"><a href="#!"><img src={twitter} alt="Link"/></a></li>
                        </ul>
                        <div class="copyright">
                            <p>2024 practic-react</p>
                        </div>
                    </div>
                </div>
        </footer>
    );
}

export default Footer;
