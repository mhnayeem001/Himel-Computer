import { Monitor } from "lucide-react";

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">About Us</h2>
          <div className="w-24 h-1 bg-primary mx-auto"></div>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="bg-gray-50 rounded-xl p-8 md:p-12">
            <div className="text-center mb-8">
              <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Monitor className="text-white text-2xl w-8 h-8" />
              </div>
            </div>
            
            <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
              <p>
                <strong>Himel Computer</strong> is a full-service digital center based in Kadda Bazar, Ward 13, Gazipur City, owned and operated by <strong>MD. Ahsan Habib</strong>.
              </p>
              
              <p>
                The business offers a range of digital, printing, and online services for students, local businesses, and individuals.
              </p>
              
              <p>
                Known for <span className="text-primary font-semibold">fast delivery</span>, <span className="text-accent font-semibold">affordability</span>, and <span className="text-primary font-semibold">personalized customer support</span>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
