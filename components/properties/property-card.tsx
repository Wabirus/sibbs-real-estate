"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { Button } from "@/components/ui/button";

interface PropertyProps {
    id: string;
    title: string;
    price: string;
    address: string;
    image: string;
    beds: number;
    baths: number;
    sqft: number;
    type: string;
}

export default function PropertyCard({ property }: { property: PropertyProps }) {
    return (
        <motion.div
            whileHover={{ y: -5 }}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 border border-gray-100 group"
        >
            {/* Image Container */}
            <div className="relative h-64 overflow-hidden">
                <Image
                    src={property.image}
                    alt={property.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4 bg-primary text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                    {property.type}
                </div>
                <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-lg shadow-sm font-bold text-primary">
                    {property.price}
                </div>
            </div>

            {/* Content */}
            <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2 font-primary truncate">
                    {property.title}
                </h3>
                <p className="text-gray-500 text-sm mb-4 flex items-center">
                    <svg className="w-4 h-4 mr-1 fill-current" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                    </svg>
                    {property.address}
                </p>

                {/* Features */}
                <div className="flex justify-between items-center text-sm text-gray-600 border-t pt-4">
                    <div className="flex items-center gap-1">
                        <span className="font-bold text-gray-900">{property.beds}</span> Beds
                    </div>
                    <div className="flex items-center gap-1">
                        <span className="font-bold text-gray-900">{property.baths}</span> Baths
                    </div>
                    <div className="flex items-center gap-1">
                        <span className="font-bold text-gray-900">{property.sqft}</span> Sqft
                    </div>
                </div>

                <div className="mt-4 pt-2">
                    <Button variant="outline" className="w-full border-primary text-primary hover:bg-primary hover:text-white transition-colors">
                        View Details
                    </Button>
                </div>
            </div>
        </motion.div>
    );
}
