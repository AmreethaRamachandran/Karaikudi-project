import './Hero.css';

export const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <div className="container">
          <div className="hero-text">
            <h1 className="hero-title">Welcome to Karaikudi Bakery</h1>
            <p className="hero-subtitle">Crafting excellence in every bite since day one</p>
            <div className="hero-buttons">
              <button className="btn btn-primary">Explore Menu</button>
              <button className="btn btn-secondary">Contact Us</button>
            </div>
          </div>
        </div>
      </div>
      <div className="hero-background"></div>
    </section>
  );
};
