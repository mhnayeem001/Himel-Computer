import { MapPin, Phone, Mail, Facebook } from "lucide-react";

export default function ContactSection() {
  const contactInfo = [
    {
      icon: <MapPin className="text-primary text-2xl w-6 h-6" />,
      title: "Address",
      content: (
        <p className="text-gray-600">
          Kadda Bazar, Ward 13<br />Gazipur City
        </p>
      )
    },
    {
      icon: <Phone className="text-primary text-2xl w-6 h-6" />,
      title: "Phone",
      content: (
        <p className="text-gray-600">
          <a href="tel:+8801716433877" className="text-primary hover:underline block">01716-433877</a>
          <a href="tel:+8801950905010" className="text-primary hover:underline block">01950-905010</a>
        </p>
      )
    },
    {
      icon: <Mail className="text-primary text-2xl w-6 h-6" />,
      title: "Email",
      content: (
        <p className="text-gray-600">
          <a href="mailto:himelcomputerkadda@gmail.com" className="text-primary hover:underline">
            himelcomputerkadda@gmail.com
          </a>
        </p>
      )
    },
    {
      icon: <Facebook className="text-primary text-2xl w-6 h-6" />,
      title: "Facebook",
      content: (
        <p className="text-gray-600">
          <a 
            href="https://www.facebook.com/share/1B7dF6S26E/?mibextid=wwXIfr" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-primary hover:underline"
          >
            Visit Our Page
          </a>
        </p>
      )
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Contact Us</h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-4"></div>
          <p className="text-xl text-gray-600">Get in touch with us today</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {contactInfo.map((info, index) => (
            <div key={index} className="bg-white rounded-xl p-6 shadow-lg text-center">
              <div className="w-16 h-16 bg-primary bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-4">
                {info.icon}
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{info.title}</h3>
              {info.content}
            </div>
          ))}
        </div>
        
        {/* Call to Action */}
        <div className="text-center mt-12">
          <div className="bg-primary rounded-xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Ready to get started?</h3>
            <p className="text-lg mb-6">Contact us today for all your digital service needs</p>
            <a 
              href="tel:+8801716433877" 
              className="inline-block bg-white text-primary font-semibold py-3 px-6 rounded-lg hover:bg-gray-100 transition-colors duration-200"
            >
              Call Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
