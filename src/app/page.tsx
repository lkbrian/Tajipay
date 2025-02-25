"use client";

import { Button } from "@/components/ui/button";
import {
  BarChart2,
  CreditCard,
  Globe,
  Headphones,
  Lock,
  ShieldCheck,
} from "lucide-react";
import Image from "next/image";
// import Link from "next/link";

export default function Home() {
  return (
    <main>
      <section className="py-24 flex items-center min-h-[100vh] justify-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/scaled_net.jpeg"
            alt="Background"
            fill
            className="object-cover opacity-0"
          />
        </div>

        {/* 2. Gradient Overlay Layer (middle) */}
        {/* <div className="absolute inset-0 z-10 bg-gradient-to-br from-white/20  via-[#749c81]/50 to-[#24462f]/90" /> */}
        <div className="absolute w-full lg:w-1/2 inset-y-0 lg:right-0 hidden lg:block">
          <span className="absolute -left-6 md:left-4 top-24 lg:top-28 w-24 h-24 rotate-90 skew-x-12 rounded-3xl bg-green-400 blur-xl opacity-60 lg:opacity-95 lg:block hidden"></span>
          <span className="absolute right-4 bottom-12 w-24 h-24 rounded-3xl bg-blue-600 blur-xl opacity-80"></span>
        </div>
        <span className="w-4/12 lg:w-2/12 aspect-square bg-gradient-to-tr from-blue-600 to-green-400 absolute -top-5 lg:left-0 rounded-full skew-y-12 blur-2xl opacity-40 skew-x-12 rotate-90"></span>
        <div className="absolute inset-0 z-10 bg-[#f5fff8]/85" />
        <div className="mx-auto max-w-[100%] text-center z-20 flex  align-center px-20">
          <div className="flex-1 w-[80%] m-auto flex flex-col text-start relative">
            <span
              id="primary--stroke"
              className="absolute text-[8rem] top-[-5rem] z-0 text-[#f5fff8] font-montserrat font-extrabold"
            >
              TIJAPAY
            </span>
            <div className="z-20">
              <p className="text-[1.2rem] font-[600] tracking-normal text-[#457d57] w-fit">
                Organize your funds in one click—all payments in one place.
              </p>
              <h1 className="text-[3.5rem] font-bold leading-[4rem] tracking-tight text-[#292929]">
                Unlock the Full Potential of Your Business
              </h1>
              <p className="mt-3 text-lg leading-relaxed text-gray-600">
                Easily integrate Visa/Mastercard, mobile payment systems like
                M-Pesa, and more with Tijapay’s seamless Payment Gateway. By
                signing up today, you can streamline your payment processes,
                enhance customer satisfaction, and accelerate your business
                growth.
              </p>{" "}
              <Button className="w-40 mt-6">Get started</Button>
            </div>
          </div>
          <div className="flex flex-1 lg:w-1/2 lg:h-[80vh] relative lg:max-w-none lg:mx-0 mx-auto max-w-3xl">
            <Image
              src="/Hero_image.png"
              alt="Hero image"
              width="2350"
              height="2359"
              className="lg:absolute lg:w-full lg:h-full rounded-3xl object-cover lg:max-h-none max-h-96"
            />
          </div>
          {/* <div className="flex items-center justify-center w-full   -mx-4 lg:pl-10 flex-1">
            <div className="flex flex-col items-end px-3">
              <Image
                className="object-cover mb-6 rounded shadow-lg"
                src="https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                alt="Professional workspace"
                width={224} // Tailwind w-28 (28 * 8px)
                height={112} // Tailwind h-28 (28 * 4px)
              />

              <Image
                className="object-cover rounded shadow-lg"
                src="https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                alt="Teamwork discussion"
                width={180} // w-20
                height={180} // h-20
              />
            </div>

            <div className="px-3">
              <Image
                className="object-cover rounded shadow-lg"
                src="https://images.pexels.com/photos/3182739/pexels-photo-3182739.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                alt="Financial meeting"
                width={260} // w-40
                height={160} // h-40
              />
            </div>
          </div> */}
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gradient-to-r bg-white">
        <div className="max-w-7xl mx-auto px-6 text-center relative">
          <span
            id="secondary--stroke"
            className="absolute text-[8rem] top-[-4rem] left-[25%] z-0 text-[#fff] font-montserrat font-extrabold"
          >
            CHOOSE
          </span>
          <div className="z-20">
            <h2 className="text-4xl font-bold text-center z-10  opacity-80">
              Why Choose Tijapay
            </h2>
            <p className="text-lg text-center z-10  opacity-80">
              Optimize your business processes with our easy-to-use solutions.
            </p>
          </div>

          <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {[
              {
                id: "01",
                title: "Boost Revenue",
                text: "Harness advanced tools to increase sales and drive revenue growth.",
                icon: <BarChart2 />,
              },
              {
                id: "02",
                title: "Risk Mitigation",
                text: "Leverage data-driven insights for smarter decision-making and risk management.",
                icon: <ShieldCheck />,
              },
              {
                id: "03",
                title: "Seamless Payments",
                text: "Simplify transactions with a unified, secure, and easy-to-use payment system.",
                icon: <CreditCard />,
              },
              {
                id: "04",
                title: "Advanced Security",
                text: "Safeguard your financial transactions with top-tier encryption and privacy protocols.",
                icon: <Lock />,
              },
              {
                id: "05",
                title: "Global Expansion",
                text: "Unlock cross-border opportunities with international payment solutions.",
                icon: <Globe />,
              },
              {
                id: "06",
                title: "Dedicated Support",
                text: "Get expert assistance anytime, ensuring smooth operations and client satisfaction.",
                icon: <Headphones />,
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="p-6 bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] cursor-pointer  hover:scale-105 transform transition duration-300 ease-in-out"
              >
                <div className="flex items-center justify-center mb-2 z-10">
                  <span className="text-[#58b976]">{feature.icon}</span>
                </div>
                <h3 className="text-2xl font-semibold text-center text-black z-10">
                  {feature.title}
                </h3>
                <p className="mt-2 text-center text-gray-700 z-10">
                  {feature.text}
                </p>
                <span
                  id="secondary--stroke"
                  className="absolute text-[4rem] top-[0] left-[0]  text-[#fff] font-montserrat font-extrabold"
                >
                  {feature.id}
                </span>
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
    </main>
  );
}
