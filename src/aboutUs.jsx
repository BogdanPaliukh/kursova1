import Logo from './img/umi_logo.png'
import { Link } from "react-router-dom";
import './aboutUs.css'


function AboutUs(){
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
                    <div className="main-container">
                        <div className="history">
                            <h3>Історія компанії:</h3>
                            <p>Військово-промисловий комплекс України був заснований у 1991 році в період становлення незалежності країни. Виходячи з потреб нації у забезпеченні власної обороноздатності, компанія зосереджувалася на розробці та виробництві інноваційних військових технологій.</p>
                        </div>
                        <div className="moments">
                            <h3>Ключові моменти та досягнення:</h3>
                            <ul>
                                <li>1991 - Заснування компанії як відповідь на виклики епохи та стрімке розширення.</li>
                                <li>1995 - Участь у створенні перших вітчизняних бойових систем.</li>
                                <li>2005 - Визнання на міжнародному ринку як виробника сучасних оборонних технологій.</li>
                            </ul>
                        </div>
                        <div className="mission">
                            <h3>Місія та цінності:</h3>
                            <p>Місія Військово-промислового комплексу України полягає в забезпеченні національної безпеки та визначенні України як надійного світового партнера в галузі військово-промислового комплексу.</p>
                        </div>
                        <div className="values">
                            <h3></h3>
                            <ul>
                                <li><span>Інновації: </span>Постійне вдосконалення та розвиток технологій для забезпечення переваги на полі бою.</li>
                                <li><span>Відданість: </span>Глибока відданість національній безпеці та захисту інтересів країни.</li>
                                <li><span>Ефективність: </span>Висока якість та ефективність в усіх аспектах діяльності.</li>
                            </ul>
                        </div>
                        <div className="achive">
                            <h3>Досягнення:</h3>
                            <p>Військово-промисловий комплекс України пишається своїми досягненнями та визнанням в галузі оборонних технологій.</p>
                            <ul>
                                <li><span>2008</span> - Розробка та впровадження сучасної бойової авіаційної техніки.</li>
                                <li><span>2014</span> - Участь у важливих оборонних проектах для підтримки національної безпеки.</li>
                                <li><span>2020</span> - Нагорода за інновації в галузі кібербезпеки та електронного війська.</li>
                            </ul>
                        </div>
                        <p>Ми віримо в те, що наша робота має сенс, і що ми вносимо важливий внесок у становлення безпечної та захищеної України.</p>
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
export default AboutUs;