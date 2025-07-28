import { 
  UserCheck, 
  DollarSign, 
  Clock, 
  Wrench, 
  Heart, 
  MapPin 
} from "lucide-react";

export default function WhyUsSection() {
  const reasons = [
    {
      icon: <UserCheck className="text-accent text-2xl w-6 h-6" />,
      title: "Owner-led Operation",
      description: "Years of experience with personalized service and direct owner involvement"
    },
    {
      icon: <DollarSign className="text-accent text-2xl w-6 h-6" />,
      title: "Affordable Pricing",
      description: "Competitive rates without compromising on quality of service"
    },
    {
      icon: <Clock className="text-accent text-2xl w-6 h-6" />,
      title: "Fast Turnaround",
      description: "Quick delivery times to meet your urgent requirements"
    },
    {
      icon: <Wrench className="text-accent text-2xl w-6 h-6" />,
      title: "All-in-One Solution",
      description: "Complete solution for print, design, and online service needs"
    },
    {
      icon: <Heart className="text-accent text-2xl w-6 h-6" />,
      title: "Trusted by Locals",
      description: "Established reputation and trusted by the Gazipur community"
    },
    {
      icon: <MapPin className="text-accent text-2xl w-6 h-6" />,
      title: "Convenient Location",
      description: "Easy to find physical location with helpful and friendly staff"
    }
  ];

  return (
    <section id="why-us" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Choose Himel Computer?</h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-4"></div>
          <p className="text-xl text-gray-600">Your trusted partner for all digital services</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <div key={index} className="text-center">
              <div className="w-20 h-20 bg-accent bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-6">
                {reason.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{reason.title}</h3>
              <p className="text-gray-600">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
