import { Link } from "react-router-dom";
import Logo from './img/umi_logo.png'
import './gallery.css'
import News from "./news"
import axios from 'axios'
import {useEffect, useState} from "react";

function Gallery(){

    const [data, setData] = useState([])

    useEffect(() => {
        try {
            const res = axios.get("http://localhost:5002/news")
                .then(res =>{
                    setData(res.data)
                    console.log(res.data)
                }).catch(error => console.log(error))
        }catch(e) {
            console.log(e)
        }
    }, []);

    return (
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
                    <div className="main-content">
                        {data.map(item =>(
                            <div className="main-content-item">
                                <h3>{item.name}</h3>
                                <img src={item.img}/>
                            </div>
                        ))}
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
export default Gallery;