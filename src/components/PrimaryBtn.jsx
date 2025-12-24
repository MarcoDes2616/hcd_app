import React from "react";

const PrimaryBtn = ({ child, onClick }) => {
  return (
    <button
        href="#contacto"
        className="round bold primnary_btn h_family"
      >
        {child}
      </button>
  );
};

export default PrimaryBtn;
