import { Star, MapPin } from 'lucide-react';
import { Product } from './products-data';

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0
    }).format(price);
  };

  return (
    <div className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-shadow overflow-hidden cursor-pointer">
      <div className="aspect-square overflow-hidden bg-gray-100">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
        />
      </div>
      
      <div className="p-4">
        <div className="mb-2">
          <span className="text-xs text-green-600 bg-green-50 px-2 py-1 rounded">
            {product.category}
          </span>
        </div>
        
        <h3 className="mb-2 line-clamp-2 text-gray-800">
          {product.name}
        </h3>
        
        <div className="text-green-600 mb-2">
          {formatPrice(product.price)}
        </div>
        
        <div className="flex items-center gap-4 text-sm text-gray-600 mb-2">
          <div className="flex items-center gap-1">
            <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
            <span>{product.rating}</span>
          </div>
          <div>
            <span>Terjual {product.sold}</span>
          </div>
        </div>
        
        <div className="flex items-center gap-1 text-sm text-gray-500">
          <MapPin className="w-4 h-4" />
          <span className="truncate">{product.location}</span>
        </div>
      </div>
    </div>
  );
}
