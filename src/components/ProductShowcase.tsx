import "./ProductShowcase.css";

export const ProductShowcase = () => {
  const products = [
    { id: 1, title: "Festive Collection", image: "https://via.placeholder.com/200x180/D4C5B9/556B2F?text=Festive+Collection" },
    { id: 2, title: "Taste the Worlds Best Chana Jar Garam", image: "https://via.placeholder.com/200x180/C9B8B0/556B2F?text=Chana+Jar" },
    { id: 3, title: "Protein Rich Khakhra", image: "https://via.placeholder.com/200x180/D9C9BC/556B2F?text=Khakhra" }
  ];

  // duplicate 5 times for safety
  const infiniteProducts = Array(5).fill(products).flat();

  return (
    <div className="product-showcase-container">
      <div className="marquee">
        <div className="marquee-track">
          {infiniteProducts.map((product, index) => (
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