import { useSelector, useDispatch } from 'react-redux';
import { addItem } from '../store/CartSlice';

/* Plant image helper: generates beautiful gradient SVGs with plant emoji */
const makePlantImg = (emoji, gradFrom, gradTo) =>
  `data:image/svg+xml,${encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" width="400" height="300"><defs><linearGradient id="g" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="${gradFrom}"/><stop offset="100%" stop-color="${gradTo}"/></linearGradient></defs><rect width="400" height="300" fill="url(#g)"/><text x="200" y="160" text-anchor="middle" font-size="80">${emoji}</text></svg>`)}`;

const plantsData = [
  {
    category: 'Air Purifying Plants',
    description: 'Breathe cleaner air with these natural purifiers that filter toxins and boost oxygen levels in your home.',
    plants: [
      { id: 'ap1', name: 'Snake Plant', description: 'Hardy and elegant, thrives in low light. One of NASA\'s top air-purifying plants.', cost: 15, image: makePlantImg('🪴', '#1a3a2a', '#2d5a3f') },
      { id: 'ap2', name: 'Peace Lily', description: 'Beautiful white blooms that purify air and thrive in shade. Perfect for bedrooms.', cost: 22, image: makePlantImg('🌸', '#2a1a3a', '#4a2d5a') },
      { id: 'ap3', name: 'Spider Plant', description: 'Fast-growing cascading foliage. Removes formaldehyde and xylene from indoor air.', cost: 12, image: makePlantImg('🌿', '#1a2a1a', '#2d4a2d') },
      { id: 'ap4', name: 'Boston Fern', description: 'Lush, feathery fronds that act as a natural humidifier and air purifier.', cost: 18, image: makePlantImg('🌾', '#1a3a1a', '#3a5a2d') },
      { id: 'ap5', name: 'Rubber Plant', description: 'Bold, glossy dark leaves. Low maintenance and excellent at removing toxins.', cost: 25, image: makePlantImg('🌳', '#1a2a2a', '#2d4a4a') },
      { id: 'ap6', name: 'Pothos', description: 'Trailing vine with heart-shaped leaves. Nearly indestructible and air-cleaning.', cost: 10, image: makePlantImg('🍃', '#1a3a2a', '#2d5a4a') },
    ],
  },
  {
    category: 'Succulents',
    description: 'Low-maintenance beauties that store water in their leaves. Perfect for busy plant parents and sunny windowsills.',
    plants: [
      { id: 'su1', name: 'Echeveria', description: 'Rosette-shaped succulent with pastel-colored leaves. A stunning desk companion.', cost: 9, image: makePlantImg('🌵', '#3a2a1a', '#5a4a2d') },
      { id: 'su2', name: 'Jade Plant', description: 'Symbolizes prosperity and luck. Thick, oval leaves on woody stems.', cost: 14, image: makePlantImg('💎', '#1a3a1a', '#2d5a2d') },
      { id: 'su3', name: 'Aloe Vera', description: 'Medicinal wonder plant with soothing gel. Also purifies air naturally.', cost: 11, image: makePlantImg('🪴', '#1a3a2a', '#3a5a3a') },
      { id: 'su4', name: 'Haworthia', description: 'Compact zebra-striped succulent. Perfect for small spaces and terrariums.', cost: 8, image: makePlantImg('🌱', '#2a2a1a', '#4a4a2d') },
      { id: 'su5', name: 'String of Pearls', description: 'Cascading strands of bead-like leaves. A mesmerizing trailing succulent.', cost: 16, image: makePlantImg('📿', '#1a2a3a', '#2d4a5a') },
      { id: 'su6', name: 'Burro\'s Tail', description: 'Trailing succulent with plump, blue-green leaves. Stunning in hanging baskets.', cost: 13, image: makePlantImg('🌿', '#2a3a1a', '#4a5a2d') },
    ],
  },
  {
    category: 'Flowering Plants',
    description: 'Add vibrant colors and delightful fragrances to your space with these beautiful blooming houseplants.',
    plants: [
      { id: 'fl1', name: 'Orchid', description: 'Exotic elegance with long-lasting blooms. The crown jewel of indoor flowers.', cost: 30, image: makePlantImg('🌺', '#3a1a2a', '#5a2d4a') },
      { id: 'fl2', name: 'African Violet', description: 'Compact beauty with velvety purple flowers. Blooms year-round with proper care.', cost: 12, image: makePlantImg('💜', '#2a1a3a', '#4a2d5a') },
      { id: 'fl3', name: 'Anthurium', description: 'Glossy heart-shaped red spathes. Adds a tropical flair to any room.', cost: 28, image: makePlantImg('❤️', '#3a1a1a', '#5a2d2d') },
      { id: 'fl4', name: 'Bromeliad', description: 'Striking tropical plant with vibrant flower spikes that last for months.', cost: 20, image: makePlantImg('🌼', '#3a3a1a', '#5a5a2d') },
      { id: 'fl5', name: 'Jasmine', description: 'Intoxicating sweet fragrance with delicate white star-shaped blooms.', cost: 24, image: makePlantImg('⭐', '#1a2a2a', '#2d4a4a') },
      { id: 'fl6', name: 'Hibiscus', description: 'Large, showy tropical flowers in vibrant reds and pinks. A real showstopper.', cost: 26, image: makePlantImg('🌷', '#3a1a2a', '#5a2d3a') },
    ],
  },
];





function ProductList() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.cartItems);

  const isInCart = (id) => cartItems.some((item) => item.id === id);

  const handleAddToCart = (plant) => {
    dispatch(addItem(plant));
  };

  return (
    <div className="product-page">
      <div className="product-header">
        <h1 id="product-page-title">Our Plant Collection</h1>
        <p className="product-header-text">
          Discover the perfect green companion for every corner of your home
        </p>
      </div>

      {plantsData.map((category) => (
        <section key={category.category} className="category-section">
          <div className="category-header">
            <h2 className="category-title">{category.category}</h2>
            <p className="category-description">{category.description}</p>
          </div>
          <div className="plants-grid">
            {category.plants.map((plant) => (
              <div key={plant.id} className="plant-card" id={`plant-${plant.id}`}>
                <div className="plant-image-wrapper">
                  <img
                    src={plant.image}
                    alt={plant.name}
                    className="plant-image"
                    loading="lazy"
                  />
                  <div className="plant-price-tag">${plant.cost}</div>
                </div>
                <div className="plant-info">
                  <h3 className="plant-name">{plant.name}</h3>
                  <p className="plant-description">{plant.description}</p>
                  <button
                    className={`add-to-cart-btn ${isInCart(plant.id) ? 'added' : ''}`}
                    onClick={() => handleAddToCart(plant)}
                    disabled={isInCart(plant.id)}
                    id={`add-btn-${plant.id}`}
                  >
                    {isInCart(plant.id) ? (
                      <>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="20 6 9 17 4 12"/>
                        </svg>
                        Added to Cart
                      </>
                    ) : (
                      <>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <circle cx="9" cy="21" r="1"/>
                          <circle cx="20" cy="21" r="1"/>
                          <path d="M1 1h4l2.68 13.39a2 2 0 002 1.61h9.72a2 2 0 002-1.61L23 6H6"/>
                        </svg>
                        Add to Cart
                      </>
                    )}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}

export default ProductList;
