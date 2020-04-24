import React from 'react';

export default function NavBar() {
  return (
    <nav className="nav ">
      <div className="nav__contenedor contenedor">
        <div className="logo">
          <p>Logo</p>

          <div className="menu-movil">
            <i className="fas fa-bars" />
          </div>
        </div>
        <ul className="menu">
          <li className=" menu__item">
            <a href="#" className="menu__link menu__link-h">
              Home
            </a>
          </li>
          <li className="menu__item">
            <a href="#" className="menu__link">
              Anillos
            </a>
          </li>
          <li className="menu__item">
            <a href="#" className="menu__link">
              Relojes
            </a>
          </li>
          <li className="menu__item">
            <a href="#" className="menu__link">
              Accesorios
            </a>
          </li>

          <li className="menu__item">
            <a href="#" className="menu__link">
              Contacto
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
