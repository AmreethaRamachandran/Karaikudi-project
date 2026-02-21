import './ProductShowcase.css';

export const ProductShowcase = () => {
  const products = [
    {
      id: 1,
      name: 'Protein Rich Khakhra',
      image: 'https://via.placeholder.com/120x120/556B2F/F5F3EE?text=Khakhra',
    },
    {
      id: 2,
      name: 'Festive Collection',
      image: 'https://via.placeholder.com/120x120/708238/F5F3EE?text=Festive',
    },
    {
      id: 3,
      name: 'Taste the Worlds Best Chana Jar Gram',
      image: 'https://via.placeholder.com/120x120/8B6F47/F5F3EE?text=Chana',
    },
    {
      id: 4,
      name: 'Crispy Namkeens',
      image: 'https://via.placeholder.com/120x120/556B2F/F5F3EE?text=Namkeens',
    },
    {
      id: 5,
      name: 'Delicious Snacks Mix',
      image: 'https://via.placeholder.com/120x120/708238/F5F3EE?text=Snacks',
    },
    {
      id: 6,
      name: 'Premium Baked Goods',
      image: 'https://via.placeholder.com/120x120/8B6F47/F5F3EE?text=Baked',
    },
  ];

  return (
    <div className="product-showcase-container">
      <div className="product-showcase-wrapper">
        <div className="product-carousel">
          {products.map((product) => (
            <div key={product.id} className="product-item">
              <img src={product.image} alt={product.name} className="product-image" />
              <p className="product-name">{product.name}</p>
              <button className="shop-btn">Shop Now</button>
            </div>
          ))}
          {/* Duplicate for seamless loop */}
          {products.map((product) => (
            <div key={`${product.id}-duplicate`} className="product-item">
              <img src={product.image} alt={product.name} className="product-image" />
              <p className="product-name">{product.name}</p>
              <button className="shop-btn">Shop Now</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
