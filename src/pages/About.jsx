import { Award, Users, Clock, Heart } from 'lucide-react';
import SEO from "../components/SEO";
import logoClear from "../assets/logo-clean.png";

const About = () => {
  const aboutStructuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Sultan Lebanese Kebab",
    "description": "Restoran kebab autentik Lebanon di Indonesia yang didirikan pada tahun 2021. Menyajikan cita rasa asli Lebanon dengan bahan berkualitas halal.",
    "url": "https://sultanlebanesekebab.com",
    "logo": "/src/assets/logo-clean.png",
    "foundingDate": "2021",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Perumahan Balikpapan Kota Blok B No 28 RT 14",
      "addressLocality": "Balikpapan Selatan",
      "addressRegion": "Kalimantan Timur",
      "postalCode": "76115",
      "addressCountry": "ID"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+6281345383331",
      "contactType": "customer service"
    },
    "sameAs": [
      "https://wa.me/6281345383331"
    ]
  };

  return (
    <>
      <SEO 
        title="Tentang Kami"
        description="Sultan Lebanese Kebab didirikan tahun 2021 dengan visi menghadirkan cita rasa autentik Lebanon ke Indonesia. Bahan berkualitas halal, resep turun-temurun Lebanon."
        keywords="tentang sultan lebanese kebab, sejarah kebab lebanon, visi misi kebab balikpapan, franchise kebab indonesia, kebab autentik lebanon"
        url="https://sultanlebanesekebab.com/about"
        structuredData={aboutStructuredData}
      />
      <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-700 to-primary-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Tentang <span className="text-secondary-300">Sultan Lebanese Kebab</span>
            </h1>
            <p className="text-xl md:text-2xl">
              Perjalanan kami dalam menyajikan cita rasa autentik Lebanon
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-primary-700 mb-6">Cerita Kami</h2>
              <p className="text-lg text-gray-600 mb-4">
                Sultan Lebanese Kebab didirikan pada tahun 2021 dengan visi untuk menghadirkan 
                cita rasa autentik Lebanon ke Indonesia. Dimulai dari sebuah warung kecil di Jakarta, 
                kami kini telah berkembang menjadi jaringan franchise terpercaya di seluruh Indonesia.
              </p>
              <p className="text-lg text-gray-600 mb-4">
                Dengan komitmen menggunakan bahan-bahan berkualitas tinggi dan resep turun-temurun 
                dari Lebanon, kami terus berinovasi untuk memberikan pengalaman kuliner terbaik 
                bagi pelanggan setia kami.
              </p>
              <p className="text-lg text-gray-600">
                Setiap hidangan dibuat dengan penuh perhatian dan cinta, menggunakan bumbu-bumbu 
                pilihan yang diimpor langsung dari Lebanon untuk memastikan keaslian rasa.
              </p>
            </div>
            <div className="bg-gradient-to-r from-primary-700 to-primary-600 rounded-lg p-5 md:p-14">
              <img
                src={logoClear}
                alt="logo"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Vision Mission Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-700 mb-4">
              Visi & Misi
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="flex items-center mb-6">
                <Heart className="h-8 w-8 text-secondary-500 mr-3" />
                <h3 className="text-2xl font-bold text-primary-700">Visi</h3>
              </div>
              <p className="text-lg text-gray-600">
                Menjadi jaringan restoran kebab terdepan di Indonesia yang dikenal karena 
                kualitas, keaslian rasa, dan pelayanan terbaik, sambil mempertahankan 
                nilai-nilai tradisional Lebanon dalam setiap hidangan yang kami sajikan.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="flex items-center mb-6">
                <Award className="h-8 w-8 text-secondary-500 mr-3" />
                <h3 className="text-2xl font-bold text-primary-700">Misi</h3>
              </div>
              <ul className="text-lg text-gray-600 space-y-2">
                <li>• Menyajikan makanan berkualitas tinggi dengan bahan halal</li>
                <li>• Memberikan pelayanan terbaik kepada setiap pelanggan</li>
                <li>• Mengembangkan jaringan franchise yang menguntungkan</li>
                <li>• Melestarikan keaslian cita rasa Lebanon</li>
                <li>• Menciptakan lapangan kerja bagi masyarakat Indonesia</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-700 mb-4">
              Nilai-Nilai Kami
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Nilai-nilai yang menjadi fondasi dalam setiap aspek bisnis kami
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-primary-100 rounded-full p-6 w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                <Award className="h-8 w-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold text-primary-700 mb-2">Kualitas</h3>
              <p className="text-gray-600">
                Komitmen untuk selalu memberikan yang terbaik dalam setiap produk dan layanan
              </p>
            </div>
            <div className="text-center">
              <div className="bg-primary-100 rounded-full p-6 w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                <Users className="h-8 w-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold text-primary-700 mb-2">Integritas</h3>
              <p className="text-gray-600">
                Menjalankan bisnis dengan jujur, transparan, dan bertanggung jawab
              </p>
            </div>
            <div className="text-center">
              <div className="bg-primary-100 rounded-full p-6 w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                <Clock className="h-8 w-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold text-primary-700 mb-2">Inovasi</h3>
              <p className="text-gray-600">
                Terus berinovasi untuk memberikan pengalaman terbaik bagi pelanggan
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      {/* <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-700 mb-4">
              Tim Kami
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Dipimpin oleh tim yang berpengalaman dan berdedikasi tinggi
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <img 
                src="https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=300" 
                alt="CEO"
                className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-semibold text-primary-700 mb-2">Ahmad Sulthan</h3>
              <p className="text-secondary-600 font-medium mb-2">CEO & Founder</p>
              <p className="text-gray-600">
                Visioner di balik Sultan Lebanese Kebab dengan pengalaman 15 tahun di industri kuliner
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <img 
                src="https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=300" 
                alt="Head Chef"
                className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-semibold text-primary-700 mb-2">Chef Khalil</h3>
              <p className="text-secondary-600 font-medium mb-2">Head Chef</p>
              <p className="text-gray-600">
                Chef berpengalaman dari Lebanon yang memastikan keaslian setiap hidangan
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <img 
                src="https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=300" 
                alt="Operations Manager"
                className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-semibold text-primary-700 mb-2">Sari Dewi</h3>
              <p className="text-secondary-600 font-medium mb-2">Operations Manager</p>
              <p className="text-gray-600">
                Mengelola operasional harian dan memastikan standar kualitas terjaga
              </p>
            </div>
          </div>
        </div>
      </section> */}

      {/* Call to Action */}
      {/* <section className="py-16 bg-gradient-to-r from-primary-700 to-primary-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Bergabunglah dengan Keluarga Besar Kami
          </h2>
          <p className="text-xl mb-8">
            Jadilah bagian dari kisah sukses Sultan Lebanese Kebab
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-secondary-500 hover:bg-secondary-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
              Hubungi Kami
            </button>
            <button className="border-2 border-secondary-400 text-secondary-400 hover:bg-secondary-400 hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors">
              Pelajari Franchise
            </button>
          </div>
        </div>
      </section> */}
    </div>
    </>
  );
};

export default About;