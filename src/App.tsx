import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navigation } from './components/Navigation';
import { HomePage } from './components/HomePage';
import { ProductDetailPage } from './components/ProductDetailPage';
import { CartPage } from './components/CartPage';
import { ProfilePage } from './components/ProfilePage';
import { AddProductPage } from './components/AddProductPage';
import { CartProvider } from './components/CartContext';
import { ProductsProvider } from './components/ProductsContext';

export default function App() {
  return (
    <ProductsProvider>
      <CartProvider>
        <Router>
          <div className="min-h-screen bg-gray-50">
            <Navigation />
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/product/:id" element={<ProductDetailPage />} />
              <Route path="/cart" element={<CartPage />} />
              <Route path="/profile" element={<ProfilePage />} />
              <Route path="/add-product" element={<AddProductPage />} />
            </Routes>
          </div>
        </Router>
      </CartProvider>
    </ProductsProvider>
  );
}