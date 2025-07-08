import { CheckCircle, DollarSign, Users, TrendingUp, Award, Shield } from 'lucide-react';
import SEO from "../components/SEO";

const Partnership = () => {
  const handleCallUs = () => {
    window.location.href = "tel:+6281345383331";
  };

  const packages = [
    {
      name: 'Paket Starter',
      price: 'Rp 75.000.000',
      features: [
        'Peralatan dapur lengkap',
        'Training 2 minggu',
        'Marketing kit',
        'Support operasional 6 bulan',
        'Bahan baku awal'
      ],
      recommended: false
    },
    {
      name: 'Paket Premium',
      price: 'Rp 125.000.000',
      features: [
        'Semua fitur Starter',
        'Desain interior modern',
        'POS system',
        'Training lanjutan',
        'Support operasional 12 bulan',
        'Marketing digital support'
      ],
      recommended: true
    },
    {
      name: 'Paket Master',
      price: 'Rp 200.000.000',
      features: [
        'Semua fitur Premium',
        'Lokasi premium',
        'Tim management',
        'Exclusive territory',
        'Support operasional 24 bulan',
        'Priority support'
      ],
      recommended: false
    }
  ];

  const benefits = [
    {
      icon: <Shield className="h-8 w-8 text-secondary-500" />,
      title: 'Bahan Baku Berkualitas',
      description: 'Bahan baku berkualitas dan tersertifikasi halal'
    },
    {
      icon: <Users className="h-8 w-8 text-secondary-500" />,
      title: 'Lokasi Strategis',
      description: 'Dicarikan lokasi strategis dan pegawai yang kompeten'
    },
    {
      icon: <Award className="h-8 w-8 text-secondary-500" />,
      title: 'Menu Bervariasi',
      description: 'Menu yang bervarian & mempunyai ciri khas sendiri'
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-secondary-500" />,
      title: 'Evaluasi Berkala',
      description: 'Evaluasi setiap bulan & diberikan strategi penjualan'
    },
    {
      icon: <DollarSign className="h-8 w-8 text-secondary-500" />,
      title: 'Harga Terjangkau',
      description: 'Harga paket terjangkau & bisa menjangkau ke seluruh Indonesia'
    },
    {
      icon: <CheckCircle className="h-8 w-8 text-secondary-500" />,
      title: 'Keuntungan 100%',
      description: 'Keuntungan 100% milik mitra'
    }
  ];

  const steps = [
    {
      number: '1',
      title: 'Konsultasi Awal',
      description: 'Hubungi tim kami untuk konsultasi gratis mengenai peluang franchise'
    },
    {
      number: '2',
      title: 'Survey Lokasi',
      description: 'Tim kami akan membantu survey dan analisa lokasi yang tepat'
    },
    {
      number: '3',
      title: 'Penandatanganan Kontrak',
      description: 'Penandatanganan kontrak franchise dan pembayaran awal'
    },
    {
      number: '4',
      title: 'Persiapan Outlet',
      description: 'Setup outlet, training, dan persiapan grand opening'
    },
    {
      number: '5',
      title: 'Grand Opening',
      description: 'Pembukaan outlet dengan dukungan penuh dari tim kami'
    }
  ];

  const franchiseStructuredData = {
    "@context": "https://schema.org",
    "@type": "BusinessOpportunity",
    "name": "Franchise Sultan Lebanese Kebab",
    "description": "Peluang bisnis franchise kebab autentik Lebanon. Investasi mulai Rp 75 juta dengan ROI menarik. Support lengkap dan bahan baku berkualitas halal.",
    "url": "https://sultanlebanesekebab.com/partnership",
    "offers": {
      "@type": "Offer",
      "price": "75000000",
      "priceCurrency": "IDR",
      "description": "Paket Starter Franchise Sultan Lebanese Kebab"
    },
    "provider": {
      "@type": "Organization",
      "name": "Sultan Lebanese Kebab",
      "telephone": "+6281345383331"
    }
  };

  return (
    <>
      <SEO 
        title="Franchise Kebab"
        description="Peluang bisnis franchise Sultan Lebanese Kebab. Investasi mulai Rp 75 juta dengan ROI menarik. Support lengkap, bahan baku halal, lokasi strategis. Hubungi: 0813-4538-3331"
        keywords="franchise kebab lebanon, peluang bisnis kebab, investasi franchise, franchise sultan lebanese kebab, bisnis makanan halal, franchise balikpapan"
        url="https://sultanlebanesekebab.com/partnership"
        structuredData={franchiseStructuredData}
      />
      <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-700 to-primary-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Kemitraan <span className="text-secondary-300">Franchise</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8">
              Bergabunglah dengan kisah sukses Sultan Lebanese Kebab
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-secondary-500 hover:bg-secondary-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                Daftar Sekarang
              </button>
              <button className="border-2 border-secondary-400 text-secondary-400 hover:bg-secondary-400 hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                Download Brosur
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-700 mb-4">
              Mengapa Memilih <span className="text-secondary-500">Franchise Kami?</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Keunggulan yang membuat Sultan Lebanese Kebab menjadi pilihan terbaik untuk investasi franchise Anda
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6 text-center">
                <div className="flex justify-center mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold text-primary-700 mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Benefits */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-primary-700 mb-6">Keuntungan Tambahan</h2>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-secondary-500 mt-1 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">Support merchant online & sistem semi autopilot</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-secondary-500 mt-1 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">Brand recognition yang kuat di pasar Indonesia</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-secondary-500 mt-1 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">Sistem operasional yang sudah teruji dan terbukti</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-secondary-500 mt-1 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">Marketing support berkelanjutan</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-secondary-500 mt-1 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">Return of Investment (ROI) yang menarik</span>
                </li>
              </ul>
            </div>
            <div>
              <img 
                src="https://images.pexels.com/photos/4551832/pexels-photo-4551832.jpeg?auto=compress&cs=tinysrgb&w=600" 
                alt="Franchise Benefits"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Franchise Packages */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-700 mb-4">
              Paket <span className="text-secondary-500">Franchise</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Pilih paket franchise yang sesuai dengan budget dan kebutuhan Anda
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <div key={index} className={`bg-white rounded-lg shadow-lg p-6 relative ${pkg.recommended ? 'border-2 border-secondary-500' : 'border border-gray-200'}`}>
                {pkg.recommended && (
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <span className="bg-secondary-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                      Terlaris
                    </span>
                  </div>
                )}
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-primary-700 mb-2">{pkg.name}</h3>
                  <p className="text-3xl font-bold text-secondary-600">{pkg.price}</p>
                </div>
                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-secondary-500 mt-1 mr-3 flex-shrink-0" />
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
                <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-colors ${
                  pkg.recommended 
                    ? 'bg-secondary-500 hover:bg-secondary-600 text-white' 
                    : 'bg-gray-200 hover:bg-gray-300 text-gray-700'
                }`}>
                  Pilih Paket
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-700 mb-4">
              Proses <span className="text-secondary-500">Kemitraan</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Langkah mudah untuk menjadi mitra franchise Sultan Lebanese Kebab
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="bg-secondary-500 text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {step.number}
                </div>
                <h3 className="text-lg font-semibold text-primary-700 mb-2">{step.title}</h3>
                <p className="text-gray-600 text-sm">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-700 mb-4">
              Kisah <span className="text-secondary-500">Sukses</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Testimoni dari mitra franchise yang telah merasakan keuntungan
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-lg p-6">
              <div className="flex items-center mb-4">
                <img 
                  src="https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=100" 
                  alt="Partner"
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <h4 className="font-semibold text-primary-700">Ahmad Rizki</h4>
                  <p className="text-sm text-gray-600">Mitra Jakarta</p>
                </div>
              </div>
              <p className="text-gray-700 italic">
                "Dalam 8 bulan, ROI sudah kembali. Support dari tim pusat sangat membantu dalam menjalankan bisnis."
              </p>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6">
              <div className="flex items-center mb-4">
                <img 
                  src="https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=100" 
                  alt="Partner"
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <h4 className="font-semibold text-primary-700">Sari Dewi</h4>
                  <p className="text-sm text-gray-600">Mitra Bandung</p>
                </div>
              </div>
              <p className="text-gray-700 italic">
                "Sistem yang mudah dijalankan dan produk yang disukai pelanggan. Omzet terus meningkat setiap bulan."
              </p>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6">
              <div className="flex items-center mb-4">
                <img 
                  src="https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=100" 
                  alt="Partner"
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <h4 className="font-semibold text-primary-700">Budi Santoso</h4>
                  <p className="text-sm text-gray-600">Mitra Surabaya</p>
                </div>
              </div>
              <p className="text-gray-700 italic">
                "Brand yang sudah terkenal memudahkan pemasaran. Pelanggan sudah percaya dengan kualitas produk."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-primary-700 to-primary-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Siap Memulai Bisnis Franchise?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Jangan sia-siakan kesempatan emas ini! Hubungi kami sekarang untuk konsultasi gratis
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={handleCallUs}
              className="bg-secondary-500 hover:bg-secondary-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Konsultasi Gratis
            </button>
            <button className="border-2 border-secondary-400 text-secondary-400 hover:bg-secondary-400 hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors">
              Download Proposal
            </button>
          </div>
          <div className="mt-8 flex justify-center space-x-8 text-sm">
            <div className="flex items-center">
              <CheckCircle className="h-5 w-5 mr-2" />
              <span>Konsultasi Gratis</span>
            </div>
            <div className="flex items-center">
              <CheckCircle className="h-5 w-5 mr-2" />
              <span>Survey Lokasi</span>
            </div>
            <div className="flex items-center">
              <CheckCircle className="h-5 w-5 mr-2" />
              <span>ROI Terjamin</span>
            </div>
          </div>
        </div>
      </section>
    </div>
    </>
  );
};

export default Partnership;