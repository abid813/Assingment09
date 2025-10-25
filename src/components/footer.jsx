import { Facebook, Instagram, Twitter, Linkedin, Mail, MapPin, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10 mt-12">
      <div className="max-w-[1400px] mx-auto px-6 flex flex-col items-center text-center space-y-6">
        {/* Logo / Title */}
        <h2 className="text-3xl font-extrabold text-white tracking-wide">WarmPaws</h2>
        <p className="text-gray-400 max-w-xl">
          🐾 Your trusted winter care partner for pets.  
          We keep your furry friends warm, healthy, and happy during the cold season.
        </p>

        {/* Contact Section */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-4 text-sm">
          <div className="flex items-center gap-2">
            <Mail size={18} /> <span>support@warmpaws.com</span>
          </div>
          <div className="flex items-center gap-2">
            <Phone size={18} /> <span>+880 1234-567890</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin size={18} /> <span>Dhaka, Bangladesh</span>
          </div>
        </div>

        {/* Social Icons */}
        <div className="flex justify-center gap-6 mt-6">
          <a href="#" className="hover:text-blue-500 transition">
            <Facebook size={26} />
          </a>
          <a href="#" className="hover:text-pink-500 transition">
            <Instagram size={26} />
          </a>
          <a href="#" className="hover:text-sky-400 transition">
            <Twitter size={26} />
          </a>
          <a href="#" className="hover:text-blue-400 transition">
            <Linkedin size={26} />
          </a>
        </div>

        {/* Divider */}
        <div className="w-3/4 border-t border-gray-700 my-6"></div>

        {/* Bottom Text */}
        <p className="text-gray-500 text-sm">
          © {new Date().getFullYear()} <span className="font-semibold text-gray-300">WarmPaws</span> | 
          <a href="#" className="text-blue-400 hover:underline ml-1">Privacy Policy</a> | 
          <a href="#" className="text-blue-400 hover:underline ml-1">Terms & Conditions</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
