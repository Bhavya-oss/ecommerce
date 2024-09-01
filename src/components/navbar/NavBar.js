import React, { useState } from "react";
import "./NavBar.css";
import logo from "../assets/logo.png";
import cart_icon from "../assets/cart_icon.png";
import { Link } from "react-router-dom";
function NavBar() {
  const [menu, setMenu] = useState("Shop");
  return (
    <div className="navbar">
      <div className="nav-logo">
        <img src={logo} alt="" />
        <p>SHOPPER</p>
      </div>
      <ul className="nav-menu">
        <li onClick={() => setMenu("Shop")}>
          <Link style={{ textDecoration: "none" }} to="/">
            Shop
          </Link>{" "}
          {menu === "Shop" ? <hr /> : ""}
        </li>
        <li onClick={() => setMenu("Men")}>
          <Link style={{ textDecoration: "none" }} to="/men">
            Men
          </Link>{" "}
          {menu === "Men" ? <hr /> : ""}
        </li>
        <li onClick={() => setMenu("Women")}>
          <Link style={{ textDecoration: "none" }} to="/women">
            Women
          </Link>{" "}
          {menu === "Women" ? <hr /> : ""}
        </li>
        <li onClick={() => setMenu("Kids")}>
          <Link style={{ textDecoration: "none" }} to="/kid">
            Kids
          </Link>
          {menu === "Kids" ? <hr /> : ""}
        </li>
      </ul>
      <div className="nav-login-cart">
        <Link style={{ textDecoration: "none" }} to="/login">
          {" "}
          <button>Login</button>
        </Link>
        <Link style={{ textDecoration: "none" }} to="/cart">
          {" "}
          <img src={cart_icon} alt="" />
        </Link>
        <div className="nav-cart-count">1</div>
      </div>
    </div>
  );
}

export default NavBar;
