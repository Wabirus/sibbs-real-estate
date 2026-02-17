"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select } from "@/components/ui/select";

export default function PropertiesHero() {
    return (
        <div className="relative h-[80vh] min-h-[600px] w-full overflow-hidden flex flex-col justify-center items-center text-white">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/images/4c5eb4c66b6b917a99188a736b34892a.webp"
                    alt="Luxury Home"
                    fill
                    className="object-cover"
                    priority
                // Fallback if image not found to a gray background or basic gradient
                />
                <div className="absolute inset-0 bg-black/40" /> {/* Overlay */}
            </div>

            {/* Content */}
            <div className="relative z-10 container mx-auto px-4 flex flex-col items-center text-center">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="text-4xl md:text-6xl font-bold mb-6 font-primary"
                >
                    Discover Your Dream Home
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                    className="text-lg md:text-xl mb-10 max-w-2xl"
                >
                    Explore the finest properties in the most exclusive locations. tailored just for you.
                </motion.p>

                {/* Search & Filter Bar */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
                    className="bg-white/95 backdrop-blur-sm p-4 rounded-xl shadow-lg w-full max-w-4xl grid grid-cols-1 md:grid-cols-4 gap-4"
                >
                    <div className="md:col-span-1">
                        <Select defaultValue="" className="text-black border-none shadow-none bg-transparent focus:ring-0">
                            <option value="" disabled>Location</option>
                            <option value="nairobi">Nairobi</option>
                            <option value="mombasa">Mombasa</option>
                            <option value="kisumu">Kisumu</option>
                        </Select>
                    </div>
                    <div className="md:col-span-1">
                        <Select defaultValue="" className="text-black border-none shadow-none bg-transparent focus:ring-0">
                            <option value="" disabled>Property Type</option>
                            <option value="apartment">Apartment</option>
                            <option value="villa">Villa</option>
                            <option value="land">Land</option>
                        </Select>
                    </div>
                    <div className="md:col-span-1">
                        <Select defaultValue="" className="text-black border-none shadow-none bg-transparent focus:ring-0">
                            <option value="" disabled>Price Range</option>
                            <option value="low">$100k - $200k</option>
                            <option value="med">$200k - $500k</option>
                            <option value="high">$500k+</option>
                        </Select>
                    </div>
                    <div className="md:col-span-1">
                        <Button className="w-full h-full text-lg bg-gold hover:bg-gold-light text-white rounded-lg">
                            Search
                        </Button>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
