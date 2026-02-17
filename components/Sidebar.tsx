"use client";

import Image from "next/image";
import { motion } from "motion/react";
import {
    fadeUp,
    staggerContainer,
    staggerItem,
    springGentle,
    viewportConfig,
} from "@/lib/animations";
import { sidebarProperties, agent, investmentStats } from "@/data/properties";
import type { Property } from "@/types/property";

function formatPrice(price: number, currency: string) {
    return `${currency}${price.toLocaleString()}`;
}

function SidebarPropertyCard({ property }: { property: Property }) {
    return (
        <div className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300">
            <div className="relative h-40 overflow-hidden">
                <Image
                    src={property.image}
                    alt={property.name}
                    fill
                    sizes="300px"
                    className="object-cover"
                />
            </div>
            <div className="p-4">
                <div className="flex justify-between items-start mb-1">
                    <h4 className="text-sm font-bold text-gray-900">{property.name}</h4>
                    <span className="text-sm font-bold text-gray-900">
                        {formatPrice(property.price, property.currency)}
                    </span>
                </div>
                <p className="text-xs text-gray-400 mb-3">
                    {property.location.country}/{property.location.region}/{property.location.city}
                </p>
                <div className="flex items-center gap-3 text-[11px] text-gray-500">
                    <span className="flex items-center gap-0.5">
                        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 8V6a2 2 0 012-2h12a2 2 0 012 2v2M4 8v10a2 2 0 002 2h12a2 2 0 002-2V8M4 8h16" /></svg>
                        {property.specs.areaSqM} m²
                    </span>
                    <span className="flex items-center gap-0.5">
                        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0H5m14 0h2m-2 0v-2M5 21H3m2 0v-2" /></svg>
                        {property.specs.floors} floors
                    </span>
                    <span className="flex items-center gap-0.5">
                        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-4 0a1 1 0 01-1-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 01-1 1" /></svg>
                        {property.specs.beds} beds
                    </span>
                    <span className="flex items-center gap-0.5">
                        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7h.01M12 7h.01M16 7h.01M3 12h18M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                        {property.specs.baths} ba
                    </span>
                </div>
            </div>
        </div>
    );
}

export default function Sidebar() {
    return (
        <motion.aside
            className="w-full lg:w-80 xl:w-96 shrink-0 space-y-6"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
        >
            {/* ── Sidebar Property Cards ──────────────────── */}
            {sidebarProperties.map((property) => (
                <motion.div key={property.id} variants={staggerItem}>
                    <SidebarPropertyCard property={property} />
                </motion.div>
            ))}

            {/* ── Description block ───────────────────────── */}
            <motion.div
                variants={staggerItem}
                className="bg-gray-50 rounded-xl p-5 text-sm text-gray-500 leading-relaxed"
            >
                <p>
                    Virtual tours, curated listings, and expert guidance — everything you
                    need to explore and buy with confidence.
                </p>
            </motion.div>

            {/* ── Agent card ──────────────────────────────── */}
            <motion.div
                variants={staggerItem}
                className="bg-white rounded-xl p-5 shadow-sm border border-gray-100"
            >
                <div className="flex items-center gap-3 mb-3">
                    <div className="relative w-14 h-14 rounded-full overflow-hidden ring-2 ring-gray-100">
                        <Image
                            src={agent.avatar}
                            alt={agent.name}
                            fill
                            sizes="56px"
                            className="object-cover"
                        />
                    </div>
                    <div>
                        <h4 className="text-sm font-bold text-gray-900">{agent.name}</h4>
                        <p className="text-xs text-gray-400">{agent.role}</p>
                    </div>
                </div>

                {/* Rating */}
                <div className="flex items-center gap-2 mb-4">
                    <span className="text-lg font-bold text-gray-900">{agent.rating}</span>
                    <div className="flex gap-0.5">
                        {[1, 2, 3, 4, 5].map((star) => (
                            <svg
                                key={star}
                                className={`w-4 h-4 ${star <= Math.floor(agent.rating) ? "text-yellow-400" : star - 0.5 <= agent.rating ? "text-yellow-400" : "text-gray-200"}`}
                                fill="currentColor"
                                viewBox="0 0 20 20"
                            >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                        ))}
                    </div>
                    <span className="text-xs text-gray-400">{agent.reviewCount} reviews</span>
                </div>

                {/* Action buttons */}
                <div className="flex gap-2">
                    <button className="flex-1 flex items-center justify-center gap-1.5 bg-white border border-gray-200 rounded-lg py-2.5 text-sm font-semibold text-gray-600 hover:border-gray-400 transition-colors">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                        </svg>
                    </button>
                    <button className="flex-[3] bg-gray-900 text-white rounded-lg py-2.5 text-sm font-semibold hover:bg-gray-800 transition-colors flex items-center justify-center gap-1.5">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                        {agent.phone}
                    </button>
                </div>
            </motion.div>

            {/* ── Investment Stats ────────────────────────── */}
            <motion.div
                variants={staggerItem}
                className="bg-white rounded-xl p-5 shadow-sm border border-gray-100 space-y-5"
            >
                <p className="text-xs text-gray-500 leading-relaxed">
                    Our assets are not just square meters, it&apos;s an opportunity for your
                    capital to work for you.
                </p>
                <p className="text-xs text-gray-500 leading-relaxed">
                    We carefully select the best investment offers for our clients.
                </p>

                {/* Stats rows */}
                <div className="space-y-4 pt-2">
                    {investmentStats.map((stat, i) => (
                        <div key={i} className="flex items-center justify-between py-2 border-b border-gray-50 last:border-0">
                            <div>
                                <p className="text-xs text-gray-400 mb-0.5">{stat.label}</p>
                                <p className="text-2xl font-bold text-gray-900">{stat.roi}</p>
                            </div>
                            <div className="text-right">
                                <p className="text-lg font-bold text-gray-900">{stat.price}</p>
                                <p className="text-[10px] text-gray-400 uppercase tracking-wider">Return</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Mini bar chart decoration */}
                <div className="flex items-end justify-center gap-1 h-16 pt-2">
                    {[40, 65, 45, 80, 55, 70, 60, 90, 50, 75].map((h, i) => (
                        <div
                            key={i}
                            className="w-2 bg-gray-200 rounded-full transition-all hover:bg-primary"
                            style={{ height: `${h}%` }}
                        />
                    ))}
                </div>
            </motion.div>
        </motion.aside>
    );
}
