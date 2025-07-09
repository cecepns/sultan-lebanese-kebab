import { Phone, MapPin, Clock, Send } from "lucide-react";
import { useState } from "react";
import SEO from "../components/SEO";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
    alert("Pesan Anda telah dikirim! Kami akan segera menghubungi Anda.");
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    });
  };

  const outlets = [
    {
      name: "Balikpapan",
      address:
        "Perumahan balikpapan kota blok b no 28 RT 14 kelurahan Sepinggan raya kecamatan balikpapan selatan kota balikpapan",
      phone: "+62 813-4538-3331",
      hours: "10:00 - 22:00",
      maps: "https://maps.google.com/?q=Perumahan+balikpapan+kota+blok+b+no+28+RT+14+kelurahan+Sepinggan+raya+kecamatan+balikpapan+selatan+kota+balikpapan",
    },
  ];

  const handleCallUs = () => {
    window.location.href = "tel:+6281345383331";
  };

  const handleFindLocation = () => {
    window.open(
      "https://maps.google.com/?q=Perumahan+balikpapan+kota+blok+b+no+28+RT+14+kelurahan+Sepinggan+raya+kecamatan+balikpapan+selatan+kota+balikpapan",
      "_blank"
    );
  };

  const contactStructuredData = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": "Kontak Sultan Lebanese Kebab",
    "description": "Hubungi Sultan Lebanese Kebab di Balikpapan. Telepon: 0813-4538-3331. Alamat: Perumahan Balikpapan Kota Blok B No 28 RT 14, Balikpapan Selatan.",
    "url": "https://sultanlebanesekebab.com/contact",
    "mainEntity": {
      "@type": "Restaurant",
      "name": "Sultan Lebanese Kebab",
      "telephone": "+6281345383331",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Perumahan Balikpapan Kota Blok B No 28 RT 14",
        "addressLocality": "Balikpapan Selatan",
        "addressRegion": "Kalimantan Timur",
        "postalCode": "76115",
        "addressCountry": "ID"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": -1.2389,
        "longitude": 116.8529
      },
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": [
            "Monday",
            "Tuesday", 
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
            "Sunday"
          ],
          "opens": "10:00",
          "closes": "22:00"
        }
      ]
    }
  };

  return (
    <>
      <SEO 
        title="Kontak Kami"
        description="Hubungi Sultan Lebanese Kebab di Balikpapan. Telepon: 0813-4538-3331. Alamat: Perumahan Balikpapan Kota Blok B No 28 RT 14, Balikpapan Selatan. Jam buka: 10:00-22:00"
        keywords="kontak sultan lebanese kebab, alamat kebab balikpapan, telepon kebab, lokasi sultan lebanese kebab, jam buka kebab balikpapan"
        url="https://sultanlebanesekebab.com/contact"
        structuredData={contactStructuredData}
      />
      <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-700 to-primary-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Hubungi <span className="text-secondary-300">Kami</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8">
              Kami siap membantu Anda kapan saja
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={handleCallUs}
                className="bg-secondary-500 hover:bg-secondary-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors flex items-center justify-center"
              >
                <Phone className="h-5 w-5 mr-2" />
                Hubungi Kami
              </button>
              <button
                onClick={handleFindLocation}
                className="border-2 border-secondary-400 text-secondary-400 hover:bg-secondary-400 hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors flex items-center justify-center"
              >
                <MapPin className="h-5 w-5 mr-2" />
                Temukan Outlet
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-primary-100 rounded-full p-6 w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                <Phone className="h-8 w-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold text-primary-700 mb-2">
                Telepon
              </h3>
              <a
                href="tel:+6281345383331"
                className="text-gray-600 hover:text-primary-600 transition-colors block"
              >
                +62 813-4538-3331
              </a>
            </div>

            <div className="text-center">
              <div className="bg-primary-100 rounded-full p-6 w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                <MapPin className="h-8 w-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold text-primary-700 mb-2">
                Alamat
              </h3>
              <p className="text-gray-600">
                Perumahan balikpapan kota blok b no 28 RT 14 kelurahan Sepinggan
                raya kecamatan balikpapan selatan kota balikpapan
              </p>
            </div>

            <div className="text-center">
              <div className="bg-primary-100 rounded-full p-6 w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                <Clock className="h-8 w-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold text-primary-700 mb-2">
                Jam Buka
              </h3>
              <p className="text-gray-600">Senin - Minggu</p>
              <p className="text-gray-600">18:00 - 01:00 WITA</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-primary-700 mb-6">
                Kirim Pesan
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Nama Lengkap
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Nomor Telepon
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Subjek
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary-500 focus:border-transparent"
                  >
                    <option value="">Pilih Subjek</option>
                    <option value="general">Pertanyaan Umum</option>
                    <option value="franchise">Franchise</option>
                    <option value="complaint">Keluhan</option>
                    <option value="suggestion">Saran</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Pesan
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary-500 focus:border-transparent"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-secondary-500 hover:bg-secondary-600 text-white py-3 px-6 rounded-lg font-semibold transition-colors flex items-center justify-center"
                >
                  <Send className="h-5 w-5 mr-2" />
                  Kirim Pesan
                </button>
              </form>
            </div>

            {/* Map */}
            <div>
              <h2 className="text-3xl font-bold text-primary-700 mb-6">
                Lokasi Kami
              </h2>
              <div className="bg-gray-300 rounded-lg h-96 flex items-center justify-center">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.8544020261743!2d116.86615560000001!3d-1.2594760999999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2df14700238eb35f%3A0xda4c33805415ffb8!2sSultan%20lebanese%20kebab!5e0!3m2!1sid!2sid!4v1751991727069!5m2!1sid!2sid"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
                {/* <div className="text-center">
                  <p className="text-gray-600 mb-4">
                    Perumahan balikpapan kota blok b no 28 RT 14 kelurahan Sepinggan raya kecamatan balikpapan selatan kota balikpapan
                  </p>
                  <button 
                    onClick={handleFindLocation}
                    className="bg-secondary-500 hover:bg-secondary-600 text-white px-6 py-2 rounded-lg font-medium transition-colors flex items-center mx-auto"
                  >
                    <MapPin className="h-4 w-4 mr-2" />
                    Lihat di Google Maps
                  </button>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Outlet Locations */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-700 mb-4">
              Outlet <span className="text-secondary-500">Kami</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Temukan outlet Sultan Lebanese Kebab terdekat di kota Anda
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-1 gap-8">
            {outlets.map((outlet, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-primary-700 mb-4">
                  {outlet.name}
                </h3>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <MapPin className="h-5 w-5 text-secondary-500 mt-1 mr-3 flex-shrink-0" />
                    <p className="text-gray-600">{outlet.address}</p>
                  </div>
                  <div className="flex items-center">
                    <Phone className="h-5 w-5 text-secondary-500 mr-3 flex-shrink-0" />
                    <a
                      href="tel:+6281345383331"
                      className="text-gray-600 hover:text-primary-600 transition-colors"
                    >
                      {outlet.phone}
                    </a>
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-5 w-5 text-secondary-500 mr-3 flex-shrink-0" />
                    <p className="text-gray-600">{outlet.hours}</p>
                  </div>
                </div>
                <button
                  onClick={handleFindLocation}
                  className="mt-4 w-full bg-secondary-500 hover:bg-secondary-600 text-white py-2 px-4 rounded-lg font-medium transition-colors flex items-center justify-center"
                >
                  <MapPin className="h-4 w-4 mr-2" />
                  Lihat di Maps
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-700 mb-4">
              Pertanyaan <span className="text-secondary-500">Umum</span>
            </h2>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            <div className="bg-white rounded-lg p-6">
              <h3 className="text-lg font-semibold text-primary-700 mb-2">
                Apakah makanan di Sultan Lebanese Kebab halal?
              </h3>
              <p className="text-gray-600">
                Ya, semua makanan di Sultan Lebanese Kebab menggunakan bahan
                halal dan telah tersertifikasi halal.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6">
              <h3 className="text-lg font-semibold text-primary-700 mb-2">
                Apakah ada layanan delivery?
              </h3>
              <p className="text-gray-600">
                Ya, kami menyediakan layanan delivery melalui aplikasi GoFood,
                GrabFood, dan platform online lainnya.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6">
              <h3 className="text-lg font-semibold text-primary-700 mb-2">
                Bagaimana cara menjadi franchise?
              </h3>
              <p className="text-gray-600">
                Anda dapat menghubungi kami melalui telepon +62 813-4538-3331
                untuk informasi lebih detail.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6">
              <h3 className="text-lg font-semibold text-primary-700 mb-2">
                Apakah ada promo khusus?
              </h3>
              <p className="text-gray-600">
                Ya, kami sering mengadakan promo khusus. Ikuti social media kami
                untuk mendapatkan informasi promo terbaru.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
    </>
  );
};

export default Contact;
