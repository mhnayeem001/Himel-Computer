import { Phone, Mail, MapPin, Facebook } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">

          {/* Left Column */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">Himel Computer</h3>
            <p className="text-gray-400 max-w-sm">
              Your Trusted Digital & Online Service Partner in Gazipur.
            </p>
            <p className="text-gray-400 italic max-w-sm">
              Founded by MD. Ahsan Habib
            </p>
            <p className="text-gray-400 font-semibold">Proudly serving the people of Gazipur since 2017.</p>
          </div>

          {/* Middle Column - Quick Links */}
          <div>
            <h4 className="text-xl font-semibold mb-6 border-b border-gray-700 pb-2">
              Quick Links
            </h4>
            <nav className="flex flex-col space-y-3 text-gray-300 text-sm font-medium">
              <a href="#home" className="hover:text-white transition">
                Home
              </a>
              <a href="#about" className="hover:text-white transition">
                About Us
              </a>
              <a href="#services" className="hover:text-white transition">
                Services
              </a>
              <a href="#portfolio" className="hover:text-white transition">
                Portfolio
              </a>
              <a href="#contact" className="hover:text-white transition">
                Contact
              </a>
            </nav>
          </div>

          {/* Right Column - Contact Info */}
          <div>
            <h4 className="text-xl font-semibold mb-6 border-b border-gray-700 pb-2">
              Contact Info
            </h4>
            <ul className="space-y-4 text-gray-400 text-sm font-medium">
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-primary" />
                <a href="tel:+8801714076190" className="hover:text-white transition">
                  +880 17 1407 6190
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-primary" />
                <a
                  href="mailto:himelcomputerkadda@gmail.com"
                  className="hover:text-white transition"
                >
                  himelcomputerkadda@gmail.com
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-primary" />
                <span>Gazipur, Dhaka, Bangladesh</span>
              </li>
              <li className="flex items-center space-x-3">
                <Facebook className="w-5 h-5 text-primary" />
                <a
                  href="https://www.facebook.com/share/1B7dF6S26E/?mibextid=wwXIfr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition"
                >
                  Facebook profile 
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="border-t border-gray-800 mt-12 pt-6 text-center text-gray-400 text-sm">
          <p>© 2025 Himel Computer. All Rights Reserved.</p>
          <p className="text-gray-500 text-xs mt-1">
            Website developed by Mahadi Hasan Nayeem
          </p>
        </div>
      </div>
    </footer>
  );
}