"use client";

import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setFormData({
      name: "",
      email: "",
      phone: "",
      message: "",
    });
    alert("Thank you! We will get back to you soon.");
  };

  return (
    <section id="contact" className="py-20 px-4 bg-primary text-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold font-raleway mb-4">
            Get in Touch
          </h2>
          <p className="text-lg text-gray-100">
            Have questions? We are here to help you find the perfect property.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="max-w-2xl mx-auto bg-white p-8 rounded-lg border border-gray-200 shadow-lg"
        >
          <div className="mb-6">
            <label
              htmlFor="name"
              className="block text-sm font-semibold text-gray-700 mb-2 font-raleway"
            >
              Full Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Your full name"
              className="w-full px-4 py-3 bg-white border border-gray-200 rounded text-gray-800 placeholder-gray-400 focus:border-primary outline-none transition-colors"
            />
          </div>

          <div className="mb-6">
            <label
              htmlFor="email"
              className="block text-sm font-semibold text-gray-700 mb-2 font-raleway"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="your.email@example.com"
              className="w-full px-4 py-3 bg-white border border-gray-200 rounded text-gray-800 placeholder-gray-400 focus:border-primary outline-none transition-colors"
            />
          </div>

          <div className="mb-6">
            <label
              htmlFor="phone"
              className="block text-sm font-semibold text-gray-700 mb-2 font-raleway"
            >
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="+254 xxx xxx xxx"
              className="w-full px-4 py-3 bg-white border border-gray-200 rounded text-gray-800 placeholder-gray-400 focus:border-primary outline-none transition-colors"
            />
          </div>

          <div className="mb-6">
            <label
              htmlFor="message"
              className="block text-sm font-semibold text-gray-700 mb-2 font-raleway"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={5}
              placeholder="Tell us about your property needs..."
              className="w-full px-4 py-3 bg-white border border-gray-200 rounded text-gray-800 placeholder-gray-400 focus:border-primary outline-none transition-colors"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full md:w-auto block mx-auto bg-gold text-primary px-8 py-3 rounded-full font-bold hover:bg-white transition-colors duration-300"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
