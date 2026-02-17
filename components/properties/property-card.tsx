"use client";

import Image from "next/image";
import { motion } from "motion/react";
import type { Property } from "@/types/property";

function formatPrice(price: number, currency: string) {
    return `${currency}${price.toLocaleString()}`;
}

function formatLocation(loc: Property["location"]) {
    return `${loc.country}/${loc.region}/${loc.city}`;
}

export default function PropertyCard({ property }: { property: Property }) {
    return (
        <motion.div
            whileHover={{ y: -4 }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-400 border border-gray-100"
        >
            {/* Image */}
            <div className="relative h-52 overflow-hidden">
                <Image
                    src={property.image}
                    alt={property.name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
            </div>

            {/* Content */}
            <div className="p-5">
                {/* Name + Price */}
                <div className="flex items-start justify-between gap-2 mb-1.5">
                    <h3 className="text-base font-bold text-gray-900 font-raleway leading-snug">
                        {property.name}
                    </h3>
                    <span className="text-base font-bold text-gray-900 whitespace-nowrap">
                        {formatPrice(property.price, property.currency)}
                    </span>
                </div>

                {/* Location */}
                <p className="text-xs text-gray-400 mb-4">
                    {formatLocation(property.location)}
                </p>

                {/* Specs row */}
                <div className="flex items-center gap-4 text-xs text-gray-500 pt-3 border-t border-gray-100">
                    <span className="flex items-center gap-1">
                        <svg className="w-3.5 h-3.5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 8V6a2 2 0 012-2h12a2 2 0 012 2v2M4 8v10a2 2 0 002 2h12a2 2 0 002-2V8M4 8h16" />
                        </svg>
                        {property.specs.areaSqM} m²
                    </span>
                    <span className="flex items-center gap-1">
                        <svg className="w-3.5 h-3.5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0H5m14 0h2m-2 0v-2M5 21H3m2 0v-2" />
                        </svg>
                        {property.specs.floors} {property.specs.floors === 1 ? "floor" : "floors"}
                    </span>
                    <span className="flex items-center gap-1">
                        <svg className="w-3.5 h-3.5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-4 0a1 1 0 01-1-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 01-1 1" />
                        </svg>
                        {property.specs.beds} beds
                    </span>
                    <span className="flex items-center gap-1">
                        <svg className="w-3.5 h-3.5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7h.01M12 7h.01M16 7h.01M3 12h18M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        {property.specs.baths} {property.specs.baths === 1 ? "bath" : "baths"}
                    </span>
                </div>
            </div>
        </motion.div>
    );
}
