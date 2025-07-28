import React from "react";
import {
  UserCheck,
  DollarSign,
  Clock,
  Wrench,
  Heart,
  MapPin,
} from "lucide-react";
import { motion } from "framer-motion";

export default function WhyUsSection() {
  const reasons = [
    {
      icon: UserCheck,
      color: "bg-blue-100 text-blue-600",
      title: "Owner-led Operation",
      description:
        "Years of experience with personalized service and direct owner involvement",
    },
    {
      icon: DollarSign,
      color: "bg-green-100 text-green-600",
      title: "Affordable Pricing",
      description:
        "Competitive rates without compromising on quality of service",
    },
    {
      icon: Clock,
      color: "bg-yellow-100 text-yellow-600",
      title: "Fast Turnaround",
      description: "Quick delivery times to meet your urgent requirements",
    },
    {
      icon: Wrench,
      color: "bg-red-100 text-red-600",
      title: "All-in-One Solution",
      description:
        "Complete solution for print, design, and online service needs",
    },
    {
      icon: Heart,
      color: "bg-pink-100 text-pink-600",
      title: "Trusted by Locals",
      description:
        "Established reputation and trusted by the Gazipur community",
    },
    {
      icon: MapPin,
      color: "bg-purple-100 text-purple-600",
      title: "Convenient Location",
      description:
        "Easy to find physical location with helpful and friendly staff",
    },
  ];

  return (
    <section id="why-us" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Why Choose Himel Computer?
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-4" />
          <p className="text-xl text-gray-600">
            Your trusted partner for all digital services
          </p>
        </div>

        {/* Reason cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`rounded-xl p-6 shadow-md hover:shadow-xl transition-all border border-transparent group ${reason.color}`}
            >
              <div className="text-center">
                <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 bg-white group-hover:animate-bounce shadow">
                  {React.createElement(reason.icon, {
                    className: `w-8 h-8 ${reason.color.split(" ")[1]}`,
                  })}
                </div>
                <h3 className="text-lg font-semibold mb-1 text-gray-900">
                  {reason.title}
                </h3>
                <p className="text-sm text-gray-700">{reason.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA button */}
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