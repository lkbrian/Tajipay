"use client";

import Link from "next/link";

export default function Home() {
  return (
    <main>
      <section className="py-24 flex items-center min-h-[calc(80vh-4.5rem)] justify-center bg-white">
        <div className="mx-auto max-w-[43rem] text-center">
          <h1 className="text-[3.5rem] font-bold leading-[4rem] tracking-tight text-black">
            Unlock the Full Potential of Your Business
          </h1>
          <p className="mt-3 text-lg leading-relaxed text-slate-400">
            Connect Visa/Mastercard, Mobile Payments like M-Pesa, and seamlessly
            integrate with Tijapay&apos;s Payment Gateway. Sign up today to
            streamline your processes, improve customer satisfaction, and drive
            profits.
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-100 text-center">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-black">Why Choose Tijapay?</h2>
          <p className="mt-4 text-lg text-gray-600">
            Optimize your business processes with our easy-to-use solutions.
          </p>
          <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Promote Sales",
                text: "Intelligent value-added services for digital banking and sales.",
              },
              {
                title: "Life-Saving Solutions",
                text: "Data-based solutions for retail, analytics, and risk management.",
              },
              {
                title: "Easy Payment System",
                text: "An all-in-one payment solution handling multiple payment channels.",
              },
              {
                title: "Secure Payments",
                text: "We keep your financial details private and transactions secure.",
              },
            ].map((feature, index) => (
              <div key={index} className="p-6 bg-white shadow rounded-lg">
                <h3 className="text-xl font-semibold">{feature.title}</h3>
                <p className="mt-2 text-gray-600">{feature.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Payment Solutions */}
      <section className="py-16 text-center">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-black">
            Accept Payments from Anywhere in Africa
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Increase sales and handle payments seamlessly.
          </p>
          <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "Storefront",
              "Transfer/Request Money",
              "Bill Payment",
              "Payment Pages",
              "Invoice Payment",
              "Virtual Cards",
            ].map((item, index) => (
              <div key={index} className="p-6 bg-white shadow rounded-lg">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-gray-100 text-center">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-black">
            What Our Happy Clients Say
          </h2>
          <div className="mt-8 grid md:grid-cols-2 gap-6">
            {[
              {
                text: "Tijapay's integrated payment gateway helped us enhance our citizenry services.",
                name: "Christopher Mwangi",
              },
              {
                text: "Tijapay is highly technical and customer-focused. We’ve worked with them on multiple projects over 4 years.",
                name: "Ngata Kamau",
              },
            ].map((testimonial, index) => (
              <div key={index} className="p-6 bg-white shadow rounded-lg">
                <p className="text-gray-600">{testimonial.text}</p>
                <h4 className="mt-2 font-semibold">{testimonial.name}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 text-center">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-black">Get in Touch</h2>
          <p className="mt-4 text-lg text-gray-600">
            Find us at 13 Jacaranda Avenue, Lavington.
          </p>
          <div className="mt-6">
            <Link
              href="#"
              className="rounded-md bg-indigo-600 px-5 py-3 font-medium text-white hover:bg-indigo-700"
            >
              Contact Support
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
