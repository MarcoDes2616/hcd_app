import React from "react";

const PrimaryBtn = ({ child, onClick }) => {
  return (
    <button
        href="#contacto"
        className="round primnary_btn w-b h_family"
      >
        {child}
      </button>
  );
};

export default PrimaryBtn;
