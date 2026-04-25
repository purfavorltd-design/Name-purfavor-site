"use client";

import { useState } from "react";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <main className="bg-white text-gray-900">

      <section className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-10">

        {/* LEFT PANEL */}
        <div className="bg-blue-600 text-white p-10 rounded-2xl">

          <h2 className="text-2xl font-semibold mb-4">
            Contact Partnerships
          </h2>

          <p className="text-blue-100 mb-6">
            Tell us about your brand and goals — we’ll schedule a professional discussion.
          </p>

          <p className="text-blue-100 text-sm mb-8">
            Supporting partnerships across the United Kingdom and United States.
          </p>

          {/* UK ADDRESS */}
          <div className="bg-white text-gray-800 p-6 rounded-xl mb-6">
            <h3 className="font-semibold mb-2">United Kingdom</h3>
            <p className="text-sm">
              Purfavor<br />
              13 Alfred Road<br />
              Coventry, CV1 5BN<br />
              United Kingdom
            </p>
          </div>

          {/* USA ADDRESS */}
          <div className="bg-white text-gray-800 p-6 rounded-xl mb-8">
            <h3 className="font-semibold mb-2">United States</h3>
            <p className="text-sm">
              Warehouse Location<br />
              21503 Tatton Crest Ct<br />
              Spring, TX 77388<br />
              United States
            </p>
          </div>

          {/* EMAIL */}
          <p className="text-sm mb-6">
            Email: info@purfavor.com
          </p>

          {/* CTA BUTTON */}
          <button className="bg-green-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-green-600 transition">
            Request Partnership
          </button>

          {/* HOURS */}
          <p className="text-blue-200 text-sm mt-6">
            Mon–Fri 9:00am – 6:00pm (UK Time)
          </p>

        </div>

        {/* RIGHT FORM */}
        <div className="bg-white border rounded-2xl p-8 shadow-md">

          {!submitted ? (
            <>
              <p className="text-gray-600 mb-6">
                Interested in partnering with us? Submit your details and our team will review your inquiry.
              </p>

              <form onSubmit={handleSubmit} className="space-y-5">

                {/* NAME */}
                <div>
                  <label className="text-sm font-medium">Name</label>
                  <input
                    type="text"
                    className="w-full border rounded-lg px-4 py-3 mt-1"
                    required
                  />
                </div>

                {/* EMAIL */}
                <div>
                  <label className="text-sm font-medium">Email</label>
                  <input
                    type="email"
                    className="w-full border rounded-lg px-4 py-3 mt-1"
                    required
                  />
                </div>

                {/* DROPDOWN */}
                <div>
                  <label className="text-sm font-medium">Inquiry Type</label>
                  <select className="w-full border rounded-lg px-4 py-3 mt-1">
                    <option>Partnership Inquiry</option>
                    <option>Wholesale Inquiry</option>
                    <option>Brand Collaboration</option>
                    <option>General Inquiry</option>
                  </select>
                </div>

                {/* MESSAGE */}
                <div>
                  <label className="text-sm font-medium">Message</label>
                  <textarea
                    rows={5}
                    className="w-full border rounded-lg px-4 py-3 mt-1"
                    placeholder="Brief about your brand & requirements"
                  />
                </div>

                {/* BUTTON */}
                <button
                  type="submit"
                  className="bg-blue-600 text-white w-full py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
                >
                  Submit Inquiry
                </button>

              </form>
            </>
          ) : (
            <div className="text-center py-20">

              <h2 className="text-2xl font-semibold text-green-600 mb-3">
                Successfully Submitted
              </h2>

              <p className="text-gray-600 mb-6">
                Thank you for reaching out. Our team will review your inquiry and get back to you shortly.
              </p>

              <button
                onClick={() => setSubmitted(false)}
                className="bg-blue-600 text-white px-6 py-2 rounded-lg"
              >
                Submit Another Inquiry
              </button>

            </div>
          )}

          {/* SUPPORT */}
          <p className="text-gray-500 text-sm mt-6">
            For support: info@purfavor.com
          </p>

        </div>

      </section>

    </main>
  );
}