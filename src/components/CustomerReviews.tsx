import { useState, useEffect } from 'react';
import './CustomerReviews.css';

interface Review {
  id: number;
  rating: number;
  text: string;
  customerName: string;
  productName: string;
  productImage: string;
  price: string;
}

export const CustomerReviews = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const reviews: Review[] = [
    {
      id: 1,
      rating: 5,
      text: 'Introducing high fiber millets into my meals has been a game-changer; they\'re not only deliciously versatile but also incredibly nutritious. They\'ve become a key part of maintaining my health-focused lifestyle!',
      customerName: 'Kailas Bhat',
      productName: 'High Fibre Millet Mix ...',
      productImage: 'https://via.placeholder.com/60x60?text=Millet+Mix',
      price: 'From Rs. 89',
    },
    {
      id: 2,
      rating: 5,
      text: 'Khakhra of khapli wheat was very nutritious easy to digest. It is better then other wheat khakhra.',
      customerName: 'Esuf Rangwala',
      productName: 'Methi Masala | Khapli...',
      productImage: 'https://via.placeholder.com/60x60?text=Methi+Masala',
      price: 'From Rs. 199',
    },
    {
      id: 3,
      rating: 5,
      text: 'Moong Jor has perfect guilt-free snacking experience. The taste is incredible and so healthy!',
      customerName: 'Arush Gangwani',
      productName: 'High Protein Moong Jor',
      productImage: 'https://via.placeholder.com/60x60?text=Moong+Jor',
      price: 'From Rs. 180',
    },
    {
      id: 4,
      rating: 5,
      text: 'Best quality namkeen I have ever tried. Absolutely fresh and crispy. Highly recommended!',
      customerName: 'Priya Singh',
      productName: 'Best Seller Namkeen',
      productImage: 'https://via.placeholder.com/60x60?text=Namkeen',
      price: 'From Rs. 150',
    },
    {
      id: 5,
      rating: 5,
      text: 'Amazing taste and excellent nutritional value. Worth every rupee spent. Will buy again!',
      customerName: 'Rajesh Patel',
      productName: 'High Fibre Millet Mix',
      productImage: 'https://via.placeholder.com/60x60?text=Millet+Mix',
      price: 'From Rs. 180',
    },
    {
      id: 6,
      rating: 5,
      text: 'Very satisfied with the product quality and fast delivery. Customer service is excellent!',
      customerName: 'Divya Sharma',
      productName: 'Diabetic Snack Box',
      productImage: 'https://via.placeholder.com/60x60?text=Diabetic+Box',
      price: 'From Rs. 250',
    },
  ];

  // Auto-rotation effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === reviews.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // Change review every 5 seconds

    return () => clearInterval(interval);
  }, [reviews.length]);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? reviews.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === reviews.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const renderStars = (rating: number) => {
    return (
      <>
        {[...Array(5)].map((_, i) => (
          <span key={i} className="review-star">
            ★
          </span>
        ))}
      </>
    );
  };

  const currentReview = reviews[currentIndex];
  const prevReview = reviews[currentIndex === 0 ? reviews.length - 1 : currentIndex - 1];
  const nextReview = reviews[currentIndex === reviews.length - 1 ? 0 : currentIndex + 1];

  return (
    <div className="customer-reviews-container">
      <h2 className="reviews-title">What Our Customers Say</h2>

      <div className="reviews-carousel">
        <button className="carousel-nav carousel-nav-prev" onClick={goToPrevious}>
          ❮
        </button>

        <div className="reviews-slider">
          <div className="reviews-track">
            <div className="review-card review-card-prev">
              <div className="review-stars">{renderStars(prevReview.rating)}</div>
              <p className="review-text">{prevReview.text}</p>
              <p className="review-customer">{prevReview.customerName}</p>

              <div className="review-product">
                <img
                  src={prevReview.productImage}
                  alt={prevReview.productName}
                  className="review-product-image"
                />
                <div className="review-product-info">
                  <p className="review-product-name">{prevReview.productName}</p>
                  <p className="review-product-price">{prevReview.price}</p>
                </div>
              </div>
            </div>

            <div className="review-card review-card-current">
              <div className="review-stars">{renderStars(currentReview.rating)}</div>
              <p className="review-text">{currentReview.text}</p>
              <p className="review-customer">{currentReview.customerName}</p>

              <div className="review-product">
                <img
                  src={currentReview.productImage}
                  alt={currentReview.productName}
                  className="review-product-image"
                />
                <div className="review-product-info">
                  <p className="review-product-name">{currentReview.productName}</p>
                  <p className="review-product-price">{currentReview.price}</p>
                </div>
              </div>
            </div>

            <div className="review-card review-card-next">
              <div className="review-stars">{renderStars(nextReview.rating)}</div>
              <p className="review-text">{nextReview.text}</p>
              <p className="review-customer">{nextReview.customerName}</p>

              <div className="review-product">
                <img
                  src={nextReview.productImage}
                  alt={nextReview.productName}
                  className="review-product-image"
                />
                <div className="review-product-info">
                  <p className="review-product-name">{nextReview.productName}</p>
                  <p className="review-product-price">{nextReview.price}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <button className="carousel-nav carousel-nav-next" onClick={goToNext}>
          ❯
        </button>
      </div>

      <div className="carousel-dots">
        {reviews.map((_, index) => (
          <button
            key={index}
            className={`dot ${currentIndex === index ? 'active' : ''}`}
            onClick={() => goToSlide(index)}
          ></button>
        ))}
      </div>
    </div>
  );
};
