import { useState } from 'react';
import './BundleShowcase.css';

interface Bundle {
  id: number;
  name: string;
  image: string;
  rating: number;
  reviews: number;
  originalPrice: number;
  discountedPrice: number;
  savingPercentage: number;
}

export const BundleShowcase = () => {
  const [quantities, setQuantities] = useState<{ [key: number]: number }>({});

  const bundles: Bundle[] = [
    {
      id: 1,
      name: 'Best Seller Namkeen | Bundle',
      image: 'https://via.placeholder.com/250x250?text=Namkeen+Bundle',
      rating: 5,
      reviews: 67,
      originalPrice: 890,
      discountedPrice: 829,
      savingPercentage: 7,
    },
    {
      id: 2,
      name: 'Diabetic Snack Box | Bundle',
      image: 'https://via.placeholder.com/250x250?text=Diabetic+Box',
      rating: 5,
      reviews: 136,
      originalPrice: 1137,
      discountedPrice: 1059,
      savingPercentage: 7,
    },
    {
      id: 3,
      name: 'High Protein Snack | Bundle',
      image: 'https://via.placeholder.com/250x250?text=High+Protein',
      rating: 5,
      reviews: 98,
      originalPrice: 1110,
      discountedPrice: 1039,
      savingPercentage: 7,
    },
    {
      id: 4,
      name: 'Taste Of Svasthyaa | Bundle',
      image: 'https://via.placeholder.com/250x250?text=Taste+Bundle',
      rating: 5,
      reviews: 88,
      originalPrice: 1535,
      discountedPrice: 1379,
      savingPercentage: 10,
    },
  ];

  const handleQuantityChange = (bundleId: number, delta: number) => {
    setQuantities((prev) => ({
      ...prev,
      [bundleId]: Math.max(1, (prev[bundleId] || 1) + delta),
    }));
  };

  const renderStars = (rating: number) => {
    return (
      <>
        {[...Array(rating)].map((_, i) => (
          <span key={i}>★</span>
        ))}
      </>
    );
  };

  return (
    <div className="bundle-showcase-container">
      <h2 className="bundle-showcase-title">Bundles That Match Your Goals</h2>
      <div className="bundle-grid">
        {bundles.map((bundle) => (
          <div key={bundle.id} className="bundle-card">
            <div className="bundle-image-container">
              {bundle.savingPercentage > 0 && (
                <div className="save-badge">Save {bundle.savingPercentage}%</div>
              )}
              <img src={bundle.image} alt={bundle.name} className="bundle-image" />
            </div>
            <div className="bundle-rating">
              <span className="stars">{renderStars(bundle.rating)}</span>
              <span className="review-count">({bundle.reviews})</span>
            </div>
            <h3 className="bundle-name">{bundle.name}</h3>
            <div className="bundle-pricing">
              <span className="original-price">₹ {bundle.originalPrice}</span>
              <span className="discounted-price">₹ {bundle.discountedPrice}</span>
            </div>
            <div className="bundle-quantity">
              <button
                className="qty-btn"
                onClick={() => handleQuantityChange(bundle.id, -1)}
              >
                −
              </button>
              <span className="qty-value">{quantities[bundle.id] || 1}</span>
              <button
                className="qty-btn"
                onClick={() => handleQuantityChange(bundle.id, 1)}
              >
                +
              </button>
            </div>
            <button className="add-to-cart-btn">Add to cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};
