import './ProductCategories.css';

export const ProductCategories = () => {
  const categories = [
    {
      id: 1,
      name: 'Namkeens',
      image: 'https://via.placeholder.com/150?text=Namkeens',
    },
    {
      id: 2,
      name: 'Khakhras',
      image: 'https://via.placeholder.com/150?text=Khakhras',
    },
    {
      id: 3,
      name: 'Bundles',
      image: 'https://via.placeholder.com/150?text=Bundles',
    },
    {
      id: 4,
      name: 'Diabetic Friendly',
      image: 'https://via.placeholder.com/150?text=Diabetic+Friendly',
    },
  ];

  return (
    <section className="product-categories">
      <div className="container">
        <div className="categories-grid">
          {categories.map((category) => (
            <div key={category.id} className="category-card">
              <div className="category-image-wrapper">
                <img
                  src={category.image}
                  alt={category.name}
                  className="category-image"
                />
              </div>
              <h3 className="category-name">{category.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
