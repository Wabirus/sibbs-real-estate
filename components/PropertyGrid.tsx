"use client";

import { motion } from "motion/react";
import {
    staggerContainer,
    sectionReveal,
    viewportConfig,
} from "@/lib/animations";
import PropertyCard from "@/components/properties/property-card";
import { properties } from "@/data/properties";

export default function PropertyGrid() {
    return (
        <div className="flex-1 min-w-0">
            {/* Section heading */}
            <motion.h2
                className="text-2xl md:text-3xl font-extrabold font-raleway text-gray-900 mb-8 tracking-tight"
                variants={sectionReveal}
                initial="hidden"
                whileInView="visible"
                viewport={viewportConfig}
            >
                New properties
            </motion.h2>

            {/* Property grid */}
            <motion.div
                className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6"
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={viewportConfig}
            >
                {properties.map((property) => (
                    <PropertyCard key={property.id} property={property} />
                ))}
            </motion.div>
        </div>
    );
}
