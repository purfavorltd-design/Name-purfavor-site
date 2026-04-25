import {
  Package,
  ShoppingCart,
  Search,
  ShieldCheck,
  BarChart3,
  Handshake
} from "lucide-react";

export default function Services() {
  return (
    <main className="bg-white text-gray-900">

      <section className="max-w-6xl mx-auto px-6 py-20">

        {/* Header */}
        <h1 className="text-4xl font-bold mb-4">
          Our Services
        </h1>

        <p className="text-gray-600 max-w-2xl mb-12">
          We provide structured, compliant, and scalable marketplace distribution
          services designed to support brands, manufacturers, and authorized
          distributors across Amazon and other online channels.
        </p>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-8">

          {/* Service Card */}
          <ServiceCard
            icon={<Package />}
            title="Amazon Marketplace Distribution"
            description="We manage product distribution across Amazon UK and Amazon US marketplaces with a focus on compliance, consistency, and long-term brand positioning."
            points={[
              "Listing management & optimization",
              "Fulfillment coordination (FBA)",
              "Consistent pricing enforcement"
            ]}
          />

          <ServiceCard
            icon={<ShoppingCart />}
            title="Wholesale Inventory Purchasing"
            points={[
              "Bulk purchasing agreements",
              "Verified sourcing only",
              "No dropshipping model"
            ]}
          />

          <ServiceCard
            icon={<Search />}
            title="Listing Optimization"
            points={[
              "SEO-focused titles & descriptions",
              "Image & content optimization",
              "Keyword & category alignment"
            ]}
          />

          <ServiceCard
            icon={<ShieldCheck />}
            title="Brand Protection & Compliance"
            points={[
              "MAP policy adherence",
              "Controlled distribution",
              "Authorized reseller compliance"
            ]}
          />

          <ServiceCard
            icon={<BarChart3 />}
            title="Marketplace Account Management"
            points={[
              "Order & inventory monitoring",
              "Customer experience management",
              "Performance tracking"
            ]}
          />

          <ServiceCard
            icon={<Handshake />}
            title="Long-Term Distribution Partnerships"
            points={[
              "Ongoing inventory purchasing",
              "Strategic growth alignment",
              "Reliable partnership structure"
            ]}
          />

        </div>

      </section>
    </main>
  );
}

/* COMPONENT */

function ServiceCard({ icon, title, description, points }: any) {
  return (
    <div className="bg-white border rounded-2xl p-6 shadow-sm hover:shadow-lg transition">

      {/* Icon */}
      <div className="w-12 h-12 flex items-center justify-center bg-blue-100 text-blue-600 rounded-xl mb-4">
        {icon}
      </div>

      {/* Title */}
      <h3 className="text-xl font-semibold mb-3">
        {title}
      </h3>

      {description ? (
        <p className="text-sm text-gray-600 mb-4">
          {description}
        </p>
      ) : null}

      {/* Points */}
      <ul className="space-y-2 text-gray-700 text-sm">
        {points.map((point: string, index: number) => (
          <li key={index} className="flex items-center gap-2">
            <span className="text-blue-600">✔</span>
            {point}
          </li>
        ))}
      </ul>

    </div>
  );
}