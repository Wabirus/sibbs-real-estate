"use client";

import { useState } from "react";
import { motion } from "motion/react";
import {
    fadeUp,
    staggerContainer,
    staggerItem,
    sectionReveal,
    springGentle,
    viewportConfig,
} from "@/lib/animations";
import type { FilterTab } from "@/types/property";

const tabs: { key: FilterTab; label: string }[] = [
    { key: "buy", label: "Buy" },
    { key: "rent", label: "Rent" },
    { key: "new", label: "New developments" },
    { key: "commercial", label: "Commercial properties" },
];

export default function SearchFilters() {
    const [activeTab, setActiveTab] = useState<FilterTab>("buy");
    const [showMore, setShowMore] = useState(false);

    return (
        <section className="py-20 px-4 bg-white">
            <div className="max-w-7xl mx-auto">
                {/* ── Section heading ───────────────────────────── */}
                <motion.div
                    className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12"
                    variants={sectionReveal}
                    initial="hidden"
                    whileInView="visible"
                    viewport={viewportConfig}
                >
                    <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-extrabold font-raleway text-gray-900 leading-tight tracking-tight">
                        We help you find the
                        <br />
                        home that will be yours
                    </h2>
                    <p className="text-gray-500 text-sm leading-relaxed max-w-sm">
                        Our projects are about harmony, style and care that everyone lives
                        in what is really important to them.
                    </p>
                </motion.div>

                {/* ── Tabs ──────────────────────────────────────── */}
                <motion.div
                    className="flex flex-wrap gap-2 mb-8"
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={viewportConfig}
                    transition={springGentle}
                >
                    {tabs.map((tab) => (
                        <button
                            key={tab.key}
                            onClick={() => setActiveTab(tab.key)}
                            className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 border ${activeTab === tab.key
                                    ? "bg-gray-900 text-white border-gray-900"
                                    : "bg-white text-gray-600 border-gray-200 hover:border-gray-400 hover:text-gray-900"
                                }`}
                        >
                            {tab.label}
                        </button>
                    ))}
                </motion.div>

                {/* ── Filters row ──────────────────────────────── */}
                <motion.div
                    className="flex flex-col lg:flex-row lg:items-center gap-4 mb-4"
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={viewportConfig}
                >
                    {/* Country */}
                    <motion.div variants={staggerItem} className="flex-1">
                        <div className="relative">
                            <select className="w-full appearance-none bg-white border border-gray-200 rounded-lg px-4 py-3 text-sm text-gray-700 focus:border-primary focus:ring-2 focus:ring-primary/10 outline-none transition-all pr-10">
                                <option>All countries</option>
                                <option>USA</option>
                                <option>Portugal</option>
                                <option>Greece</option>
                                <option>Mexico</option>
                                <option>Caribbean</option>
                            </select>
                            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-gray-400">
                                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            </div>
                        </div>
                    </motion.div>

                    {/* Property type */}
                    <motion.div variants={staggerItem} className="flex-1">
                        <div className="relative">
                            <select className="w-full appearance-none bg-white border border-gray-200 rounded-lg px-4 py-3 text-sm text-gray-700 focus:border-primary focus:ring-2 focus:ring-primary/10 outline-none transition-all pr-10">
                                <option>New property</option>
                                <option>Resale</option>
                                <option>Off-plan</option>
                            </select>
                            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-gray-400">
                                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            </div>
                        </div>
                    </motion.div>

                    {/* Price range */}
                    <motion.div variants={staggerItem} className="flex-1">
                        <div className="relative">
                            <select className="w-full appearance-none bg-white border border-gray-200 rounded-lg px-4 py-3 text-sm text-gray-700 focus:border-primary focus:ring-2 focus:ring-primary/10 outline-none transition-all pr-10">
                                <option>$280,000–$500,000</option>
                                <option>$100,000–$280,000</option>
                                <option>$500,000–$1,000,000</option>
                                <option>$1,000,000+</option>
                            </select>
                            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-gray-400">
                                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            </div>
                        </div>
                    </motion.div>

                    {/* Area size */}
                    <motion.div variants={staggerItem} className="flex-1">
                        <div className="relative">
                            <select className="w-full appearance-none bg-white border border-gray-200 rounded-lg px-4 py-3 text-sm text-gray-700 focus:border-primary focus:ring-2 focus:ring-primary/10 outline-none transition-all pr-10">
                                <option>All sizes (m²)</option>
                                <option>50–150 m²</option>
                                <option>150–300 m²</option>
                                <option>300–500 m²</option>
                                <option>500+ m²</option>
                            </select>
                            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-gray-400">
                                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>

                {/* ── Actions row ──────────────────────────────── */}
                <motion.div
                    className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={viewportConfig}
                    transition={{ ...springGentle, delay: 0.2 }}
                >
                    <button
                        onClick={() => setShowMore(!showMore)}
                        className="text-sm font-semibold text-gray-600 hover:text-gray-900 transition-colors flex items-center gap-1.5"
                    >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v12m6-6H6" />
                        </svg>
                        More options
                    </button>

                    <div className="flex items-center gap-3">
                        <button className="text-sm font-semibold text-gray-500 hover:text-gray-900 transition-colors flex items-center gap-1.5">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                            </svg>
                            Clear filters
                        </button>
                        <button className="bg-gray-900 text-white px-6 py-2.5 rounded-lg text-sm font-semibold hover:bg-gray-800 transition-colors">
                            Show properties
                        </button>
                    </div>
                </motion.div>

                {/* ── Expandable more options ──────────────────── */}
                {showMore && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="mt-6 pt-6 border-t border-gray-100 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
                    >
                        <div>
                            <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5">
                                Bedrooms
                            </label>
                            <select className="w-full appearance-none bg-white border border-gray-200 rounded-lg px-4 py-3 text-sm text-gray-700 outline-none">
                                <option>Any</option>
                                <option>1+</option>
                                <option>2+</option>
                                <option>3+</option>
                                <option>4+</option>
                                <option>5+</option>
                            </select>
                        </div>
                        <div>
                            <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5">
                                Bathrooms
                            </label>
                            <select className="w-full appearance-none bg-white border border-gray-200 rounded-lg px-4 py-3 text-sm text-gray-700 outline-none">
                                <option>Any</option>
                                <option>1+</option>
                                <option>2+</option>
                                <option>3+</option>
                            </select>
                        </div>
                        <div>
                            <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5">
                                Floors
                            </label>
                            <select className="w-full appearance-none bg-white border border-gray-200 rounded-lg px-4 py-3 text-sm text-gray-700 outline-none">
                                <option>Any</option>
                                <option>1</option>
                                <option>2</option>
                                <option>3+</option>
                            </select>
                        </div>
                        <div>
                            <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5">
                                Year built
                            </label>
                            <select className="w-full appearance-none bg-white border border-gray-200 rounded-lg px-4 py-3 text-sm text-gray-700 outline-none">
                                <option>Any</option>
                                <option>2020+</option>
                                <option>2015+</option>
                                <option>2010+</option>
                            </select>
                        </div>
                    </motion.div>
                )}
            </div>
        </section>
    );
}
