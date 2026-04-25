import { CheckCircle } from "lucide-react";

const cards = [
  {
    title: "Brands Seeking Controlled Amazon Distribution",
    points: [
      "MAP policy protection",
      "Consistent pricing & representation",
      "Long-term brand growth focus",
    ],
  },
  {
    title: "Authorized Distributors",
    points: [
      "Inventory-backed purchasing",
      "Professional listing management",
      "Transparent reporting",
    ],
  },
  {
    title: "Manufacturers Expanding to Marketplaces",
    points: [
      "Marketplace strategy & execution",
      "Account management",
      "Sustainable growth support",
    ],
  },
];

export default function WhoWeWorkWithSection() {
  return (
    <section className="section-space border-t border-slate-200 bg-slate-50">
      <div className="container-main">
        <h2 className="heading-lg">Who We Work With</h2>
        <p className="mt-5 max-w-3xl text-base leading-8 text-slate-600">
          We partner with organizations that value controlled distribution, policy
          alignment, and professional marketplace operations.
        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {cards.map((card) => (
            <article key={card.title} className="card h-full">
              <h3 className="text-xl font-semibold leading-tight text-slate-900">
                {card.title}
              </h3>
              <ul className="mt-6 space-y-3 text-sm text-slate-700">
                {card.points.map((point) => (
                  <li key={point} className="flex items-start gap-2.5">
                    <CheckCircle className="mt-0.5 h-5 w-5 text-brand-600" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
