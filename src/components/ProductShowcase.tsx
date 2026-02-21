import './ProductShowcase.css';

export const ProductShowcase = () => {
  const products = [
    {
      id: 1,
      title: 'Festive Collection',
      image: 'https://via.placeholder.com/200x180/D4C5B9/556B2F?text=Festive+Collection'
    },
    {
      id: 2,
      title: 'Taste the Worlds Best Chana Jar Garam',
      image: 'https://via.placeholder.com/200x180/C9B8B0/556B2F?text=Chana+Jar'
    },
    {
      id: 3,
      title: 'Protein Rich Khakhra',
      image: 'https://via.placeholder.com/200x180/D9C9BC/556B2F?text=Khakhra'
    },
    {
      id: 4,
      title: 'Premium Namkeen Mix',
      image: 'https://via.placeholder.com/200x180/C4956F/556B2F?text=Namkeen+Mix'
    },
    {
      id: 5,
      title: 'Diabetic Friendly Pack',
      image: 'https://via.placeholder.com/200x180/D4A97E/556B2F?text=Diabetic+Pack'
    },
    {
      id: 6,
      title: 'Celebration Bundle',
      image: 'https://via.placeholder.com/200x180/D4C5B9/556B2F?text=Celebration'
    }
  ];

  return (
    <div className="product-showcase-container">
      <div className="carousel-wrapper">
        <div className="product-carousel">
          {products.concat(products).map((product, index) => (
            <div key={index} className="carousel-item">
              <img src={product.image} alt={product.title} className="product-image" />
              <p className="product-title">{product.title}</p>
              <button className="product-shop-btn">Shop Now</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

