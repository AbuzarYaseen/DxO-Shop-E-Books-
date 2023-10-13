import React from "react";
import "../styles/card.css";

const Card = ({ item, handleClick }) => {
  return (
    <div className="cards">
      <div className="image-box">
        <img src={item.image} alt="image" />
      </div>
      <div className="details">
        <p>{item.title}</p>
        <p>by {item.author}</p>
        <p>Price - {item.price} $</p>
        <button onClick={() => handleClick(item)}>Add to cart</button>
      </div>
    </div>
  );
};

export default Card;
