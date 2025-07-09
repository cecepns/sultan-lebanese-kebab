import { Star, Users, Award, Clock, Shield } from "lucide-react";
import SEO from "../components/SEO";
import burger from "../assets/burger.png";
import kebab from "../assets/kebab.png";
import kebab2 from "../assets/kebab-section-1.jpeg";
import wave1 from "../assets/wave1.png";
import logoClear from "../assets/logo-clean.png";
import Bontenk from "../assets/bonteng.png";
import Bontenk2 from "../assets/bonteng2.png";
import SandwichKebab from "../assets/sandwich-kebab.jpeg";
import LebaneseKebab from "../assets/lebanese-kebab.jpeg";
import BurgerKebab from "../assets/burger-kebab.jpeg";
import Hotdough from "../assets/hotdog-kebab.jpeg";

const Home = () => {
  const testimonials = [
    {
      name: "Ahmad Rizki",
      rating: 5,
      comment:
        "Kebab terenak yang pernah saya makan! Dagingnya empuk dan bumbunya pas banget.",
      location: "Balikpapan",
    },
    {
      name: "Siti Nurhaliza",
      rating: 5,
      comment:
        "Pelayanan ramah dan kebabnya sangat autentik. Pasti akan balik lagi!",
      location: "Balikpapan",
    },
    {
      name: "Budi Santoso",
      rating: 5,
      comment:
        "Franchise yang sangat menguntungkan. Support dari pusat sangat membantu.",
      location: "Balikpapan",
    },
  ];

  const menuItems = [
    {
      items: [
        {
          name: "Sandwich Kebab",
          price: "Rp 25.000",
          image: SandwichKebab,
        },
        {
          name: "Lebanese Kebab",
          price: "Rp 28.000",
          image: LebaneseKebab,
        },
        {
          name: "Burger Kebab",
          price: "Rp 32.000",
          image: BurgerKebab,
        },
      ],
    },
  ];

  const menuItems2 = [
    {
      items: [
        {
          name: "Sandwich Kebab",
          price: "Rp 25.000",
          image: SandwichKebab,
        },
        {
          name: "Lebanese Kebab",
          price: "Rp 28.000",
          image: LebaneseKebab,
        },
        {
          name: "Burger Kebab",
          price: "Rp 32.000",
          image: BurgerKebab,
        },
        {
          name: "Hotdog Kebab",
          price: "Rp 20.000",
          image: Hotdough,
        },
      ],
    },
  ];

  const whyChooseUs = [
    {
      icon: <Shield className="h-8 w-8 text-secondary-500" />,
      title: "Bahan Baku Berkualitas",
      description: "Bahan baku berkualitas dan tersertifikasi halal",
    },
    {
      icon: <Users className="h-8 w-8 text-secondary-500" />,
      title: "Lokasi Strategis",
      description: "Dicarikan lokasi strategis dan pegawai yang kompeten",
    },
    {
      icon: <Award className="h-8 w-8 text-secondary-500" />,
      title: "Menu Bervariasi",
      description: "Menu yang bervarian & mempunyai ciri khas sendiri",
    },
    {
      icon: <Clock className="h-8 w-8 text-secondary-500" />,
      title: "Evaluasi Berkala",
      description: "Evaluasi setiap bulan & diberikan strategi penjualan",
    },
  ];

  return (
    <>
      <SEO
        title="Beranda"
        description="Sultan Lebanese Kebab - Kebab autentik terenak di Balikpapan. Nikmati cita rasa autentik dan menggunakan bahan berkualitas halal. Pesan online via WhatsApp: 0813-4538-3331"
        keywords="kebab lebanese balikpapan, sultan lebanese kebab, kebab autentik, makanan halal balikpapan, pesan kebab online, delivery kebab"
        url="https://sultanlebanesekebab.com"
      />
      <div className="min-h-screen">
        {/* Banner Section */}
        <section className="relative flex flex-col items-center justify-center bg-gradient-to-r from-primary-700 to-primary-600 text-white py-20 min-h-[700px]">
          {/* <div className="absolute inset-0 bg-black opacity-20"></div> */}
          {/* <div className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30" style={{ backgroundImage: 'url(/src/assets/.png)' }}></div> */}

          <img
            src={burger}
            alt="burger"
            className="w-24 md:w-96 absolute left-0 top-0 h-auto object-cover z-10"
          />

          <img
            src={kebab}
            alt="kebab"
            className="w-44 md:w-96 right-0 -bottom-10 md:-bottom-20 h-auto absolute object-cover z-10"
          />

          <img
            src={wave1}
            alt="wave"
            className="w-44 md:w-1/2 left-44 md:-left-44 h-auto absolute -bottom-10 md:bottom-0 z-0"
          />

          <img
            src={wave1}
            alt="wave"
            className="hidden md:block w-44 md:w-1/2 rotate-180 right-10 md:-right-0 h-auto absolute none md:-bottom-64 z-0"
          />

          <img
            src={Bontenk}
            alt="wave"
            className="hidden md:block w-44 rotate-180 right-10 md:-right-0 h-auto absolute none md:top-10 z-0"
          />

          <img
            src={Bontenk2}
            alt="wave"
            className="w-24 md:w-44 rotate-180 left-5 md:left-10 md:-right-0 h-auto absolute none bottom-10 md:bottom-10 z-0"
          />

          <div className="w-full h-full flex items-center justify-center">
            <div className="relative h-full w-full mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center">
                <h1 className="text-4xl md:text-6xl font-bold mb-4">
                  Sultan Lebanese Kebab
                </h1>
                <p className="text-xl md:text-2xl mb-8 text-secondary-200">
                  Enaknya sampai gulungan terakhir
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="https://wa.me/6281345383331"
                    className="bg-secondary-500 hover:bg-secondary-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors inline-block text-center"
                  >
                    Pesan Sekarang
                  </a>
                  <button className="border-2 border-secondary-400 text-secondary-400 hover:bg-secondary-400 hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                    Lihat Menu
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <div className="relative h-14 mt-4">
        <img
          src={wave}
          alt="wave"
          className="w-full h-auto z-0"
        />
      </div> */}

        {/* Welcome Section */}
        <section className="py-16 bg-white md:mt-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-primary-700 mb-4">
                  Selamat Datang di <br /> Sultan Lebanese Kebab
                </h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  Sejak 2021, kami telah menyajikan kebab autentik dengan cita
                  rasa Lebanon yang menggugah selera. Dengan bahan-bahan
                  berkualitas tinggi, kami berkomitmen memberikan pengalaman
                  kuliner terbaik untuk Anda. Semua produk kami telah
                  bersertifikat halal dan menggunakan bahan-bahan pilihan yang
                  aman dan terjamin kualitasnya.
                </p>
              </div>
              <div className="relative">
                <div className="absolute w-96 -top-44 right-44 h-96 bg-primary-700 rounded-lg"></div>
                <img
                  src={kebab2}
                  alt="logo"
                  className="absolute -top-[200px] z-10 w-96 h-auto object-cover rounded-lg"
                />
              </div>
            </div>

            {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-primary-100 rounded-full p-6 w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                <Award className="h-8 w-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold text-primary-700 mb-2">
                Kualitas Terjamin
              </h3>
              <p className="text-gray-600">
                Bahan baku pilihan dan tersertifikasi halal
              </p>
            </div>
            <div className="text-center">
              <div className="bg-primary-100 rounded-full p-6 w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                <Users className="h-8 w-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold text-primary-700 mb-2">
                Pelayanan Prima
              </h3>
              <p className="text-gray-600">
                Staff yang terlatih dan berpengalaman
              </p>
            </div>
            <div className="text-center">
              <div className="bg-primary-100 rounded-full p-6 w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                <Clock className="h-8 w-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold text-primary-700 mb-2">
                Cepat & Segar
              </h3>
              <p className="text-gray-600">
                Penyajian cepat dengan kualitas terbaik
              </p>
            </div>
          </div> */}
          </div>
        </section>

        {/* Franchise Section */}
        {/* <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-700 mb-4">
              Franchise{" "}
              <span className="text-secondary-500">Kebab Terpercaya</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Bergabunglah dengan jaringan franchise Sultan Lebanese Kebab dan
              raih kesuksesan bisnis kuliner Anda. Dengan sistem yang sudah
              terbukti dan dukungan penuh dari tim kami.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="https://images.pexels.com/photos/4551832/pexels-photo-4551832.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Franchise Kebab"
                className="rounded-lg shadow-lg"
              />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-primary-700 mb-6">
                Mengapa Memilih Franchise Kami?
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-secondary-500 mt-1 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">
                    Investasi terjangkau dengan ROI yang menguntungkan
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-secondary-500 mt-1 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">
                    Training lengkap dan berkelanjutan
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-secondary-500 mt-1 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">
                    Marketing support dan brand recognition
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-secondary-500 mt-1 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">
                    Sistem operasional yang mudah dijalankan
                  </span>
                </li>
              </ul>
              <button className="mt-8 bg-secondary-500 hover:bg-secondary-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                Pelajari Lebih Lanjut
              </button>
            </div>
          </div>
        </div>
      </section> */}

        {/* Why Choose Us Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-primary-700 mb-4">
                Mengapa Harus Memilih Kami?
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Keunggulan yang membuat Sultan Lebanese Kebab menjadi pilihan
                terbaik untuk bisnis franchise Anda.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gradient-to-r from-primary-700 to-primary-600 rounded-lg p-5 md:p-14">
                <img
                  src={logoClear}
                  alt="logo"
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2  gap-8">
                {whyChooseUs.map((item, index) => (
                  <div
                    key={index}
                    className="text-center bg-gray-50 p-6 rounded-lg"
                  >
                    <div className="mb-4">{item.icon}</div>
                    <h3 className="text-lg font-semibold text-primary-700 mb-2">
                      {item.title}
                    </h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center bg-primary-50 p-6 rounded-lg">
              <h4 className="text-lg font-semibold text-primary-700 mb-2">
                Harga Terjangkau
              </h4>
              <p className="text-gray-600">
                Harga paket terjangkau & bisa menjangkau ke seluruh Indonesia
              </p>
            </div>
            <div className="text-center bg-primary-50 p-6 rounded-lg">
              <h4 className="text-lg font-semibold text-primary-700 mb-2">
                Keuntungan 100%
              </h4>
              <p className="text-gray-600">
                Keuntungan 100% milik mitra tanpa bagi hasil
              </p>
            </div>
            <div className="text-center bg-primary-50 p-6 rounded-lg">
              <h4 className="text-lg font-semibold text-primary-700 mb-2">
                Support Online
              </h4>
              <p className="text-gray-600">
                Support merchant online & sistem semi autopilot
              </p>
            </div>
          </div> */}
          </div>
        </section>

        {/* Menu Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-primary-700 mb-4">
                Menu <span className="text-secondary-500">Favorit</span>
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Satu satunya kebab di Kalimantan yang menggunakan kulit lebanese
                yang memiliki tekstur lembut serta cita rasa yang gurih membuat
                lidah semakin di manjakan dengan kenikmatan yang luar biasa
                Yang dimanaa jenis kulit kebab lebanese ini kami produksi secara mandiri yang sudah bersertifikat halal dan lulus kelayakan Konsumsi
              </p>
            </div>

            {menuItems.map((category, categoryIndex) => (
              <div key={categoryIndex} className="mb-12">
                <h3 className="text-2xl font-bold text-primary-700 mb-6 text-center">
                  {category.category}
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {category.items.map((item, itemIndex) => (
                    <div
                      key={itemIndex}
                      className="border-2 border-primary-700 rounded-lg bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
                    >
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-96 object-cover p-4"
                      />
                      <div className="p-4 text-white bg-primary-700 text-lg">
                        {item.name}
                      </div>
                      {/* <div className="p-6">
                      <h4 className="text-lg font-semibold text-primary-700 mb-2">
                        {item.name}
                      </h4>
                      <p className="text-secondary-600 font-bold text-xl">
                        {item.price}
                      </p>
                      <button className="mt-4 bg-secondary-500 hover:bg-secondary-600 text-white px-4 py-2 rounded-lg font-semibold transition-colors w-full">
                        Pesan Sekarang
                      </button>
                    </div> */}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-primary-700 mb-4">
                Testimoni <span className="text-secondary-500">Pelanggan</span>
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Dengarkan pengalaman pelanggan yang puas dengan Sultan Lebanese
                Kebab.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-gray-50 rounded-lg p-6">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-5 w-5 text-secondary-500 fill-current"
                      />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-4 italic">
                    &ldquo;{testimonial.comment}&rdquo;
                  </p>
                  <div className="flex items-center">
                    <div>
                      <p className="font-semibold text-primary-700">
                        {testimonial.name}
                      </p>
                      <p className="text-gray-600">{testimonial.location}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Promo Section */}
        <section className="py-16 bg-gradient-to-r from-secondary-500 to-secondary-600 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Dapatkan Promo Menarik
              </h2>
              {/* <p className="text-xl mb-8">
              Dapatkan diskon hingga 30% untuk pembelian paket combo
            </p> */}
              {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white bg-opacity-10 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-2">Paket Hemat</h3>
                <p className="mb-4">Kebab + Minuman + Kentang</p>
                <p className="text-2xl font-bold">Rp 35.000</p>
                <span className="text-sm line-through opacity-75">
                  Rp 50.000
                </span>
              </div>
              <div className="bg-white bg-opacity-10 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-2">Paket Keluarga</h3>
                <p className="mb-4">4 Kebab + 4 Minuman</p>
                <p className="text-2xl font-bold">Rp 80.000</p>
                <span className="text-sm line-through opacity-75">
                  Rp 100.000
                </span>
              </div>
              <div className="bg-white bg-opacity-10 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-2">Paket Franchise</h3>
                <p className="mb-4">Diskon investasi awal</p>
                <p className="text-2xl font-bold">30% OFF</p>
                <span className="text-sm opacity-75">
                  Berlaku hingga akhir bulan
                </span>
              </div>
            </div> */}

              {menuItems2.map((category, categoryIndex) => (
                <div key={categoryIndex} className="mb-12">
                  <h3 className="text-2xl font-bold text-primary-700 mb-6 text-center">
                    {category.category}
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {category.items.map((item, itemIndex) => (
                      <div
                        key={itemIndex}
                        className="border-2 border-primary-700 bg-white rounded-tl-2xl shadow-md overflow-hidden hover:shadow-lg transition-shadow"
                      >
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-full h-64 object-cover p-4"
                        />
                        <div className="p-4 text-white bg-primary-700 text-lg">
                          {item.name}
                        </div>
                        {/* <div className="p-6">
                      <h4 className="text-lg font-semibold text-primary-700 mb-2">
                        {item.name}
                      </h4>
                      <p className="text-secondary-600 font-bold text-xl">
                        {item.price}
                      </p>
                      <button className="mt-4 bg-secondary-500 hover:bg-secondary-600 text-white px-4 py-2 rounded-lg font-semibold transition-colors w-full">
                        Pesan Sekarang
                      </button>
                    </div> */}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
              <a
                href="https://wa.me/6281345383331"
                className="mt-8 bg-primary-600 hover:bg-primary-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors inline-block"
              >
                Pesan Sekarang
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;
