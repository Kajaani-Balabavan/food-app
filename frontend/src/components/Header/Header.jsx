import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="header-context">
        <h2>Order your favourite food here</h2>
        <p>
          Choose from a diverse menue featuring a delectable array of dishes
          crafted with the finest ingredients and culinary expertise.Our mission
          is to satisfy your cravings and make your dining experience memorable.
        </p>
        <button>View Menu</button>
      </div>
    </div>
  );
};

export default Header;
