import Image from "next/image";
import { Mail, MapPin, Globe, ShieldCheck } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full bg-gray-900 text-gray-300 mt-20">
      <div className="container-main py-16">

        {/* GRID */}
        <div className="grid md:grid-cols-4 gap-10">

          {/* COMPANY */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Image src="/logo.png" alt="Purfavor" width={110} height={40} />
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Purfavor is a retail distribution company operated by MAM Enterprise Ltd,
              specializing in wholesale purchasing and structured marketplace distribution
              across Amazon UK and Amazon US.
            </p>
            <div className="flex items-center gap-2 mt-4 text-sm text-gray-300">
              <ShieldCheck className="w-4 h-4 text-blue-400" />
              <span>Compliant • Inventory-Based • Authorized Partnerships</span>
            </div>
            <a
              href="https://www.linkedin.com/company/purfavor/?viewAsMember=true"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-4 text-sm text-blue-400 hover:text-blue-300 transition"
            >
              View our LinkedIn
            </a>
          </div>

          {/* NAVIGATION */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Navigation</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="/" className="hover:text-white transition">Home</a></li>
              <li><a href="/about" className="hover:text-white transition">About</a></li>
              <li><a href="/for-brands" className="hover:text-white transition">For Brands</a></li>
              <li><a href="/services" className="hover:text-white transition">Services</a></li>
              <li><a href="/contact" className="hover:text-white transition">Contact</a></li>
            </ul>
          </div>

          {/* OPERATIONS */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Operations</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <Globe className="w-4 h-4 text-blue-400 mt-1 shrink-0" />
                <span>Amazon UK & Amazon US marketplace operations</span>
              </li>
              <li className="flex items-start gap-2">
                <ShieldCheck className="w-4 h-4 text-blue-400 mt-1 shrink-0" />
                <span>MAP compliance & controlled distribution</span>
              </li>
              <li className="flex items-start gap-2">
                <ShieldCheck className="w-4 h-4 text-blue-400 mt-1 shrink-0" />
                <span>Inventory-based sourcing (no dropshipping)</span>
              </li>
            </ul>
          </div>

          {/* CONTACT */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <Mail className="w-4 h-4 text-blue-400 mt-1 shrink-0" />
                <span>info@purfavor.com</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-blue-400 mt-1 shrink-0" />
                <span>13 Alfred Road<br />CV1 5BN, Coventry<br />United Kingdom</span>
              </li>
            </ul>
          </div>

        </div>

        {/* DIVIDER */}
        <div className="mt-12 border-t border-gray-700"></div>

        {/* BOTTOM */}
        <div className="flex flex-col md:flex-row justify-between items-center mt-6 text-sm text-gray-400">
          <p>© {new Date().getFullYear()} Purfavor™ – A division of MAM Enterprise Ltd</p>
          <div className="flex gap-6 mt-3 md:mt-0">
            <a href="/privacy-policy" className="hover:text-white transition">Privacy Policy</a>
            <a href="/terms-and-conditions" className="hover:text-white transition">Terms & Conditions</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
