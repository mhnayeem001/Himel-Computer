export default function HeroSection() {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      const offsetTop = element.offsetTop - 64;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="home" className="pt-16 bg-gradient-to-br from-blue-50 to-white min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center fade-in">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Welcome to <span className="text-primary">Himel Computer</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-4">
            Your Trusted Digital & Online Service Partner in Gazipur
          </p>
          <div className="flex justify-center items-center space-x-2 mb-8">
            <span className="bg-accent text-white px-3 py-1 rounded-full text-sm font-medium">Fast</span>
            <span className="text-gray-400">•</span>
            <span className="bg-accent text-white px-3 py-1 rounded-full text-sm font-medium">Reliable</span>
            <span className="text-gray-400">•</span>
            <span className="bg-accent text-white px-3 py-1 rounded-full text-sm font-medium">Affordable</span>
          </div>
          <button
            onClick={scrollToContact}
            className="inline-block bg-primary text-white font-semibold py-4 px-8 rounded-lg hover:bg-blue-700 transition-colors duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            Contact Now
          </button>
        </div>
      </div>
    </section>
  );
}
