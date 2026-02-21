import { useState } from 'react';
import './Banner.css';

export const Banner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const banners = [
    {
      id: 1,
      title: 'Fresh Artisan Breads',
      description: 'Handcrafted daily with premium ingredients',
      image: 'https://via.placeholder.com/1200x400/556B2F/F5F3EE?text=Fresh+Breads',
      color: '#556B2F'
    },
    {
      id: 2,
      title: 'Premium Cakes & Pastries',
      description: 'Celebrate every moment with our delicious creations',
      image: 'https://via.placeholder.com/1200x400/708238/F5F3EE?text=Cakes+Pastries',
      color: '#708238'
    },
    {
      id: 3,
      title: 'Holiday Specials',
      description: 'Limited time offers on our exclusive collection',
      image: 'https://via.placeholder.com/1200x400/8B6F47/F5F3EE?text=Holiday+Specials',
      color: '#8B6F47'
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % banners.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + banners.length) % banners.length);
  };

  const banner = banners[currentSlide];

  return (
    <>
      {/* WhatsApp Icon - Fixed */}
      <a href="https://wa.me/918000000000" target="_blank" rel="noopener noreferrer" className="whatsapp-icon">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004a9.87 9.87 0 00-4.867 1.167l-.348.205-.36-.054c-1.186-.164-2.292.023-3.221.822-.929.799-1.436 1.954-1.436 3.146 0 1.254.505 2.596 1.775 3.763 1.27 1.166 2.985 1.799 4.827 1.799 1.272 0 2.504-.333 3.614-.96l.338-.188.36.053c1.187.164 2.293-.023 3.221-.822.929-.799 1.436-1.954 1.436-3.146 0-1.254-.505-2.596-1.775-3.763-1.27-1.166-2.985-1.799-4.827-1.799z"/>
        </svg>
      </a>

      {/* Banner Carousel */}
      <div className="banner-container">
        <div className="banner-carousel">
          <div 
            className="banner-slide"
            style={{
              backgroundImage: `url('${banner.image}')`,
              backgroundColor: banner.color
            }}
          >
            <div className="banner-overlay"></div>
            <div className="banner-content">
              <h2 className="banner-title">{banner.title}</h2>
              <p className="banner-description">{banner.description}</p>
              <button className="shop-now-btn">Shop Now</button>
            </div>
          </div>

          {/* Navigation Arrows */}
          <button 
            className="banner-nav prev-btn"
            onClick={prevSlide}
            aria-label="Previous slide"
          >
            ❮
          </button>
          <button 
            className="banner-nav next-btn"
            onClick={nextSlide}
            aria-label="Next slide"
          >
            ❯
          </button>

          {/* Slide Indicators */}
          <div className="banner-indicators">
            {banners.map((_, index) => (
              <button
                key={index}
                className={`indicator ${index === currentSlide ? 'active' : ''}`}
                onClick={() => setCurrentSlide(index)}
                aria-label={`Go to slide ${index + 1}`}
              ></button>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
