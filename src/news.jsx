import App from "./App";
import './news.css'
import Logo from './img/umi_logo.png'
import { Link } from "react-router-dom";
import {useEffect, useState} from "react";
import axios from 'axios'
function News(){
    const [data, setData] = useState([])

    useEffect(() => {
        try {
            const res = axios.get("http://localhost:5001/news")
                .then(res =>{
                    setData(res.data)
                    console.log(res.data)
                }).catch(error => console.log(error))
        }catch(e) {
            console.log(e)
        }
    }, []);

    return(
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
                    <div className="title">
                        Огляд сучаних розробок Українського ВПК
                    </div>
                    {data.map(item =>(
                        <div className="main_content-item">
                            <div className="main_content-item-title">
                                {item.name}
                            </div>
                            <div className="main_content-item-info">
                                <div className="main_content-item-text">
                                    <div className="main_content-item-text-chapter">
                                        {item.text}
                                    </div>
                                    {item.characteristic?
                                        <div className="main_content-item-text-ul">
                                            <h3>Характеристики:</h3>
                                            <ul>
                                                {item.characteristic?.map(char_item=>(
                                                    <li>{char_item}</li>
                                                ))}
                                            </ul>
                                        </div>
                                        :
                                        <></>
                                    }
                                </div>
                                <div className="main_content-item-img">
                                    <div className="main_content-item-text-purpose">
                                        <h3>Призначення: <span>{item.purpose}</span></h3>
                                    </div>
                                    <img src={item.img}/>
                                </div>
                            </div>
                        </div>
                    ))}
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
export default News;