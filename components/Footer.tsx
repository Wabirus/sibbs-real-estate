"use client";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-white py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold font-raleway text-gold mb-3">
              SIBBS
            </h3>
            <p className="text-gray-300 leading-relaxed">
              Your trusted partner in Kenyan real estate investment.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-bold font-raleway text-gold mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {[
                { href: "#home", label: "Home" },
                { href: "#properties", label: "Properties" },
                { href: "#services", label: "Services" },
                { href: "#contact", label: "Contact" },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-gold transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold font-raleway text-gold mb-4">
              Contact Info
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="tel:+254700000000"
                  className="text-gray-300 hover:text-gold transition-colors"
                >
                  +254 700 000 000
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@sibbs.co.ke"
                  className="text-gray-300 hover:text-gold transition-colors"
                >
                  info@sibbs.co.ke
                </a>
              </li>
              <li className="text-gray-300">Nairobi, Kenya</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8 text-center text-gray-400">
          <p>
            &copy; {currentYear} SIBBS Real Estate. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
