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
  Globe 
} from "lucide-react";

export default function ServicesSection() {
  const services = [
    {
      icon: <Keyboard className="text-primary text-2xl w-6 h-6" />,
      title: "Document Composition & Typing"
    },
    {
      icon: <Copy className="text-primary text-2xl w-6 h-6" />,
      title: "Photocopy"
    },
    {
      icon: <Printer className="text-primary text-2xl w-6 h-6" />,
      title: "Printing (Black & Color)"
    },
    {
      icon: <FileText className="text-primary text-2xl w-6 h-6" />,
      title: "Dolil and Deed Writing"
    },
    {
      icon: <Palette className="text-primary text-2xl w-6 h-6" />,
      title: "Digital Banner Design"
    },
    {
      icon: <Megaphone className="text-primary text-2xl w-6 h-6" />,
      title: "Signboard & Poster (Phestun)"
    },
    {
      icon: <Camera className="text-primary text-2xl w-6 h-6" />,
      title: "Passport Size Photography (Chobi Tola)"
    },
    {
      icon: <Shield className="text-primary text-2xl w-6 h-6" />,
      title: "Document Laminating (Lemoneting)"
    },
    {
      icon: <Baby className="text-primary text-2xl w-6 h-6" />,
      title: "Online Birth Registration"
    },
    {
      icon: <GraduationCap className="text-primary text-2xl w-6 h-6" />,
      title: "College & University Application Support"
    },
    {
      icon: <Globe className="text-primary text-2xl w-6 h-6" />,
      title: "All Kinds of Online Services"
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-4"></div>
          <p className="text-xl text-gray-600">Complete digital solutions for all your needs</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-200">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-4">
                  {service.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{service.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
