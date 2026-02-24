import { useState } from 'react';
import './ShopByCategory.css';

interface Product {
  id: number;
  name: string;
  image: string;
  rating: number;
  reviews: number;
  price: number;
  weights: string[];
  category: string;
}

interface Category {
  id: number;
  name: string;
  icon: string;
}

export const ShopByCategory = () => {
  const [quantities, setQuantities] = useState<{ [key: number]: number }>({});
  const [selectedWeights, setSelectedWeights] = useState<{ [key: number]: string }>({});

  const categories: Category[] = [
    { id: 1, name: 'Namkeen', icon: '🥣' },
    { id: 2, name: 'Khakhra', icon: '😊' },
    { id: 3, name: 'Snacks', icon: '🌾' },
  ];

  const products: Product[] = [
    {
      id: 1,
      name: 'Worlds Best Chana Jor Garam | Namkeen',
      image: 'https://via.placeholder.com/280x280?text=Chana+Jor+Garam',
      rating: 5,
      reviews: 455,
      price: 180,
      weights: ['200 Gm', '300 Gm', '500 Gm'],
      category: 'Namkeen',
    },
    {
      id: 2,
      name: 'High Fibre Millet Mix | Namkeen',
      image: 'https://via.placeholder.com/280x280?text=Millet+Mix',
      rating: 4,
      reviews: 75,
      price: 180,
      weights: ['185 Gms', '250 Gms', '400 Gms'],
      category: 'Namkeen',
    },
    {
      id: 3,
      name: 'High Protein Moong Jor | Namkeen',
      image: 'https://via.placeholder.com/280x280?text=Moong+Jor',
      rating: 4,
      reviews: 48,
      price: 180,
      weights: ['200 Gms', '300 Gms', '500 Gms'],
      category: 'Namkeen',
    },
    {
      id: 4,
      name: 'चना जोर गरम | Svasthyaa',
      image: 'https://via.placeholder.com/280x280?text=Chana+Jor',
      rating: 5,
      reviews: 1,
      price: 180,
      weights: ['200 Gm', '300 Gm', '500 Gm'],
      category: 'Namkeen',
    },
  ];

  const handleQuantityChange = (productId: number, delta: number) => {
    setQuantities((prev) => ({
      ...prev,
      [productId]: Math.max(1, (prev[productId] || 1) + delta),
    }));
  };

  const handleWeightChange = (productId: number, weight: string) => {
    setSelectedWeights((prev) => ({
      ...prev,
      [productId]: weight,
    }));
  };

  const renderStars = (rating: number) => {
    return (
      <>
        {[...Array(5)].map((_, i) => (
          <span key={i} className={i < rating ? 'star-filled' : 'star-empty'}>
            ★
          </span>
        ))}
      </>
    );
  };

  return (
    <div className="shop-by-category-container">
      <h2 className="category-title">Shop by Category</h2>

      {/* Category Pills */}
      <div className="category-pills">
        {categories.map((category) => (
          <div key={category.id} className="category-pill">
            <div className="category-icon">{category.icon}</div>
            <div className="category-name">{category.name}</div>
          </div>
        ))}
      </div>

      {/* Products Grid */}
      <div className="products-grid">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <div className="product-image-container">
              <img src={product.image} alt={product.name} className="product-image" />
            </div>

            <div className="product-rating">
              <span className="stars">{renderStars(product.rating)}</span>
              <span className="review-count">({product.reviews})</span>
            </div>

            <h3 className="product-name">{product.name}</h3>

            <div className="product-price">
              <span>Rs. {product.price}</span>
            </div>

            <div className="weight-selector">
              <label>Weight</label>
              <select
                value={selectedWeights[product.id] || product.weights[0]}
                onChange={(e) => handleWeightChange(product.id, e.target.value)}
                className="weight-dropdown"
              >
                {product.weights.map((weight) => (
                  <option key={weight} value={weight}>
                    {weight}
                  </option>
                ))}
              </select>
            </div>

            <div className="product-quantity">
              <button
                className="qty-btn"
                onClick={() => handleQuantityChange(product.id, -1)}
              >
                −
              </button>
              <span className="qty-value">{quantities[product.id] || 1}</span>
              <button
                className="qty-btn"
                onClick={() => handleQuantityChange(product.id, 1)}
              >
                +
              </button>
            </div>

            <button className="add-to-cart-btn">Add to cart</button>
          </div>
        ))}
      </div>

      <div className="view-all-container">
        <a href="#" className="view-all-link">View all products »</a>
      </div>
    </div>
  );
};
