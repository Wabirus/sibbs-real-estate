"use client";

const services = [
  {
    title: "Property Sales",
    description:
      "Find your dream property from our extensive portfolio of prime real estate opportunities.",
    icon: "fas fa-home",
  },
  {
    title: "Land Investment",
    description:
      "Secure your future with high-return land investment opportunities in premium locations.",
    icon: "fas fa-chart-line",
  },
  {
    title: "Rental Management",
    description:
      "Hassle-free property management services to maximize your rental income.",
    icon: "fas fa-building",
  },
  {
    title: "Consultancy",
    description:
      "Expert advice and guidance on real estate investments and market trends.",
    icon: "fas fa-handshake",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 px-4 bg-primary text-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-raleway mb-4">
            Our Services
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="bg-white/10 backdrop-blur-sm border-t-4 border-gold p-6 rounded-lg hover:-translate-y-2 transition-all duration-300 hover:shadow-2xl"
            >
              <div className="text-5xl text-gold mb-4 h-16 flex items-center justify-center">
                <i className={service.icon}></i>
              </div>
              <h3 className="text-xl font-bold font-raleway text-gold mb-3">
                {service.title}
              </h3>
              <p className="text-gray-100 text-sm leading-relaxed font-nunito">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
