import React from "react";
import "./Footer.css";
import { assets } from "../../assets/frontend_assets/assets";

const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          <img src={assets.logo} alt="logo" />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque
            mollitia ullam odit, debitis deleniti aliquam dicta autem architecto
            ducimus accusamus. Repellat amet perferendis dolores enim cupiditate
            saepe eius, ratione molestias?
          </p>
          <div className="footer-social-icons">
            <img src={assets.facebook_icon} alt="facebook" />
            <img src={assets.twitter_icon} alt="twitter" />
            <img src={assets.linkedin_icon} alt="linkedin" />
          </div>
        </div>
        <div className="footer-content-center">
          <h2>COMPANY</h2>
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Delivery</li>
            <li>Privacy policy</li>
          </ul>
        </div>
        <div className="footer-content-right">
          <h2>GET IN TOUCH</h2>
          <ul>
            <li>+1 234 567 890</li>
            <li>123 Street, City</li>
            <li>contact@gmail.com</li>
          </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">
        © 2021 Tomoto.com . All Rights Reserved.
      </p>
    </div>
  );
};

export default Footer;
