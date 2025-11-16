import { User, Mail, Hash, Users } from 'lucide-react';

export function ProfilePage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="mb-8 text-gray-800">Profil Pengguna</h1>

        <div className="bg-white rounded-xl shadow-md overflow-hidden">
          {/* Profile Header */}
          <div className="bg-gradient-to-r from-green-600 to-green-700 p-8 text-center">
            <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
              <User className="w-12 h-12 text-green-600" />
            </div>
            <h2 className="text-white mb-1">Caesar Deva Irfan Putra</h2>
            <p className="text-green-100">Member Pasar Lokal</p>
          </div>

          {/* Profile Details */}
          <div className="p-8 space-y-6">
            <div className="flex items-start gap-4 pb-6 border-b border-gray-200">
              <div className="p-3 bg-green-50 rounded-lg">
                <User className="w-6 h-6 text-green-600" />
              </div>
              <div className="flex-1">
                <div className="text-sm text-gray-500 mb-1">Nama Lengkap</div>
                <div className="text-gray-800">Caesar Deva Irfan Putra</div>
              </div>
            </div>

            <div className="flex items-start gap-4 pb-6 border-b border-gray-200">
              <div className="p-3 bg-green-50 rounded-lg">
                <Hash className="w-6 h-6 text-green-600" />
              </div>
              <div className="flex-1">
                <div className="text-sm text-gray-500 mb-1">NIM</div>
                <div className="text-gray-800">21120123130062</div>
              </div>
            </div>

            <div className="flex items-start gap-4 pb-6 border-b border-gray-200">
              <div className="p-3 bg-green-50 rounded-lg">
                <Users className="w-6 h-6 text-green-600" />
              </div>
              <div className="flex-1">
                <div className="text-sm text-gray-500 mb-1">Kelompok</div>
                <div className="text-gray-800">5</div>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-3 bg-green-50 rounded-lg">
                <Mail className="w-6 h-6 text-green-600" />
              </div>
              <div className="flex-1">
                <div className="text-sm text-gray-500 mb-1">Shift</div>
                <div className="text-gray-800">1</div>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-8 bg-white rounded-xl p-6 shadow-md">
          <h3 className="mb-4 text-gray-800">Tentang Aplikasi</h3>
          <p className="text-gray-600 leading-relaxed">
            Pasar Lokal adalah platform marketplace yang menghubungkan pembeli dengan penjual produk-produk lokal berkualitas dari berbagai daerah di Indonesia. 
            Aplikasi ini dibuat menggunakan React, Tailwind CSS, dan Vite sebagai bagian dari tugas kelompok.
          </p>
        </div>
      </div>
    </div>
  );
}
