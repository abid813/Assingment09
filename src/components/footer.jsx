import { Facebook, Instagram, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 max-w-[1400px] 
    mx-auto  text-gray-300 mt-10">
      <div className="px-4 py-6 text-center">
        <p className="mb-2">📞 Contact: support@warmpaws.com | ☎ 01234-567890</p>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-2">
          <a href="#" className="flex items-center gap-1 hover:text-white">
            <Facebook size={20} /> Facebook
          </a>
          <a href="#" className="flex items-center gap-1 hover:text-white">
            <Instagram size={20} /> Instagram
          </a>
          <a href="#" className="flex items-center gap-1 hover:text-white">
            <Twitter size={20} /> Twitter
          </a>
        </div>

        <p className="mt-4 text-sm">© 2025 WarmPaws | Privacy Policy</p>
      </div>
    </footer>
  );
};

export default Footer;
