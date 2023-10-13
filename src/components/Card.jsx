import React from "react";

const Card = ({ item }) => {
  return (
    <div className="cards">
      <div className="image-box">
        <img src={item.image} alt="image" />
      </div>
      <div className="details">
        <p>{item.title}</p>
        <p>by {item.author}</p>
        <p>Price - {item.price} $</p>
      </div>
    </div>
  );
};

export default Card;
