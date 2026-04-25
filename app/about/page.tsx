import { Building2, Package, ShieldCheck, Globe } from "lucide-react";

export default function About() {
  return (
    <main className="bg-white text-gray-900">

      <section className="max-w-6xl mx-auto px-6 py-20">

        {/* HEADER */}
        <h1 className="text-4xl font-bold mb-4">
          About Purfavor
        </h1>

        <p className="text-gray-600 max-w-2xl mb-12">
          Purfavor is a UK-based retail distribution company focused on building
          long-term partnerships with brands, manufacturers, and authorized
          distributors through structured marketplace operations.
        </p>

        {/* MAIN GRID */}
        <div className="grid md:grid-cols-2 gap-10 items-start">

          {/* LEFT CONTENT */}
          <div className="space-y-6 text-gray-700 leading-relaxed">

            <p>
              Purfavor operates under MAM Enterprise Ltd and specializes in
              sourcing products directly from brands and authorized distributors.
              Our core focus is on maintaining compliance, ensuring pricing
              integrity, and delivering consistent product representation across
              Amazon and other online marketplaces.
            </p>

            <p>
              We follow an inventory-based model, meaning we purchase products
              upfront rather than relying on dropshipping or arbitrage methods.
              This allows us to maintain full control over inventory, quality,
              and customer experience while ensuring alignment with brand
              expectations.
            </p>

            <p>
              While based in the United Kingdom, Purfavor actively supports
              distribution across both Amazon UK and Amazon US marketplaces,
              enabling brand partners to expand into key international regions
              through structured and compliant operations.
            </p>

            <p>
              Our approach is centered on long-term relationships. We aim to work
              closely with brand partners to create sustainable growth,
              transparent communication, and reliable distribution channels
              that protect brand value.
            </p>

          </div>

          {/* RIGHT HIGHLIGHTS */}
          <div className="grid gap-6">

            <HighlightCard
              icon={<Building2 />}
              title="Registered UK Business"
              text="Purfavor operates under MAM Enterprise Ltd, a registered company based in Coventry, United Kingdom."
            />

            <HighlightCard
              icon={<Package />}
              title="Inventory-Based Model"
              text="We purchase inventory directly from approved sources, ensuring traceability and supply chain integrity."
            />

            <HighlightCard
              icon={<ShieldCheck />}
              title="Compliance & Brand Protection"
              text="We strictly follow MAP policies and authorized reseller agreements to protect brand value."
            />

            <HighlightCard
              icon={<Globe />}
              title="Marketplace Expertise"
              text="We manage product distribution across Amazon with a focus on consistency, performance, and growth."
            />

          </div>

        </div>

        {/* MISSION SECTION */}
        <div className="mt-16 bg-blue-50 border rounded-2xl p-8">

          <h2 className="text-2xl font-semibold mb-4">
            Our Mission
          </h2>

          <p className="text-gray-700 max-w-3xl">
            Our mission is to build reliable and transparent partnerships with
            brands by providing structured marketplace distribution, maintaining
            pricing integrity, and delivering consistent long-term value across
            all sales channels.
          </p>

        </div>

      </section>

    </main>
  );
}

/* COMPONENT */

function HighlightCard({ icon, title, text }: any) {
  return (
    <div className="bg-white border rounded-xl p-5 shadow-sm hover:shadow-md transition">

      <div className="flex items-start gap-4">
        <div className="w-10 h-10 flex items-center justify-center bg-blue-100 text-blue-600 rounded-lg">
          {icon}
        </div>

        <div>
          <h3 className="font-semibold mb-1">
            {title}
          </h3>
          <p className="text-sm text-gray-600">
            {text}
          </p>
        </div>
      </div>

    </div>
  );
}