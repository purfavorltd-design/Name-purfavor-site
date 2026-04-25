import { ShieldCheck, Boxes, BarChart3, Handshake } from "lucide-react";

export default function ForBrands() {
  return (
    <main className="bg-white text-gray-900">

      <section className="max-w-6xl mx-auto px-6 py-20">

        {/* Header */}
        <h1 className="text-4xl font-bold mb-4">
          Partner With Us
        </h1>

        <p className="text-gray-600 max-w-2xl mb-12">
          We partner with brands, manufacturers, and authorized distributors
          to deliver structured, compliant, and scalable marketplace distribution
          across Amazon and other online channels.
        </p>

        {/* Grid */}
        <div className="grid md:grid-cols-3 gap-8">

          {/* WHY PARTNER */}
          <div className="bg-white border rounded-2xl p-6 shadow-sm hover:shadow-lg transition">

            <div className="w-12 h-12 flex items-center justify-center bg-blue-100 text-blue-600 rounded-xl mb-4">
              <ShieldCheck />
            </div>

            <h3 className="text-xl font-semibold mb-4">
              Why Partner With Us
            </h3>

            <ul className="space-y-3 text-gray-700 text-sm">
              <li className="flex items-center gap-2">
                <span className="text-blue-600">✔</span>
                Controlled distribution
              </li>
              <li className="flex items-center gap-2">
                <span className="text-blue-600">✔</span>
                MAP compliance
              </li>
              <li className="flex items-center gap-2">
                <span className="text-blue-600">✔</span>
                Professional representation
              </li>
              <li className="flex items-center gap-2">
                <span className="text-blue-600">✔</span>
                Long-term partnership focus
              </li>
            </ul>
          </div>

          {/* PROCESS */}
          <div className="bg-white border rounded-2xl p-6 shadow-sm hover:shadow-lg transition">

            <div className="w-12 h-12 flex items-center justify-center bg-blue-100 text-blue-600 rounded-xl mb-4">
              <Boxes />
            </div>

            <h3 className="text-xl font-semibold mb-4">
              Our Process
            </h3>

            <ol className="space-y-3 text-gray-700 text-sm list-decimal list-inside">
              <li>Brand onboarding & verification</li>
              <li>Wholesale purchasing agreements</li>
              <li>Inventory scaling</li>
              <li>Marketplace distribution & sales</li>
            </ol>
          </div>

          {/* COMPLIANCE */}
          <div className="bg-white border rounded-2xl p-6 shadow-sm hover:shadow-lg transition">

            <div className="w-12 h-12 flex items-center justify-center bg-blue-100 text-blue-600 rounded-xl mb-4">
              <BarChart3 />
            </div>

            <h3 className="text-xl font-semibold mb-4">
              Compliance Statement
            </h3>

            <p className="text-gray-600 text-sm">
              We are open to signing authorized reseller agreements and strictly
              adhere to brand distribution policies, ensuring long-term pricing
              integrity and controlled marketplace representation.
            </p>

            <div className="mt-6 text-sm text-gray-700">
              <p className="mb-2">✔ No unauthorized reselling</p>
              <p className="mb-2">✔ No price undercutting</p>
              <p>✔ No dropshipping model</p>
            </div>

          </div>

        </div>

        <div className="mt-10 bg-white border rounded-2xl p-6 shadow-sm">
          <h2 className="text-2xl font-semibold mb-4">
            International Marketplace Coverage
          </h2>
          <p className="text-gray-700 leading-relaxed">
            We support brand distribution across Amazon UK and Amazon US
            marketplaces, allowing controlled expansion into key international
            regions while maintaining pricing integrity, compliance, and
            consistent brand representation.
          </p>
        </div>

        {/* CTA SECTION */}
        <div className="mt-16 bg-blue-50 border rounded-2xl p-8 flex flex-col md:flex-row items-center justify-between gap-6">

          <div className="flex items-center gap-4">
            <div className="w-12 h-12 flex items-center justify-center bg-blue-100 text-blue-600 rounded-xl">
              <Handshake />
            </div>
            <p className="text-gray-800 font-medium">
              We build partnerships based on trust, compliance, and long-term value.
            </p>
          </div>

          <a
            href="/contact"
            className="bg-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-700 transition"
          >
            Request Partnership
          </a>

        </div>

      </section>

    </main>
  );
}