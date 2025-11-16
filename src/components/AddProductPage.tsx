import { useState, ChangeEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Upload, Image as ImageIcon } from 'lucide-react';
import { Button } from './ui/button';
import { useProducts } from './ProductsContext';

export function AddProductPage() {
  const navigate = useNavigate();
  const { products, addProduct } = useProducts();
  
  const [formData, setFormData] = useState({
    name: '',
    price: '',
    description: '',
    category: 'Fashion',
    seller: '',
    location: '',
    stock: ''
  });
  
  const [imagePreview, setImagePreview] = useState<string>('');
  const [imageUrl, setImageUrl] = useState<string>('');

  const categories = ['Fashion', 'Makanan & Minuman', 'Kerajinan'];

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleImageUrlChange = (e: ChangeEvent<HTMLInputElement>) => {
    const url = e.target.value;
    setImageUrl(url);
    setImagePreview(url);
  };

  const handleImageUpload = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const result = reader.result as string;
        setImagePreview(result);
        setImageUrl(result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Validation
    if (!formData.name || !formData.price || !formData.description || 
        !formData.seller || !formData.location || !formData.stock || !imageUrl) {
      alert('Mohon lengkapi semua field!');
      return;
    }

    const newProduct = {
      id: Math.max(...products.map(p => p.id)) + 1,
      name: formData.name,
      price: Number(formData.price),
      description: formData.description,
      category: formData.category,
      seller: formData.seller,
      location: formData.location,
      image: imageUrl,
      rating: 5.0,
      sold: 0,
      stock: Number(formData.stock)
    };

    addProduct(newProduct);
    alert('Produk berhasil ditambahkan!');
    navigate('/');
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

      <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-md p-8">
        <h1 className="mb-6 text-gray-800">Tambah Produk Baru</h1>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Image Upload */}
          <div>
            <label className="block text-gray-700 mb-2">
              Gambar Produk *
            </label>
            
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
              {imagePreview ? (
                <div className="space-y-4">
                  <img
                    src={imagePreview}
                    alt="Preview"
                    className="w-full h-64 object-cover rounded-lg mx-auto"
                  />
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => {
                      setImagePreview('');
                      setImageUrl('');
                    }}
                  >
                    Hapus Gambar
                  </Button>
                </div>
              ) : (
                <div className="space-y-4">
                  <ImageIcon className="w-16 h-16 text-gray-400 mx-auto" />
                  <p className="text-gray-500">Upload gambar atau masukkan URL</p>
                  
                  {/* File Upload */}
                  <div>
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleImageUpload}
                      className="hidden"
                      id="image-upload"
                    />
                    <label htmlFor="image-upload">
                      <Button
                        type="button"
                        variant="outline"
                        className="gap-2"
                        onClick={() => document.getElementById('image-upload')?.click()}
                      >
                        <Upload className="w-4 h-4" />
                        Upload dari Komputer
                      </Button>
                    </label>
                  </div>

                  {/* URL Input */}
                  <div className="text-gray-500">atau</div>
                  <input
                    type="url"
                    placeholder="Masukkan URL gambar"
                    value={imageUrl}
                    onChange={handleImageUrlChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                  />
                </div>
              )}
            </div>
          </div>

          {/* Product Name */}
          <div>
            <label className="block text-gray-700 mb-2">
              Nama Produk *
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="Contoh: Batik Tulis Solo Premium"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            />
          </div>

          {/* Category */}
          <div>
            <label className="block text-gray-700 mb-2">
              Kategori *
            </label>
            <select
              name="category"
              value={formData.category}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            >
              {categories.map(category => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>

          {/* Price */}
          <div>
            <label className="block text-gray-700 mb-2">
              Harga (Rp) *
            </label>
            <input
              type="number"
              name="price"
              value={formData.price}
              onChange={handleInputChange}
              placeholder="Contoh: 450000"
              min="0"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            />
          </div>

          {/* Stock */}
          <div>
            <label className="block text-gray-700 mb-2">
              Stok *
            </label>
            <input
              type="number"
              name="stock"
              value={formData.stock}
              onChange={handleInputChange}
              placeholder="Contoh: 25"
              min="0"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            />
          </div>

          {/* Description */}
          <div>
            <label className="block text-gray-700 mb-2">
              Deskripsi Produk *
            </label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleInputChange}
              placeholder="Jelaskan detail produk Anda..."
              rows={5}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 resize-none"
              required
            />
          </div>

          {/* Seller Name */}
          <div>
            <label className="block text-gray-700 mb-2">
              Nama Penjual *
            </label>
            <input
              type="text"
              name="seller"
              value={formData.seller}
              onChange={handleInputChange}
              placeholder="Contoh: Batik Nusantara"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            />
          </div>

          {/* Location */}
          <div>
            <label className="block text-gray-700 mb-2">
              Lokasi *
            </label>
            <input
              type="text"
              name="location"
              value={formData.location}
              onChange={handleInputChange}
              placeholder="Contoh: Solo, Jawa Tengah"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            />
          </div>

          {/* Submit Button */}
          <div className="flex gap-4">
            <Button
              type="submit"
              className="flex-1 bg-green-600 hover:bg-green-700"
              size="lg"
            >
              Tambah Produk
            </Button>
            <Button
              type="button"
              variant="outline"
              onClick={() => navigate('/')}
              size="lg"
            >
              Batal
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
