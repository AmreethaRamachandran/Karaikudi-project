import './Footer.css';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content grid grid-3">
          <div className="footer-section">
            <h3>About Us</h3>
            <p>Karaikudi Bakery brings you the finest baked goods, crafted with passion and quality ingredients.</p>
          </div>

          <div className="footer-section">
            <h3>Quick Links</h3>
            <ul className="footer-links">
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#products">Products</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h3>Contact Info</h3>
            <p>Email: info@karaikudibakery.com</p>
            <p>Phone: +91 XXXXX XXXXX</p>
            <p>Address: Karaikudi, Tamil Nadu</p>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {currentYear} Karaikudi Bakery. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
