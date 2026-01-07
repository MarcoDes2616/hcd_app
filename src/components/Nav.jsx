import PrimaryBtn from "./PrimaryBtn";
import React from 'react';


const Nav = () => {
  return (
    <nav
      className="full-w autoM flex row jf-sb al-c"
    >
      {/* Logo */}
      <div className="flex al-c logo_nav">
        <img
          src="/logo_h.png"
          alt="Hair Cosmetic Distribuciones"
          width={"100%"}
        />
      </div>

      {/* Menu */}
      <ul className="row al-c menu_nav s-m">
        <li className="btn_app">Inicio</li>
        <li className="btn_app">Productos</li>
        <li className="btn_app">Distribución</li>
        <li className="btn_app">Contacto</li>
      </ul>

      {/* CTA */}
      <div className="btn_nav flex al-c jf-c">
        <PrimaryBtn child={"Sé distribuidor"} onClick={() => {}} />
      </div>
    </nav>
  );
};

export default Nav;
