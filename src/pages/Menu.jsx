import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Search } from 'lucide-react';
import SEO from "../components/SEO";
import sandwichkebab from "../assets/sandwich-kebab.jpeg";
import lebanesKebab from "../assets/lebanese-kebab.jpeg";
import burgerkebab from "../assets/burger-kebab.jpeg";
import hotdough from "../assets/hotdog-kebab.jpeg";
    
const Menu = () => {
  const [searchParams] = useSearchParams();
  const [selectedCategory, setSelectedCategory] = useState(searchParams.get('category') || 'all');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = [
    { id: 'all', name: 'Semua Menu' },
    { id: 'kebab', name: 'Kebab' },
    { id: 'burger', name: 'Burger' },
    { id: 'hotdough', name: 'Hotdough' },
    // { id: 'minuman', name: 'Minuman' },
    // { id: 'dessert', name: 'Dessert' }
  ];

  const menuItems = [
    // Kebab
    { id: 1, name: 'Sandwich Kebab', category: 'kebab', price: 25000, image: sandwichkebab, description: 'Kebab daging domba dengan bumbu khas Lebanon' },
    { id: 2, name: 'Lebanese Kebab', category: 'kebab', price: 22000, image: lebanesKebab, description: 'Kebab ayam dengan sambal pedas' },
    
    // Burger
    { id: 5, name: 'Lebanese Burger', category: 'burger', price: 30000, image: burgerkebab, description: 'Burger khas Lebanon dengan patty daging sapi' },

    // Hotdough
    { id: 6, name: 'Hotdough', category: 'hotdough', price: 20000, image: hotdough, description: 'Hotdough khas Lebanon dengan patty daging sapi' },
  ];

  const filteredItems = menuItems.filter(item => {
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  useEffect(() => {
    const category = searchParams.get('category');
    if (category) {
      setSelectedCategory(category);
    }
  }, [searchParams]);



  return (
    <>
      <SEO 
        title="Menu Kebab"
        description="Lihat menu lengkap Sultan Lebanese Kebab: Sandwich Kebab, Lebanese Kebab, Burger Kebab, Hotdog Kebab. Harga terjangkau, rasa autentik Lebanon. Pesan online via WhatsApp: 0813-4538-3331"
        keywords="menu kebab lebanon, sandwich kebab, lebanese kebab, burger kebab, hotdog kebab, harga kebab balikpapan, menu sultan lebanese kebab"
        url="https://sultanlebanesekebab.com/menu"
      />
      <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-700 to-primary-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Menu <span className="text-secondary-300">Sultan Lebanese Kebab</span>
            </h1>
            <p className="text-xl md:text-2xl">
              Enaknya sampai gulungan terakhir

            </p>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              {categories.map(category => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-full font-medium transition-colors ${
                    selectedCategory === category.id
                      ? 'bg-secondary-500 text-white'
                      : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>

            {/* Search Bar */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="text"
                placeholder="Cari menu..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary-500 focus:border-transparent"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Menu Items */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredItems.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-xl text-gray-600">Tidak ada menu yang ditemukan</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredItems.map(item => (
                <div key={item.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                  <img 
                    src={item.image} 
                    alt={item.name}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-lg font-semibold text-primary-700 mb-2">{item.name}</h3>
                    <p className="text-gray-600 text-sm mb-4">{item.description}</p>
                    <div className="flex justify-between items-center">
                      {/* <span className="text-2xl font-bold text-secondary-600">
                        {formatPrice(item.price)}
                      </span> */}
                      <a 
                        href="https://wa.me/6281345383331" 
                        className="bg-secondary-500 hover:bg-secondary-600 text-white px-4 py-2 rounded-lg font-medium transition-colors inline-block"
                      >
                        Pesan
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Special Offers */}
      {/* <section className="py-16 bg-primary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-700 mb-4">
              Paket <span className="text-secondary-500">Hemat</span>
            </h2>
            <p className="text-lg text-gray-600">
              Nikmati paket hemat dengan harga spesial
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold text-primary-700 mb-4">Paket Solo</h3>
              <ul className="text-gray-600 mb-4 space-y-2">
                <li>• 1 Kebab Pilihan</li>
                <li>• 1 Minuman</li>
                <li>• Kentang Goreng</li>
              </ul>
              <div className="flex items-center justify-between">
                <span className="text-2xl font-bold text-secondary-600">Rp 35.000</span>
                <button className="bg-secondary-500 hover:bg-secondary-600 text-white px-4 py-2 rounded-lg font-medium transition-colors">
                  Pesan
                </button>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6 border-2 border-secondary-500">
              <div className="bg-secondary-500 text-white text-center py-1 px-3 rounded-full text-sm font-medium mb-4 inline-block">
                Terlaris
              </div>
              <h3 className="text-xl font-bold text-primary-700 mb-4">Paket Duo</h3>
              <ul className="text-gray-600 mb-4 space-y-2">
                <li>• 2 Kebab Pilihan</li>
                <li>• 2 Minuman</li>
                <li>• Kentang Goreng Besar</li>
                <li>• 1 Dessert</li>
              </ul>
              <div className="flex items-center justify-between">
                <span className="text-2xl font-bold text-secondary-600">Rp 65.000</span>
                <button className="bg-secondary-500 hover:bg-secondary-600 text-white px-4 py-2 rounded-lg font-medium transition-colors">
                  Pesan
                </button>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold text-primary-700 mb-4">Paket Keluarga</h3>
              <ul className="text-gray-600 mb-4 space-y-2">
                <li>• 4 Kebab Pilihan</li>
                <li>• 4 Minuman</li>
                <li>• 2 Kentang Goreng</li>
                <li>• 2 Dessert</li>
              </ul>
              <div className="flex items-center justify-between">
                <span className="text-2xl font-bold text-secondary-600">Rp 120.000</span>
                <button className="bg-secondary-500 hover:bg-secondary-600 text-white px-4 py-2 rounded-lg font-medium transition-colors">
                  Pesan
                </button>
              </div>
            </div>
          </div>
        </div>
      </section> */}
    </div>
    </>
  );
};

export default Menu;