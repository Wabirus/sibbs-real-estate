"use client";

import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen bg-cover bg-center bg-no-repeat pt-28 pb-16 flex items-center text-white overflow-hidden"
      style={{
        backgroundImage:
          "linear-gradient(135deg, rgba(26, 36, 115, 0.85), rgba(44, 56, 146, 0.7), rgba(61, 77, 183, 0.6)), url('https://images.unsplash.com/photo-1622130944926-6e57d833a9d5?w=2000&h=1000')",
      }}
    >
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-gold/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -right-40 w-[500px] h-[500px] bg-white/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto px-4 w-full relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Left — Text Content */}
          <div className="flex-1 text-center lg:text-left">
            <span className="inline-block bg-white/10 border border-white/20 text-gold px-4 py-1.5 rounded-full text-sm font-semibold tracking-wide mb-6 backdrop-blur-sm">
              🏠 Kenya's Premier Real Estate Partner
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-5 font-raleway leading-tight">
              Welcome to{" "}
              <span className="text-gold">SIBBS</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-200 font-nunito mb-8 max-w-lg mx-auto lg:mx-0 leading-relaxed">
              Your trusted partner in real estate investment in Kenya.
              Discover premium properties, smart land investments, and expert consultancy.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href="#properties"
                className="inline-flex items-center justify-center gap-2 bg-gold text-gray-900 px-8 py-3.5 rounded-full font-bold text-base hover:bg-yellow-300 transition-all duration-300 hover:shadow-lg hover:shadow-gold/30 hover:-translate-y-0.5"
              >
                <i className="fas fa-building" /> Explore Properties
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 bg-white/10 border border-white/30 text-white px-8 py-3.5 rounded-full font-semibold text-base hover:bg-white/20 transition-all duration-300 backdrop-blur-sm hover:-translate-y-0.5"
              >
                <i className="fas fa-phone-alt" /> Get in Touch
              </a>
            </div>
          </div>

          {/* Right — Property of the Month Card */}
          <div className="flex-1 w-full max-w-md lg:max-w-lg">
            <div className="relative">
              {/* Badge */}
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-20">
                <span className="inline-flex items-center gap-1.5 bg-gradient-to-r from-gold to-yellow-300 text-gray-900 px-5 py-2 rounded-full font-bold text-xs uppercase tracking-wider shadow-lg">
                  <i className="fas fa-star" /> Property of the Month
                </span>
              </div>

              {/* Card */}
              <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500 hover:-translate-y-1">
                {/* Image */}
                <div className="relative h-56 md:h-64 overflow-hidden">
                  <Image
                    src="/property-of-month.png"
                    alt="Property of the Month – Luxury Villa in Karen"
                    width={800}
                    height={500}
                    sizes="(max-width: 768px) 100vw, 500px"
                    className="object-cover w-full h-full hover:scale-105 transition-transform duration-700"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                  <div className="absolute bottom-3 right-3 bg-gold text-gray-900 px-4 py-1.5 rounded-full font-bold text-lg shadow-lg">
                    KES 45M
                  </div>
                </div>

                {/* Details */}
                <div className="p-5">
                  <h3 className="text-xl font-bold text-white mb-1.5 font-raleway">
                    Luxury Villa in Karen
                  </h3>
                  <div className="text-sm text-gray-300 mb-3 flex items-center gap-1.5">
                    <i className="fas fa-map-marker-alt text-gold" /> Karen, Nairobi
                  </div>

                  <div className="flex gap-5 text-sm text-gray-300 mb-4">
                    <span className="flex items-center gap-1.5">
                      <i className="fas fa-bed text-gold/80" /> 5 Beds
                    </span>
                    <span className="flex items-center gap-1.5">
                      <i className="fas fa-bath text-gold/80" /> 4 Baths
                    </span>
                    <span className="flex items-center gap-1.5">
                      <i className="fas fa-ruler-combined text-gold/80" /> 8,000 sqft
                    </span>
                  </div>

                  <a
                    href="#properties"
                    className="inline-flex items-center gap-2 bg-gold text-gray-900 px-5 py-2 rounded-full font-semibold text-sm hover:bg-white transition-colors duration-300"
                  >
                    View Details <i className="fas fa-arrow-right text-xs" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Trust indicators */}
        <div className="mt-16 pt-8 border-t border-white/10">
          <div className="flex flex-wrap items-center justify-center lg:justify-between gap-6 text-sm text-gray-300">
            <div className="flex items-center gap-2">
              <i className="fas fa-shield-alt text-gold" />
              <span>Licensed & Registered</span>
            </div>
            <div className="flex items-center gap-2">
              <i className="fas fa-handshake text-gold" />
              <span>500+ Happy Clients</span>
            </div>
            <div className="flex items-center gap-2">
              <i className="fas fa-map-marked-alt text-gold" />
              <span>Properties Across Kenya</span>
            </div>
            <div className="flex items-center gap-2">
              <i className="fas fa-clock text-gold" />
              <span>10+ Years Experience</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
