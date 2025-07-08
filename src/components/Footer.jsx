import {
  Instagram,
  Phone,
  MapPin,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4 text-secondary-300">
              Sultan Lebanese Kebab
            </h3>
            <p className="text-gray-300 mb-4">
              Kebab autentik dengan cita rasa Lebanon yang telah berdiri sejak
              2021. Kami menggunakan bahan-bahan berkualitas tinggi dan halal.
            </p>
            <div className="flex space-x-4">
              {/* <Facebook className="h-6 w-6 text-secondary-300 hover:text-white cursor-pointer" /> */}
              <a href="https://www.instagram.com/sultankebab_id/" target="_blank" rel="noopener noreferrer">
                <Instagram className="h-6 w-6 text-secondary-300 hover:text-white cursor-pointer" />
              </a>
              {/* <Twitter className="h-6 w-6 text-secondary-300 hover:text-white cursor-pointer" /> */}
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-secondary-300">
              Menu
            </h4>
            <ul className="space-y-2 text-gray-300">
              <li>Kebab</li>
              <li>Burger</li>
              <li>Minuman</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-secondary-300">
              Company
            </h4>
            <ul className="space-y-2 text-gray-300">
              <li>About Us</li>
              <li>Kemitraan</li>
              <li>Gallery</li>
              <li>Contact</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-secondary-300">
              Contact Info
            </h4>
            <div className="space-y-2 text-gray-300">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span>+62 813-4538-3331</span>
              </div>
              {/* <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span>info@sultanlebanese.com</span>
              </div> */}
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4" />
                <div className="w-64">
                  Perumahan balikpapan kota blok b no 28 RT 14 kelurahan
                  Sepinggan raya kecamatan balikpapan selatan kota balikpapan
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-700 mt-8 pt-8 text-center text-gray-300">
          <p>&copy; 2024 Sultan Lebanese Kebab. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
