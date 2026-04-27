import {
  ShieldCheck,
  Package,
  Truck,
  Users,
  Briefcase,
  Boxes,
  Factory
} from "lucide-react";

export default function Home() {
  return (
    <main className="bg-white text-gray-900">

      {/* HERO */}
      <section className="w-full py-20">
        <div className="container-main grid md:grid-cols-2 gap-16 items-center">

          <div>
            <span className="inline-block bg-blue-50 text-blue-600 text-sm font-medium px-3 py-1 rounded-full mb-4">
              Trusted Wholesale Partner
            </span>

            <h1 className="text-5xl font-bold leading-tight mb-6">
              Authorized Online Retail Partner for Brands
            </h1>

            <p className="text-gray-600 mb-6">
              Purfavor partners with brands and authorized distributors to purchase inventory at scale,
              maintain pricing integrity, and represent products professionally across Amazon marketplaces.
              Operations support both Amazon UK and Amazon US.
            </p>

            <div className="flex flex-wrap gap-4 mb-6">
              <a href="/for-brands" className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition">
                Explore Brand Partnerships
              </a>
              <a href="/contact" className="border border-gray-300 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition">
                Contact Our Team
              </a>
            </div>

            <div className="flex flex-wrap gap-6 text-sm text-gray-600">
              <span>✔ Inventory-Based</span>
              <span>✔ MAP Compliance</span>
              <span>✔ Authorized Partnerships</span>
            </div>
          </div>

          {/* TRUST CARD */}
          <div className="bg-white border rounded-2xl p-8 shadow-md">
            <h3 className="text-xl font-semibold mb-6">Trust & Credentials</h3>
            <ul className="space-y-4 text-gray-700 text-sm">
              <li>✔ Registered Company: MAM Enterprise Ltd</li>
              <li>✔ Inventory-based wholesale model</li>
              <li>✔ Amazon UK & US operations</li>
              <li>✔ Documentation available upon request</li>
              <li>✔ Open to reseller agreements</li>
            </ul>
          </div>

        </div>
      </section>

      {/* WHO WE WORK WITH */}
      <section className="w-full py-20">
        <div className="container-main">
          <h2 className="text-3xl font-bold mb-10">Who We Work With</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <VerticalCard icon={<Briefcase />} title="Brands Seeking Distribution" text="MAP protection and long-term brand growth." />
            <VerticalCard icon={<Boxes />} title="Authorized Distributors" text="Inventory-backed and transparent operations." />
            <VerticalCard icon={<Factory />} title="Manufacturers Expanding" text="Structured marketplace entry and scaling." />
          </div>
        </div>
      </section>

      {/* HOW WE PROTECT */}
      <section className="w-full bg-gray-50 py-20">
        <div className="container-main text-center">
          <h2 className="text-3xl font-bold mb-12">How We Protect & Grow Your Brand</h2>
          <div className="grid md:grid-cols-4 gap-8">
            <VerticalCard icon={<ShieldCheck />} title="Brand Protection" text="MAP compliance and accurate representation." />
            <VerticalCard icon={<Package />} title="Inventory Model" text="Direct sourcing, no dropshipping." />
            <VerticalCard icon={<Truck />} title="Distribution" text="Consistent listings across marketplaces." />
            <VerticalCard icon={<Users />} title="Partnership" text="Long-term growth focused relationships." />
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="w-full py-20">
        <div className="container-main">
          <h2 className="text-3xl font-bold text-center mb-12">Our Partnership Process</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <ProcessCard number="1" title="Intro & Review" text="We understand your brand and goals." />
            <ProcessCard number="2" title="Compliance & Onboarding" text="Verification and setup." />
            <ProcessCard number="3" title="Launch & Reporting" text="Go live with performance tracking." />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="w-full bg-blue-50 py-16">
        <div className="container-main text-center">
          <h2 className="text-2xl font-semibold mb-4">Ready to build a long-term partnership?</h2>
          <a href="/contact" className="bg-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-700 transition">
            Request Partnership
          </a>
        </div>
      </section>

    </main>
  );
}

function VerticalCard({ icon, title, text }: any) {
  return (
    <div className="bg-white border rounded-2xl p-8 shadow-sm hover:shadow-xl hover:scale-105 transition duration-300 text-center cursor-pointer">
      <div className="flex justify-center text-blue-600 mb-6">{icon}</div>
      <h3 className="font-semibold text-lg mb-3 text-blue-600">{title}</h3>
      <p className="text-gray-600 text-sm">{text}</p>
    </div>
  );
}

function ProcessCard({ number, title, text }: any) {
  return (
    <div className="bg-white border rounded-2xl p-8 shadow-sm hover:shadow-xl hover:scale-105 transition duration-300 text-center cursor-pointer">
      <div className="text-blue-600 text-3xl font-bold mb-4">{number}</div>
      <h3 className="font-semibold text-lg mb-2 text-blue-600">{title}</h3>
      <p className="text-gray-600 text-sm">{text}</p>
    </div>
  );
}
