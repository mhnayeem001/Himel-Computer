import React from "react";
import { MapPin, Phone, Mail, Facebook } from "lucide-react";

export default function ContactSection() {
  const contactInfo = [
    {
      icon: <MapPin />,
      title: "Address",
      colorBg: "bg-blue-100",
      colorIcon: "text-blue-600",
      content: (
        <div className="w-full h-24 rounded-lg overflow-hidden shadow-inner">
          <iframe
            title="Kadda Bazer Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1822.490754242743!2d90.34711137315604!3d23.996430069698167!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755dd95e15ebe1f%3A0x9b60e75c641d21!2sKadda%20Bazer!5e0!3m2!1sen!2sbd!4v1753727496610!5m2!1sen!2sbd"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen={false}
          />
        </div>
      ),
    },
   {
  icon: <Phone />,
  title: "Phone",
  colorBg: "bg-green-100",
  colorIcon: "text-green-600",
  content: (
    <div className="text-gray-700 font-medium text-base space-y-2">
      <a
        href="tel:+8801716433877"
        className="text-green-700 hover:underline block"
      >
        01716-433877
      </a>
      <a
        href="tel:+8801950905010"
        className="text-green-700 hover:underline block"
      >
        01950-905010
      </a>
    </div>
  ),
},
   {
  icon: <Mail className="w-6 h-6" />,
  title: "Email",
  colorBg: "bg-pink-100",
  colorIcon: "text-pink-600",
  content: (
    <div className="text-gray-700 font-medium text-base break-words">
      <a
        href="mailto:himelcomputerkadda@gmail.com"
        className="text-pink-700 hover:underline break-words"
      >
        himelcomputerkadda@gmail.com
      </a>
    </div>
  ),
},
    {
      icon: <Facebook />,
      title: "Facebook",
      colorBg: "bg-purple-100",
      colorIcon: "text-purple-600",
      content: (
        <p className="text-gray-700 font-medium">
          <a
            href="https://www.facebook.com/ownerProfileHere"
            target="_blank"
            rel="noopener noreferrer"
            className="text-purple-700 hover:underline"
          >
            Visit Owner's Facebook Profile
          </a>
        </p>
      ),
    },
  ];

  return (
    <section id="contact" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-3">
            Contact Us
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-4 rounded-full"></div>
          <p className="text-lg text-gray-600 font-medium">Feel free to contact us for any inquiries or support</p>
        </div>

        {/* Contact Info Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {contactInfo.map(({ icon, title, content, colorBg, colorIcon }, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-lg text-center transition-transform transform hover:scale-105 hover:shadow-2xl cursor-pointer"
            >
              <div
                className={`w-16 h-16 ${colorBg} rounded-full flex items-center justify-center mx-auto mb-5`}
              >
                {React.cloneElement(icon, {
                  className: `${colorIcon} w-8 h-8`,
                })}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-5">{title}</h3>
              <div className="text-sm md:text-base">{content}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}