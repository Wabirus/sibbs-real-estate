"use client";

const properties = [
  {
    title: "Modern Apartment in Westlands",
    price: "KES 12M",
    location: "Westlands, Nairobi",
  },
  {
    title: "Spacious Villa in Kilimani",
    price: "KES 35M",
    location: "Kilimani, Nairobi",
  },
  {
    title: "Commercial Space in CBD",
    price: "KES 8M",
    location: "CBD, Nairobi",
  },
  {
    title: "Land Plot in Nairobi South",
    price: "KES 5M",
    location: "Nairobi South",
  },
];

export default function Properties() {
  return (
    <section id="properties" className="py-20 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-raleway text-primary mb-4">
            Featured Properties
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {properties.map((property, idx) => (
            <div
              key={idx}
              className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
            >
              <div className="h-48 bg-gradient-to-br from-gray-300 to-gray-400 flex items-center justify-center text-5xl text-gray-500">
                <i className="fas fa-image"></i>
              </div>
              <div className="p-4">
                <h3 className="font-bold text-lg font-raleway text-gray-800 mb-2">
                  {property.title}
                </h3>
                <p className="text-sm text-gray-600 mb-2 flex items-center gap-1">
                  <i className="fas fa-map-marker-alt"></i> {property.location}
                </p>
                <p className="text-2xl font-bold text-gold mb-4">
                  {property.price}
                </p>
                <a
                  href="#"
                  className="inline-block bg-primary text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-primary/80 transition-colors"
                >
                  View Property
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
