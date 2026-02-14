import PropertiesHero from "@/components/properties/hero";
import ListingGrid from "@/components/properties/listing-grid";

export default function PropertiesPage() {
    return (
        <main className="min-h-screen bg-gray-50">
            <PropertiesHero />
            <div className="container mx-auto px-4 py-16">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary font-primary">Latest Exclusive Listings</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Discover our hand-picked selection of premium properties available for sale in the most sought-after locations.
                    </p>
                </div>

                <ListingGrid />
            </div>
        </main>
    );
}
