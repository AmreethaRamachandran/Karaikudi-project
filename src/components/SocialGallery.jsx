import './SocialGallery.css';

export const SocialGallery = () => {
  const galleryItems = [
    {
      id: 1,
      image: 'https://via.placeholder.com/600x300?text=Follow+us+on+Instagram',
      title: 'Follow us on Instagram',
      handle: '@svasthyaaorganics',
      isFeature: true,
    },
    {
      id: 2,
      videoUrl: 'https://via.placeholder.com/300x300?text=Video+1',
    },
    {
      id: 3,
      videoUrl: 'https://via.placeholder.com/300x300?text=Video+2',
    },
    {
      id: 4,
      videoUrl: 'https://via.placeholder.com/300x300?text=Video+3',
    },
    {
      id: 5,
      videoUrl: 'https://via.placeholder.com/300x300?text=Video+4',
    },
    {
      id: 6,
      videoUrl: 'https://via.placeholder.com/300x300?text=Video+5',
    },
    {
      id: 7,
      videoUrl: 'https://via.placeholder.com/300x300?text=Video+6',
    },
    {
      id: 8,
      videoUrl: 'https://via.placeholder.com/300x300?text=Video+7',
    },
  ];

  return (
    <div className="social-gallery-container">
      <h2 className="gallery-title">Social Gallery</h2>

      <div className="gallery-grid">
        {galleryItems.map((item) => (
          <div
            key={item.id}
            className={`gallery-item ${item.isFeature ? 'gallery-item-feature' : ''}`}
          >
            {item.isFeature ? (
              <>
                <img src={item.image} alt={item.title || 'Gallery'} className="gallery-image" />
                <div className="gallery-overlay">
                  <div className="gallery-content">
                    <h3 className="gallery-text">{item.title}</h3>
                    <div className="gallery-handle">{item.handle}</div>
                  </div>
                </div>
              </>
            ) : (
              <img src={item.videoUrl} alt="Video" className="gallery-image" />
            )}
          </div>
        ))}
      </div>

      <div className="gallery-cta">
        <a href="https://instagram.com/svasthyaaorganics" target="_blank" rel="noopener noreferrer" className="follow-button">
          Follow on Instagram
        </a>
      </div>
    </div>
  );
};
