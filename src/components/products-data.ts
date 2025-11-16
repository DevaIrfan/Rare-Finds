export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  category: string;
  seller: string;
  location: string;
  image: string;
  rating: number;
  sold: number;
  stock: number;
}

export const products: Product[] = [
  {
    id: 1,
    name: 'Batik Tulis Solo Premium',
    price: 450000,
    description: 'Batik tulis asli Solo dengan motif tradisional yang indah. Dikerjakan oleh pengrajin berpengalaman dengan kualitas terbaik. Cocok untuk acara formal maupun kasual.',
    category: 'Fashion',
    seller: 'Batik Nusantara',
    location: 'Solo, Jawa Tengah',
    image: 'https://images.unsplash.com/photo-1622519407650-3df9883f76a5?w=800&q=80',
    rating: 4.8,
    sold: 156,
    stock: 25
  },
  {
    id: 2,
    name: 'Kopi Arabica Gayo Premium',
    price: 125000,
    description: 'Kopi arabica premium dari dataran tinggi Gayo, Aceh. Memiliki cita rasa yang khas dengan aroma yang harum. Kemasan 500 gram biji kopi pilihan.',
    category: 'Makanan & Minuman',
    seller: 'Gayo Coffee House',
    location: 'Aceh',
    image: 'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=800&q=80',
    rating: 4.9,
    sold: 342,
    stock: 50
  },
  {
    id: 3,
    name: 'Keramik Dinoyo Handmade',
    price: 85000,
    description: 'Keramik handmade dari Dinoyo, Malang. Cocok untuk dekorasi rumah atau sebagai wadah penyimpanan. Setiap produk unik dan dibuat dengan tangan.',
    category: 'Kerajinan',
    seller: 'Dinoyo Craft',
    location: 'Malang, Jawa Timur',
    image: 'https://images.unsplash.com/photo-1578500494198-246f612d3b3d?w=800&q=80',
    rating: 4.7,
    sold: 89,
    stock: 30
  },
  {
    id: 4,
    name: 'Madu Hutan Sumbawa Asli',
    price: 175000,
    description: 'Madu hutan murni dari Sumbawa dengan khasiat yang luar biasa. Dikemas higienis dalam botol 500ml. Tidak ada campuran gula atau bahan lainnya.',
    category: 'Makanan & Minuman',
    seller: 'Sumbawa Honey',
    location: 'Sumbawa, NTB',
    image: 'https://images.unsplash.com/photo-1587049352846-4a222e784d38?w=800&q=80',
    rating: 4.9,
    sold: 234,
    stock: 40
  },
  {
    id: 5,
    name: 'Tas Rotan Lombok Handmade',
    price: 225000,
    description: 'Tas rotan anyaman tangan dari Lombok dengan desain modern dan elegan. Cocok untuk berbagai acara dan kegiatan sehari-hari. Kuat dan tahan lama.',
    category: 'Fashion',
    seller: 'Lombok Rattan',
    location: 'Lombok, NTB',
    image: 'https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=800&q=80',
    rating: 4.6,
    sold: 127,
    stock: 18
  },
  {
    id: 6,
    name: 'Sambal Roa Khas Manado',
    price: 75000,
    description: 'Sambal roa asli Manado dengan rasa pedas gurih yang khas. Terbuat dari ikan roa asap dan bumbu pilihan. Kemasan 200 gram siap santap.',
    category: 'Makanan & Minuman',
    seller: 'Manado Spice',
    location: 'Manado, Sulawesi Utara',
    image: 'https://images.unsplash.com/photo-1626079805708-abb6e25e9c87?w=800&q=80',
    rating: 4.8,
    sold: 445,
    stock: 60
  },
  {
    id: 7,
    name: 'Wayang Kulit Yogyakarta',
    price: 650000,
    description: 'Wayang kulit asli buatan pengrajin Yogyakarta. Bisa digunakan untuk pertunjukan atau sebagai hiasan dinding. Tinggi 60cm dengan detail ukiran yang indah.',
    category: 'Kerajinan',
    seller: 'Jogja Heritage',
    location: 'Yogyakarta',
    image: 'https://images.unsplash.com/photo-1582555172866-f73bb12a2ab3?w=800&q=80',
    rating: 4.9,
    sold: 43,
    stock: 8
  },
  {
    id: 8,
    name: 'Sarung Tenun Samarinda',
    price: 320000,
    description: 'Sarung tenun tradisional dari Samarinda dengan motif khas Kalimantan. Dibuat dari bahan berkualitas dengan pewarnaan alami. Nyaman digunakan.',
    category: 'Fashion',
    seller: 'Tenun Borneo',
    location: 'Samarinda, Kalimantan Timur',
    image: 'https://images.unsplash.com/photo-1603220430785-822acfbc4263?w=800&q=80',
    rating: 4.7,
    sold: 78,
    stock: 22
  }
];
