import { Monitor } from "lucide-react";
import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-gray-900"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            About Us
          </motion.h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full mt-4"></div>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Text Section */}
          <motion.div
            className="space-y-6 text-gray-700 text-lg leading-relaxed"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            {/* Icon + Subheading */}
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 bg-primary rounded-full flex items-center justify-center shadow-md">
                <Monitor className="text-white w-7 h-7" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900">Empowering Digital Services</h3>
            </div>

            {/* New Refined Professional Text */}
            <p>
              <strong>Himel Computer</strong> is a locally trusted technology service provider based in{" "}
              <strong>Kadda Bazar, Gazipur City</strong>. Founded by <strong>MD. Ahsan Habib</strong>, we’ve been helping people and businesses navigate the digital world with ease for nearly a decade.
            </p>

            <p>
              Himel Computer is your one-stop hub for essential IT services. We’re committed to delivering dependable support with speed, transparency, and a strong respect for your time and budget.
            </p>

            {/* Quote Box */}
            <div className="bg-gray-50 border-l-4 border-primary p-5 rounded-xl shadow-sm">
              <p className="italic text-gray-600">
                “When someone walks into Himel Computer, we don’t just solve problems — we build trust and deliver peace of mind.”
              </p>
              <p className="mt-3 font-semibold text-gray-900">— MD. Ahsan Habib, Founder</p>
            </div>
          </motion.div>

          {/* Image Section */}
          <motion.div
            className="relative flex justify-center md:justify-end"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="w-full max-w-md md:max-w-lg rounded-3xl overflow-hidden shadow-xl border border-gray-200 transform transition-transform duration-300 hover:scale-105">
              <img
                src="https://raw.githubusercontent.com/mhnayeem001/Picture/main/ahsan%20habib.jpg"
                alt="MD. Ahsan Habib"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}