import React from "react";
import "./FoodItem.css";
import { assets } from "../../assets/frontend_assets/assets";
import { StoreContext } from "../../context/StoreContext";
import { useContext } from "react";

const FoodItem = ({ id, name, description, price, image }) => {
  const { cartItems, addToCart, removeFromCart, url } =
    useContext(StoreContext);
  return (
    <div>
      <div className="food-item">
        <div className="food-item-image-container">
          <img
            className="food-item-image"
            src={url + "/images/" + image}
            alt={name}
          />
          {!cartItems[id] ? (
            <img
              className="add"
              src={assets.add_icon_white}
              alt="add"
              onClick={() => addToCart(id)}
            />
          ) : (
            <div className="food-item-counter">
              <img
                src={assets.remove_icon_red}
                alt="minus"
                onClick={() => removeFromCart(id)}
              />
              <p>{cartItems[id]}</p>
              <img
                src={assets.add_icon_green}
                alt="add"
                onClick={() => addToCart(id)}
              />
            </div>
          )}
        </div>

        <div className="food-item-info">
          <div className="food-item-name-rating">
            <p>{name}</p>
            <img src={assets.rating_starts} alt="rating" />
          </div>
          <p className="food-item-description">{description}</p>
          <p className="food-item-price">${price}</p>
        </div>
      </div>
    </div>
  );
};

export default FoodItem;
