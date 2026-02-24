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
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="11" cy="11" r="8"></circle>
                  <path d="m21 21-4.35-4.35"></path>
                </svg>
              </button>
              <button className="icon-btn account-btn" aria-label="Account">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg>
              </button>
              <button className="icon-btn cart-btn" aria-label="Shopping Cart">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="9" cy="21" r="1"></circle>
                  <circle cx="20" cy="21" r="1"></circle>
                  <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                </svg>
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
