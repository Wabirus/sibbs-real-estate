// ─── Property Domain Model ──────────────────────────────────
export interface Property {
    id: string;
    name: string;
    location: {
        country: string;
        region: string;
        city: string;
    };
    price: number;
    currency: string;
    specs: {
        areaSqM: number;
        floors: number;
        beds: number;
        baths: number;
    };
    image: string;
    type: PropertyType;
    isNew?: boolean;
    isFeatured?: boolean;
}

export type PropertyType = "sale" | "rent" | "new-development" | "commercial";

// ─── Filter Types ───────────────────────────────────────────
export type FilterTab = "buy" | "rent" | "new" | "commercial";

export interface SearchCriteria {
    tab: FilterTab;
    country: string;
    propertyType: string;
    priceRange: {
        min: number;
        max: number;
    };
    areaSize: {
        min: number;
        max: number;
    };
}

// ─── Agent / Sidebar Types ──────────────────────────────────
export interface Agent {
    name: string;
    role: string;
    avatar: string;
    rating: number;
    reviewCount: number;
    phone: string;
}

export interface InvestmentStat {
    label: string;
    roi: string;
    price: string;
    description: string;
}
