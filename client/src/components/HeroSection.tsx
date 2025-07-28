import { useEffect, useState } from "react";

export default function HeroSection() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      const offsetTop = element.offsetTop - 64;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <section id="home" className="relative pt-20 min-h-[90vh] flex items-center overflow-hidden" aria-label="Hero Section">
      {/* Container with background image */}
      <div
        className="absolute inset-0"
        aria-hidden="true"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=1470&q=80')",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          filter: "brightness(0.5)",
          zIndex: 0,
        }}
      ></div>

      {/* Content wrapper with z-index to be above bg */}
      <div className="relative max-w-7xl mx-auto px-6 sm:px-12 lg:px-16 py-12 lg:py-24 text-center w-full z-10">
        <div
          className={`transform transition-opacity transition-transform duration-700 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h1 className="text-white font-extrabold text-4xl md:text-5xl lg:text-6xl leading-tight tracking-tight mb-6 relative inline-block">
            Welcome to{" "}
            <span className="text-primary underline decoration-primary/40 decoration-4">
              Himel Computer
            </span>
          </h1>

          <p className="text-gray-200 text-lg md:text-xl max-w-2xl mx-auto mb-10 tracking-wide leading-relaxed">
            Your trusted partner for{" "}
            <span className="font-semibold text-white">digital solutions</span> and{" "}
            <span className="font-semibold text-white">online services</span> in Gazipur
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {[
              {
                text: "Fast Service",
                bg: "bg-primary/70",
                textColor: "text-white",
                border: "border-primary/90",
              },
              {
                text: "Reliable Support",
                bg: "bg-emerald-600/80",
                textColor: "text-white",
                border: "border-emerald-700/90",
              },
              {
                text: "Affordable Pricing",
                bg: "bg-amber-600/80",
                textColor: "text-white",
                border: "border-amber-700/90",
              },
            ].map(({ text, bg, textColor, border }) => (
              <span
                key={text}
                className={`${bg} ${textColor} ${border} px-5 py-2 rounded-md text-sm font-semibold border shadow-sm cursor-default`}
                aria-label={text}
              >
                {text}
              </span>
            ))}
          </div>

          <button
            onClick={scrollToContact}
            className="group relative inline-flex items-center justify-center bg-primary hover:bg-blue-700 text-white font-semibold text-lg px-10 py-4 rounded-lg shadow-md transition duration-300 transform hover:scale-[1.05] focus:outline-none focus:ring-4 focus:ring-primary/50"
            aria-label="Contact Himel Computer"
          >
            Contact Now
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="ml-3 h-5 w-5 text-white transition-transform duration-300 group-hover:translate-x-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>

          <p className="mt-16 pt-6 text-center text-gray-300 text-sm tracking-wide border-t border-gray-500/30 max-w-xs mx-auto">
            Proudly serving the people of Gazipur since 2017.
          </p>
        </div>
      </div>
    </section>
  );
}