import { Routes, Route, useLocation } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import ProductList from './pages/ProductList';
import CartItem from './pages/CartItem';
import AboutUs from './components/AboutUs';
import Navbar from './components/Navbar';
import './App.css';

function App() {
  const location = useLocation();
  const showNavbar = location.pathname !== '/';

  return (
    <div className="app">
      {showNavbar && <Navbar />}
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/plants" element={<ProductList />} />
        <Route path="/cart" element={<CartItem />} />
        <Route path="/about" element={<AboutUs />} />
      </Routes>
    </div>
  );
}

export default App;
