import { useState } from "react";
import { X } from "lucide-react";
import SEO from "../components/SEO";
import sandwichkebab from "../assets/sandwich-kebab.jpeg";
import lebanesKebab from "../assets/lebanese-kebab.jpeg";
import burgerkebab from "../assets/burger-kebab.jpeg";
import outlet from "../assets/outlet/outlet1.jpeg";
import outlet2 from "../assets/outlet/outlet2.jpeg";
import outlet3 from "../assets/outlet/outlet3.jpeg";
import hotdough from "../assets/hotdog-kebab.jpeg";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleCallUs = () => {
    window.location.href = "tel:+6281345383331";
  };

  const handleFindLocation = () => {
    window.open(
      "https://maps.google.com/?q=Perumahan+balikpapan+kota+blok+b+no+28+RT+14+kelurahan+Sepinggan+raya+kecamatan+balikpapan+selatan+kota+balikpapan",
      "_blank"
    );
  };

  const galleryImages = [
    {
      id: 1,
      src: sandwichkebab,
      alt: "Sandwich Kebab",
      category: "makanan",
    },
    {
      id: 2,
      src: lebanesKebab,
      alt: "Lebanese Kebab",
      category: "makanan",
    },
    {
      id: 3,
      src: burgerkebab,
      alt: "Burger Kebab",
      category: "makanan",
    },
    {
      id: 4,
      src: hotdough,
      alt: "Hotdough",
      category: "makanan",
    },
    {
      id: 5,
      src: outlet,
      alt: "DAM (sebrang pom bensin DAM)",
      category: "outlet",
    },
    {
      id: 6,
      src: outlet2,
      alt: "Kebun sayur ( sebrang lapangan Foni)",
      category: "outlet",
    },
    {
      id: 7,
      src: outlet3,
      alt: "Prapatan ( depan masjid Nahdlatul ulama)",
      category: "outlet",
    },
  ];

  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = [
    { id: "all", name: "Semua" },
    { id: "makanan", name: "Makanan" },
    { id: "outlet", name: "Outlet" },
    // { id: "pelanggan", name: "Pelanggan" },
  ];

  const filteredImages =
    selectedCategory === "all"
      ? galleryImages
      : galleryImages.filter((img) => img.category === selectedCategory);

  const openModal = (image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const galleryStructuredData = {
    "@context": "https://schema.org",
    "@type": "ImageGallery",
    name: "Gallery Sultan Lebanese Kebab",
    description:
      "Koleksi foto makanan dan outlet Sultan Lebanese Kebab di Balikpapan. Lihat kebab autentik, burger kebab, dan outlet kami.",
    url: "https://sultanlebanesekebab.com/gallery",
    image: galleryImages.map((img) => ({
      "@type": "ImageObject",
      url: img.src,
      name: img.alt,
      description: `Foto ${img.alt} Sultan Lebanese Kebab`,
    })),
  };

  return (
    <>
      <SEO
        title="Gallery Foto"
        description="Lihat gallery foto Sultan Lebanese Kebab: Sandwich Kebab, Lebanese Kebab, Burger Kebab, Hotdog Kebab, dan outlet kami di Balikpapan. Makanan autentik."
        keywords="gallery sultan lebanese kebab, foto kebab lebanese, gambar outlet kebab balikpapan, foto makanan kebab, gallery makanan halal"
        url="https://sultanlebanesekebab.com/gallery"
        structuredData={galleryStructuredData}
      />
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-primary-700 to-primary-600 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Gallery{" "}
                <span className="text-secondary-300">
                  Sultan Lebanese Kebab
                </span>
              </h1>
              <p className="text-xl md:text-2xl">
                Lihat momen-momen terbaik kami
              </p>
            </div>
          </div>
        </section>

        {/* Filter Section */}
        <section className="py-8 bg-white shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap gap-2 justify-center">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-6 py-2 rounded-full font-medium transition-colors ${
                    selectedCategory === category.id
                      ? "bg-secondary-500 text-white"
                      : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Gallery Grid */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredImages.map((image) => (
                <div key={image.id}>
                  <div
                    className="relative group cursor-pointer overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-shadow"
                    onClick={() => openModal(image)}
                  >
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-opacity duration-300">
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <span className="text-white font-medium">
                          Lihat Gambar
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="text-center mt-2">
                    <p className="text-sm text-gray-600">{image.alt}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Modal */}
        {selectedImage && (
          <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
            <div className="relative max-w-4xl max-h-full">
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 text-white hover:text-gray-300 z-10"
              >
                <X className="h-8 w-8" />
              </button>
              <img
                src={selectedImage.src}
                alt={selectedImage.alt}
                className="max-w-full max-h-full object-contain"
              />
              <div className="absolute bottom-4 left-4 text-white">
                <p className="text-lg font-medium">{selectedImage.alt}</p>
              </div>
            </div>
          </div>
        )}

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-primary-700 to-primary-600 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Kunjungi Outlet Kami
            </h2>
            <p className="text-xl mb-8">
              Rasakan langsung pengalaman kuliner terbaik di Sultan Lebanese
              Kebab
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={handleFindLocation}
                className="bg-secondary-500 hover:bg-secondary-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                Temukan Lokasi
              </button>
              <button
                onClick={handleCallUs}
                className="border-2 border-secondary-400 text-secondary-400 hover:bg-secondary-400 hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                Hubungi Kami
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Gallery;
