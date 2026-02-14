"use client";

import PropertyCard from "@/components/properties/property-card";

// Mock Data
const PROPERTIES = [
    {
        id: "1",
        title: "Modern Villa in Karen",
        price: "$850,000",
        address: "Karen, Nairobi",
        image: "/images/4c5eb4c66b6b917a99188a736b34892a.webp", // Reusing the hero image as I don't have others validated
        beds: 5,
        baths: 4,
        sqft: 4500,
        type: "Sale",
    },
    {
        id: "2",
        title: "Luxury Apartment in Westlands",
        price: "$250,000",
        address: "Westlands, Nairobi",
        image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=2070&auto=format&fit=crop", // External fallback
        beds: 3,
        baths: 2,
        sqft: 2100,
        type: "Sale",
    },
    {
        id: "3",
        title: "Beachfront Condo",
        price: "$450,000",
        address: "Nyali, Mombasa",
        image: "https://images.unsplash.com/photo-1512918760532-3ed465901d19?q=80&w=2076&auto=format&fit=crop",
        beds: 3,
        baths: 3,
        sqft: 2800,
        type: "Sale",
    },
    {
        id: "4",
        title: "Cozy Suburban Home",
        price: "$180,000",
        address: "Runda, Nairobi",
        image: "https://images.unsplash.com/photo-1600596542815-22b5c1221b83?q=80&w=2075&auto=format&fit=crop",
        beds: 4,
        baths: 3,
        sqft: 3200,
        type: "Sale",
    },
    {
        id: "5",
        title: "Penthouse Suite",
        price: "$1,200,000",
        address: "Kilimani, Nairobi",
        image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2053&auto=format&fit=crop",
        beds: 4,
        baths: 5,
        sqft: 5000,
        type: "Sale",
    },
    {
        id: "6",
        title: "Serene Garden Villa",
        price: "$600,000",
        address: "Gigiri, Nairobi",
        image: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?q=80&w=2070&auto=format&fit=crop",
        beds: 5,
        baths: 5,
        sqft: 4200,
        type: "Sale",
    },
];

export default function ListingGrid() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PROPERTIES.map((property) => (
                <PropertyCard key={property.id} property={property} />
            ))}
        </div>
    );
}
