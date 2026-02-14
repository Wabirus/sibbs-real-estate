"use client";

import Image from "next/image";
import { motion } from "motion/react";
import {
    fadeUp,
    slideLeft,
    slideRight,
    sectionReveal,
    springGentle,
    viewportConfig,
} from "@/lib/animations";

export default function HowItWorks() {
    return (
        <section className="py-20 px-4 bg-white">
            <div className="max-w-7xl mx-auto">
                {/* ── Section heading ───────────────────────────── */}
                <motion.div
                    className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-14"
                    variants={sectionReveal}
                    initial="hidden"
                    whileInView="visible"
                    viewport={viewportConfig}
                >
                    <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-extrabold font-raleway text-gray-900 leading-tight tracking-tight">
                        See what we offer
                        <br />
                        and how it works
                    </h2>
                    <p className="text-gray-500 text-sm leading-relaxed max-w-sm">
                        Virtual tours, curated listings, and expert guidance — everything
                        you need to explore and buy with confidence.
                    </p>
                </motion.div>

                {/* ── Property Selection Block ───────────────── */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
                    {/* Left — Text content */}
                    <motion.div
                        className="bg-gray-50 rounded-2xl p-8 lg:p-10 flex flex-col justify-center"
                        variants={slideLeft}
                        initial="hidden"
                        whileInView="visible"
                        viewport={viewportConfig}
                        transition={springGentle}
                    >
                        <h3 className="text-2xl md:text-3xl font-extrabold font-raleway text-gray-900 mb-4 leading-tight">
                            Property
                            <br />
                            selection
                        </h3>
                        <p className="text-sm text-gray-500 leading-relaxed mb-6 max-w-md">
                            Agent provides a tailored list of verified listings. Includes
                            photos, 3D tours, and offline/online viewings.
                        </p>
                        <div>
                            <a
                                href="#contact"
                                className="inline-flex items-center gap-2 bg-white border border-gray-200 text-gray-900 px-6 py-2.5 rounded-lg text-sm font-semibold hover:border-gray-400 hover:shadow-sm transition-all duration-200"
                            >
                                Get consultation
                            </a>
                        </div>
                    </motion.div>

                    {/* Right — Image grid */}
                    <motion.div
                        className="grid grid-cols-2 gap-3 h-full"
                        variants={slideRight}
                        initial="hidden"
                        whileInView="visible"
                        viewport={viewportConfig}
                        transition={springGentle}
                    >
                        <div className="relative rounded-xl overflow-hidden min-h-[200px]">
                            <Image
                                src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=500&h=600&fit=crop"
                                alt="Modern property interior"
                                fill
                                sizes="(max-width: 1024px) 50vw, 25vw"
                                className="object-cover hover:scale-105 transition-transform duration-700"
                            />
                        </div>
                        <div className="relative rounded-xl overflow-hidden min-h-[200px]">
                            <Image
                                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=500&h=600&fit=crop"
                                alt="Luxury property exterior"
                                fill
                                sizes="(max-width: 1024px) 50vw, 25vw"
                                className="object-cover hover:scale-105 transition-transform duration-700"
                            />
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
