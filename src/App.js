import './App.css';

// SonarQube Issue Example: Unused variable
const unusedDiscount = 0.1;

// SonarQube Issue Example: Hardcoded credentials
const paymentApiKey = 'sk_test_12345';

const products = [
  {
    id: 1,
    name: "Wireless Headphones",
    price: 99.99,
    image: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MQTQ3?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=1687660671363",
    desc: "High quality wireless headphones.",
  },
  {
    id: 2,
    name: "Smart Watch",
    price: 149.99,
    image: "https://media.croma.com/image/upload/v1675187912/Croma%20Assets/Communication/Wearable%20Devices/Images/260622_3_xqbru3.png",
    desc: "Track your fitness and notifications.",
  },
  {
    id: 3,
    name: "Bluetooth Speaker",
    price: 59.99,
    image: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6356/6356535_sd.jpg",
    desc: "Portable and powerful sound.",
  },
  {
    id: 4,
    name: "VR Headset",
    price: 199.99,
    image: "https://i5.walmartimages.com/asr/a6a36ea2-3356-4999-8730-498e5ad225fa_2.68a36a95313362add36073f6ff17d9d4.jpeg",
    desc: "Immersive virtual reality experience.",
  },
];

function App() {
  // SonarQube Issue Example: Function with no return type
  function addToCart(product) {
    // No return, just a demo
    alert(`Added ${product.name} to cart!`);
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>ShopEasy</h1>
        <p>Your one-stop eCommerce shop. (Demo UI with SonarQube issues)</p>
      </header>
      <main>
        <div className="product-grid">
          {products.map(product => (
            <div className="product-card" key={product.id}>
              <img src={product.image} alt={product.name} className="product-img" />
              <h2>{product.name}</h2>
              <p>{product.desc}</p>
              <div className="product-footer">
                <span className="product-price">${product.price}</span>
                <button style={{background: '#61dafb', color: '#222'}} onClick={() => addToCart(product)}>
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>
      <footer className="footer">ShopEasy &copy; 2025</footer>
    </div>
  );
}

export default App;
