import Logo from './img/umi_logo.png'
import { Link } from "react-router-dom";
import './contact.css'

function Contact(){
    return  (
        <div className="wrapper">
            <header>
                <div className="container">
                    <div className="header_container">
                        <div className="logo">
                            <img src={Logo}/>
                        </div>
                        <div className="menu">
                            <ul>
                                <li><Link to='/'>Головна</Link></li>
                                <li><Link to='/news'>Новини</Link></li>
                                <li><Link to='/gallery'>Галерея</Link></li>
                                <li><Link to='/aboutUs'>Про нас</Link></li>
                                <li><Link to='/contact'>Контакти</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="header-container-phone">
                        <div className="logo-phone">
                            <img src={Logo}/>
                        </div>
                        <div className="menu-phone">
                            <ul>
                                <li><Link to='/'>Головна</Link></li>
                                <li><Link to='/news'>Новини</Link></li>
                                <li><Link to='/gallery'>Галерея</Link></li>
                                <li><Link to='/aboutUs'>Про нас</Link></li>
                                <li><Link to='/contact'>Контакти</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </header>
            <div className="main">
                <div className="container">
                    <div className="main-container-contact">
                        <div className="address">
                            <h4>Адреса:</h4>
                            <p>Військово-промисловий комплекс України <br/>
                                вул. Національна, 123 <br/>
                                м. Київ, 01001 <br/>
                                Україна</p>
                        </div>
                        <div className="tel">
                            <h4>Телефон та електронна пошта:</h4>
                            <p>Телефон: +380 44 123 4567 <br/>
                                Електронна пошта: info@ukrmilitary.com</p>
                        </div>
                        <div className="time">
                            <h4>Години роботи: </h4>
                            <p>Понеділок - П'ятниця: <span>9:00 - 18:00</span><br/>
                                Субота - Неділя: Закрито</p>
                        </div>
                    </div>
                </div>
            </div>
            <footer>
                <div className="container">
                    <div className="footer">
                        <p>© 2020 Copyright: </p>
                    </div>
                </div>
            </footer>
        </div>
    )
}
export default Contact;