import { Link, useLocation } from 'react-router-dom';
import { ShoppingCart, User, Home, Store, Plus } from 'lucide-react';
import { useCart } from './CartContext';

export function Navigation() {
  const location = useLocation();
  const { cart } = useCart();
  const cartItemsCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-2">
            <Store className="w-8 h-8 text-green-600" />
            <span className="text-green-600">Rare Finds</span>
          </Link>

          <div className="flex items-center gap-6">
            <Link
              to="/"
              className={`flex items-center gap-2 transition-colors ${
                isActive('/') ? 'text-green-600' : 'text-gray-600 hover:text-green-600'
              }`}
            >
              <Home className="w-5 h-5" />
              <span>Beranda</span>
            </Link>

            <Link
              to="/add-product"
              className={`flex items-center gap-2 transition-colors ${
                isActive('/add-product') ? 'text-green-600' : 'text-gray-600 hover:text-green-600'
              }`}
            >
              <Plus className="w-5 h-5" />
              <span>Tambah Produk</span>
            </Link>

            <Link
              to="/cart"
              className={`flex items-center gap-2 transition-colors relative ${
                isActive('/cart') ? 'text-green-600' : 'text-gray-600 hover:text-green-600'
              }`}
            >
              <ShoppingCart className="w-5 h-5" />
              <span>Keranjang</span>
              {cartItemsCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {cartItemsCount}
                </span>
              )}
            </Link>

            <Link
              to="/profile"
              className={`flex items-center gap-2 transition-colors ${
                isActive('/profile') ? 'text-green-600' : 'text-gray-600 hover:text-green-600'
              }`}
            >
              <User className="w-5 h-5" />
              <span>Profil</span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}