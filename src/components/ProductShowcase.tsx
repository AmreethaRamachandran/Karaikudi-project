import './ProductShowcase.css';

export const ProductShowcase = () => {
  const products = [
    {
      id: 1,
      name: 'Protein Rich Khakhra',
      image: 'https://via.placeholder.com/90x90/556B2F/F5F3EE?text=Khakhra',
    },
    {
      id: 2,
      name: 'Festive Collection',
      image: 'https://via.placeholder.com/90x90/708238/F5F3EE?text=Festive',
    },
    {
      id: 3,
      name: 'Taste the Worlds Best Chana Jar Gram',
      image: 'https://via.placeholder.com/90x90/8B6F47/F5F3EE?text=Chana',
    },
  ];

  return (
    <div className="product-showcase-container">
      <div className="showcase-header"></div>
      <div className="product-showcase-wrapper">
        <div className="product-carousel">
          {/* First set */}
          {products.map((product) => (
            <div key={product.id} className="carousel-item">
              <img src={product.image} alt={product.name} className="product-image" />
              <button className="shop-btn">Shop Now</button>
              <p className="product-name">{product.name}</p>
            </div>
          ))}
          {/* Duplicate for seamless loop */}
          {products.map((product) => (
            <div key={`${product.id}-dup`} className="carousel-item">
              <img src={product.image} alt={product.name} className="product-image" />
              <button className="shop-btn">Shop Now</button>
              <p className="product-name">{product.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

