import Header from "@/components/Header";
import Hero from "@/components/Hero";
import SearchFilters from "@/components/SearchFilters";
import PropertyGrid from "@/components/PropertyGrid";
import Sidebar from "@/components/Sidebar";
import HowItWorks from "@/components/HowItWorks";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <SearchFilters />

      {/* ── Properties + Sidebar layout ──────────────── */}
      <section className="py-16 px-4 bg-surface-dim">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-8">
          <PropertyGrid />
          <Sidebar />
        </div>
      </section>

      <HowItWorks />
      <Footer />
    </>
  );
}
