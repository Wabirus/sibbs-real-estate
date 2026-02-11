"use client";

const testimonials = [
  {
    name: "John Kipchoge",
    role: "Property Buyer",
    message:
      "SIBBS helped me find the perfect property. Their team was professional and transparent throughout the process. Highly recommended!",
  },
  {
    name: "Sarah Mwangi",
    role: "Investor",
    message:
      "I invested in a land plot through SIBBS and it has appreciated significantly. Great investment opportunity!",
  },
  {
    name: "Peter Okonkwo",
    role: "Business Owner",
    message:
      "Their rental management service is excellent. I trust them completely with my properties.",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-raleway text-primary mb-4">
            What Our Clients Say
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, idx) => (
            <div
              key={idx}
              className="bg-white border-t-4 border-gold p-8 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 text-center"
            >
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary to-primary/70 border-4 border-gold mx-auto mb-4 flex items-center justify-center text-white text-3xl">
                <i className="fas fa-user"></i>
              </div>
              <p className="text-gray-600 italic mb-6 leading-relaxed font-nunito">
                &quot;{testimonial.message}&quot;
              </p>
              <h4 className="text-lg font-bold font-raleway text-primary mb-1">
                {testimonial.name}
              </h4>
              <p className="text-sm font-semibold text-gold">
                {testimonial.role}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
