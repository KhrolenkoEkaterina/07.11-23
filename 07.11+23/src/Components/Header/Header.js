import React from "react";
import headerData from "./headerData";
import "./Header.css";

const Header = () => {
  return (
    <div className="Shapka">
      <div className="Logo">Лого</div>
      <div className="button">
        {headerData.map((item, index) => (
          <button key={index} href={item.link}>
            {item.name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Header;
