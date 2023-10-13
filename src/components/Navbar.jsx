import React from "react";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../styles/navbar.css";

const Navbar = ({ size, setShow }) => {
  return (
    <nav>
      <div className="nav-box">
        <span className="my-shop">DxO Shop</span>
        <div className="cart" onClick={() => setShow(false)}>
          <span>
            <i className="fas fa-cart-plus">
              <FontAwesomeIcon icon={faCartPlus} />
            </i>
          </span>
          <span>{size}</span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
