import React from 'react';
import './Navbar.css'; 

function Navbar() {
  return (
    <nav className="navbar">
      <a href="/">Home</a>
      <a href="/add-product">Add Product</a>
    </nav>
  );
}

export default Navbar;
