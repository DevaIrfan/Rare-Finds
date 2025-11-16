import { useParams, useNavigate } from 'react-router-dom';
import { Star, MapPin, Package, ShoppingCart, ArrowLeft, Store } from 'lucide-react';
import { useCart } from './CartContext';
import { useProducts } from './ProductsContext';
import { Button } from './ui/button';

export function ProductDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const { products } = useProducts();
  
  const product = products.find((p) => p.id === Number(id));

  if (!product) {
    return (
      <div className="container mx-auto px-4 py-8 text-center">
        <p className="text-gray-500">Produk tidak ditemukan</p>
        <Button onClick={() => navigate('/')} className="mt-4">
          Kembali ke Beranda
        </Button>
      </div>
    );
  }

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0
    }).format(price);
  };

  const handleAddToCart = () => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image
    });
    alert('Produk berhasil ditambahkan ke keranjang!');
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <Button
        variant="ghost"
        onClick={() => navigate('/')}
        className="mb-6 gap-2"
      >
        <ArrowLeft className="w-4 h-4" />
        Kembali
      </Button>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Product Image */}
        <div className="bg-white rounded-xl overflow-hidden shadow-md">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-[500px] object-cover"
          />
        </div>

        {/* Product Info */}
        <div className="bg-white rounded-xl p-6 shadow-md">
          <div className="mb-4">
            <span className="text-sm text-green-600 bg-green-50 px-3 py-1 rounded">
              {product.category}
            </span>
          </div>

          <h1 className="mb-4 text-gray-800">
            {product.name}
          </h1>

          <div className="flex items-center gap-6 mb-6">
            <div className="flex items-center gap-2">
              <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
              <span className="text-gray-700">{product.rating}</span>
            </div>
            <div className="text-gray-600">
              Terjual {product.sold}
            </div>
          </div>

          <div className="text-green-600 mb-6">
            {formatPrice(product.price)}
          </div>

          <div className="border-t border-b border-gray-200 py-6 mb-6 space-y-4">
            <div className="flex items-start gap-3">
              <Store className="w-5 h-5 text-gray-400 mt-1" />
              <div>
                <div className="text-gray-500 text-sm">Penjual</div>
                <div className="text-gray-800">{product.seller}</div>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-gray-400 mt-1" />
              <div>
                <div className="text-gray-500 text-sm">Lokasi</div>
                <div className="text-gray-800">{product.location}</div>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Package className="w-5 h-5 text-gray-400 mt-1" />
              <div>
                <div className="text-gray-500 text-sm">Stok</div>
                <div className="text-gray-800">{product.stock} tersedia</div>
              </div>
            </div>
          </div>

          <Button
            onClick={handleAddToCart}
            className="w-full gap-2 bg-green-600 hover:bg-green-700"
            size="lg"
          >
            <ShoppingCart className="w-5 h-5" />
            Tambah ke Keranjang
          </Button>
        </div>
      </div>

      {/* Product Description */}
      <div className="mt-8 bg-white rounded-xl p-6 shadow-md">
        <h2 className="mb-4 text-gray-800">Deskripsi Produk</h2>
        <p className="text-gray-600 leading-relaxed">{product.description}</p>
      </div>
    </div>
  );
}