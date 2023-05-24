import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {

  const items = useSelector((state) => state.cart)

  return (
    <div className="navbar section">
      <div className="nav-container container">
        <span className="nav-logo">Bazaar</span>
        <div className="nav-links">
          <Link to="/" className="nav-items">
            Home
          </Link>
          <Link to="/cart" className="nav-items">Cart</Link>
        <span className="nav-cart">Cart items : {items.length}</span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
