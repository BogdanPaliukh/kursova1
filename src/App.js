import './App.css';

import Logo from './img/umi_logo.png'
import firstImg from './img/first.jfif'
import { Link } from "react-router-dom";

function App() {
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
            <h1 className="main_title">
              Новинний портал огляду сучаних розробок Українського ВПК
            </h1>
            <div className="main_content">
              <div className="main_content-page">
                <div className="main_content-page-text">
                  Військово-промисловий комплекс України (ВПК України) — сукупність науково-дослідних, випробувальних організацій і виробничих підприємств, які виконують розробку, виробництво і постановку на озброєння військової та спеціальної техніки, спорядження, боєприпасів як для збройних сил України, так і на експорт. День працівника оборонно-промислового комплексу України відзначається щороку 13 квітня.
                </div>
                <div className="main_content-page-img">
                  <img src={firstImg}/>
                </div>
              </div>
              <div className="chapter">
                <p>Ураховуючи важливе значення оборонно-промислового комплексу для забезпечення національної безпеки та захисту державного суверенітету України, значний внесок працівників оборонно-промислового комплексу у зміцнення обороноздатності держави, згідно Указу Президента України в 2023 році встановлено День працівника оборонно-промислового комплексу України, який буде відзначатися щороку 13 квітня.</p>
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
  );
}

export default App;
