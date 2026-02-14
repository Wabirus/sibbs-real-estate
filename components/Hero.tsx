"use client";

import Image from "next/image";
import { motion } from "motion/react";
import {
  fadeUp,
  slideRight,
  staggerContainer,
  springGentle,
  viewportConfig,
} from "@/lib/animations";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-[85vh] bg-white pt-28 pb-16 flex items-center overflow-hidden"
    >
      {/* Subtle background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-primary/3 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gold/5 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 w-full relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* ─── Left — Text Content ────────────────────────── */}
          <motion.div
            className="flex-1 text-center lg:text-left"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            {/* Heading */}
            <motion.h1
              variants={fadeUp}
              transition={{ ...springGentle, delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-[3.5rem] xl:text-6xl font-extrabold mb-6 font-raleway leading-[1.08] tracking-tight text-gray-900"
            >
              Find a place you
              <br />
              will call{" "}
              <span className="text-primary">home</span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              variants={fadeUp}
              transition={{ ...springGentle, delay: 0.2 }}
              className="text-base md:text-lg text-gray-500 font-nunito mb-10 max-w-md mx-auto lg:mx-0 leading-relaxed"
            >
              With us you will find not just accommodation, but a place where
              your new life begins, full of coziness and possibilities.
            </motion.p>

            {/* CTA button */}
            <motion.div
              variants={fadeUp}
              transition={{ ...springGentle, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2.5 bg-gray-900 text-white px-8 py-3.5 rounded-lg font-semibold text-base hover:bg-gray-800 hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5"
              >
                Book a call
              </a>
            </motion.div>
          </motion.div>

          {/* ─── Right — Hero Image ─────────────────────────── */}
          <motion.div
            className="flex-1 w-full max-w-xl lg:max-w-none"
            variants={slideRight}
            initial="hidden"
            animate="visible"
            transition={{ ...springGentle, delay: 0.25 }}
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200&h=800&fit=crop"
                alt="Modern luxury home exterior"
                width={1200}
                height={800}
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover w-full h-auto"
                priority
              />
              {/* Image overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
