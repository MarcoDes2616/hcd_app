import "./header.css"
import Slides from "./slides/Slides";
import React from 'react';

const Header = () => {
  return (
    <header className="flex row al-c jf-c relative header_container">
      <Slides />
    </header>
  );
};

export default Header;
