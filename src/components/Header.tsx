import { useState } from 'react';
import './Header.css';

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [productsDropdown, setProductsDropdown] = useState(false);

  return (
    <>
      {/* Top Banner */}
      <div className="top-banner">
        <p>Free Shipping above Rs. 599</p>
      </div>

      {/* Main Header */}
      <header className="header">
        <div className="container">
          <nav className="navbar">
            {/* Logo */}
            <div className="logo">
              <h1>Karaikudi Bakery</h1>
            </div>

            {/* Desktop Navigation */}
            <ul className={`nav-menu ${menuOpen ? 'active' : ''}`}>
              <li><a href="#home">Home</a></li>
              
              <li className="dropdown">
                <a href="#products" onClick={() => setProductsDropdown(!productsDropdown)}>
                  All Products
                  <span className="dropdown-arrow">▼</span>
                </a>
                <ul className={`dropdown-menu ${productsDropdown ? 'active' : ''}`}>
                  <li><a href="#breads">Breads</a></li>
                  <li><a href="#cakes">Cakes</a></li>
                  <li><a href="#pastries">Pastries</a></li>
                  <li><a href="#cookies">Cookies</a></li>
                </ul>
              </li>

              <li><a href="#deals">Crazy Deals</a></li>
              <li><a href="#story">Our Story</a></li>
              <li><a href="#blog">Blog</a></li>
              <li><a href="#contact">Contact</a></li>
              <li><a href="#track">Track Order</a></li>
            </ul>

            {/* Right Icons */}
            <div className="nav-icons">
              <button className="icon-btn search-btn" aria-label="Search">
                🔍
              </button>
              <button className="icon-btn account-btn" aria-label="Account">
                👤
              </button>
              <button className="icon-btn cart-btn" aria-label="Shopping Cart">
                🛒
              </button>
            </div>

            {/* Mobile Menu Toggle */}
            <button 
              className="menu-toggle" 
              aria-label="Toggle menu"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              ☰
            </button>
          </nav>
        </div>
      </header>
    </>
  );
};
