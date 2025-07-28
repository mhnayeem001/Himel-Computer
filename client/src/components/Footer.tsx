import { Phone, Mail, Facebook } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-4">Himel Computer</h3>
          <p className="text-gray-400 mb-6">Your Trusted Digital & Online Service Partner in Gazipur</p>
          
          <div className="flex justify-center space-x-6 mb-8">
            <a 
              href="tel:+8801716433877" 
              className="text-gray-400 hover:text-white transition-colors duration-200"
            >
              <Phone className="text-xl w-6 h-6" />
            </a>
            <a 
              href="mailto:himelcomputerkadda@gmail.com" 
              className="text-gray-400 hover:text-white transition-colors duration-200"
            >
              <Mail className="text-xl w-6 h-6" />
            </a>
            <a 
              href="https://www.facebook.com/share/1B7dF6S26E/?mibextid=wwXIfr" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-400 hover:text-white transition-colors duration-200"
            >
              <Facebook className="text-xl w-6 h-6" />
            </a>
          </div>
          
          <div className="border-t border-gray-800 pt-8">
            <p className="text-gray-400 text-sm">
              Copyright © 2025 Himel Computer. All Rights Reserved.
            </p>
            <p className="text-gray-500 text-xs mt-2">
              Website developed by Professional Web Developer
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
