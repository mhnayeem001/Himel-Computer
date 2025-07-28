import React from "react";
import {
  Keyboard,
  Copy,
  Printer,
  FileText,
  Palette,
  Megaphone,
  Camera,
  Shield,
  Baby,
  GraduationCap,
  Globe,
  ShoppingCart  // for Accessories & Stationery
} from "lucide-react";

import { motion } from "framer-motion";

export default function ServicesSection() {
  const services = [
    {
      icon: <Keyboard />,
      title: "Document Composition & Typing",
      description: "Fast and accurate typing for all official and personal needs.",
      bgColor: "bg-blue-50",
      iconColor: "text-blue-600"
    },
    {
      icon: <Copy />,
      title: "Photocopy",
      description: "High-quality black & white or color photocopy services.",
      bgColor: "bg-green-50",
      iconColor: "text-green-600"
    },
    {
      icon: <Printer />,
      title: "Printing",
      description: "Professional printing in both black and full color.",
      bgColor: "bg-pink-50",
      iconColor: "text-pink-600"
    },
    {
      icon: <FileText />,
      title: "Dolil and Deed Writing",
      description: "Precise legal and official document drafting.",
      bgColor: "bg-yellow-50",
      iconColor: "text-yellow-600"
    },
    {
      icon: <Palette />,
      title: "Digital Banner Design",
      description: "Custom digital banners for businesses and events.",
      bgColor: "bg-purple-50",
      iconColor: "text-purple-600"
    },
    {
      icon: <Megaphone />,
      title: "Signboard & Poster",
      description: "Eye-catching posters and signage for promotions.",
      bgColor: "bg-red-50",
      iconColor: "text-red-600"
    },
    {
      icon: <Camera />,
      title: "Passport Size Photography",
      description: "Quick and professional photo capture for ID needs.",
      bgColor: "bg-indigo-50",
      iconColor: "text-indigo-600"
    },
    {
      icon: <Shield />,
      title: "Document Laminating",
      description: "Protect your documents with heat-sealed lamination.",
      bgColor: "bg-teal-50",
      iconColor: "text-teal-600"
    },
    {
      icon: <Baby />,
      title: "Online Birth Registration",
      description: "Efficient assistance for official birth registration.",
      bgColor: "bg-cyan-50",
      iconColor: "text-cyan-600"
    },
    {
      icon: <GraduationCap />,
      title: "Application Support",
      description: "End-to-end support for college/university applications.",
      bgColor: "bg-emerald-50",
      iconColor: "text-emerald-600"
    },
    {
      icon: <Globe />,
      title: "Online Services",
      description: "Comprehensive digital services from forms to utilities.",
      bgColor: "bg-orange-50",
      iconColor: "text-orange-600"
    },
    {
      icon: <ShoppingCart />,
      title: "Essential Accessories & Stationery Sale",
      description: "Wide range of office supplies and accessories for all needs.",
      bgColor: "bg-gray-50",
      iconColor: "text-gray-600"
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Our Services
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-4 rounded-full"></div>
          <p className="text-xl text-gray-600">
            Complete digital solutions for all your needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map(({ icon, title, description, bgColor, iconColor }, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className={`${bgColor} rounded-xl p-6 shadow-lg hover:shadow-xl border border-transparent hover:border-primary transition-all duration-300 group`}
            >
              <div className="text-center">
                <div
                  className={`w-16 h-16 rounded-full flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110`}
                >
                  {React.cloneElement(icon, {
                    className: `${iconColor} w-8 h-8`
                  })}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-1">
                  {title}
                </h3>
                <p className="text-sm text-gray-700">{description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <a
            href="#contact"
            className="inline-block bg-primary hover:bg-accent text-white font-semibold py-3 px-6 rounded-full shadow-lg transition-all duration-200"
          >
            Explore More
          </a>
        </div>
      </div>
    </section>
  );
}