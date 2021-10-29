import Navigation from "./Navigation";
import '../css/Header.css'

const Header = () => {
    return (
        <div className="header">
            <Navigation />
            <section className="header-section">
                <article>
                    <p className="arbeits-zeiten">Mon - Fri: 8PM - 10PM, Sat - Sun: 8PM - 3AM</p>
                </article>
                <article>
                    <div className="line-vert"></div>
                    <h4> RESTAURANT</h4>
                    <h1>hungry people</h1>
                    <div className="line"></div>
                    <div className="btn-flex">
                        <div className="btn btn-yellow">BOOK TABLE</div>
                        <div className="btn btn-transparent">EXPLORE</div>
                    </div>
                    <img src="../img/down-btn.svg" alt="" />
                </article>
                <article>
                    <div><img src="../img/facebook.svg" alt="facebook" /></div>
                    <div><img src="../img/twitter.svg" alt="twitter" /></div>
                    <div><img src="../img/instagram.svg" alt="instagram" /></div>
                </article>
            </section>
        </div>
    );
}

export default Header;