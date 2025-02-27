"use client";

import TestimonialsCarousel from "@/components/custom/TestimonialsCarousel";
// import { Button } from "@/components/ui/button";
import {
  ChartNoAxesCombined,
  Cpu,
  CreditCard,
  Earth,
  Headphones,
  ShieldCheck,
} from "lucide-react";
import Image from "next/image";
// import Link from "next/link";

export default function Home() {
  const testimonials = [
    {
      text: "Tijapay's integrated payment gateway significantly streamlined our operations, enabling us to provide faster and more efficient services to our citizens. The robust system allowed for seamless integration with our existing infrastructure, resulting in a noticeable improvement in overall service delivery.",
      name: "Christopher Mwangi",
      rating: 4,
    },
    {
      text: "Working with Tijapay has been an exceptional experience. Their team's deep technical expertise and unwavering commitment to customer satisfaction are truly commendable. Over the past four years, they have consistently delivered high-quality solutions, making them an invaluable partner for our projects.",
      name: "Ngata Kamau",
      rating: 5,
    },
    {
      text: "Our experience with Tijapay has been nothing short of excellent. Their platform is incredibly reliable, and we've consistently experienced smooth and efficient transactions. The user-friendly interface and robust security features have made managing our payments a breeze, giving us peace of mind.",
      name: "Alice Johnson",
      rating: 4.5,
    },
    {
      text: "Tijapay's support team is truly outstanding. They are always responsive and provide quick, effective solutions to any issues we encounter. Their commitment to providing excellent customer service is evident in their prompt and helpful assistance, ensuring our operations run smoothly.",
      name: "Bob Williams",
      rating: 3,
    },
  ];
  const getStarted = (event: React.FormEvent) => {
    event.preventDefault();
    const formData = new FormData(event.target as HTMLFormElement);
    const email = formData.get("email");
    console.log(email);
  };
  return (
    <main>
      <section className="py-24 flex items-center min-h-[100vh] justify-center relative">
        <div className="absolute w-full lg:w-1/2 inset-y-0 lg:right-0 hidden lg:block">
          <span className="absolute -left-6 md:left-4 top-24 lg:top-28 w-24 h-24 rotate-90 skew-x-12 rounded-3xl bg-green-400 blur-xl opacity-60 lg:opacity-95 lg:block hidden"></span>
          <span className="absolute right-4 bottom-12 w-24 h-24 rounded-3xl bg-blue-600 blur-xl opacity-80"></span>
        </div>
        <span className="w-4/12 lg:w-2/12 aspect-square bg-gradient-to-tr from-blue-600 to-green-400 absolute -top-5 lg:left-0 rounded-full skew-y-12 blur-2xl opacity-40 skew-x-12 rotate-90"></span>
        <div className="absolute inset-0  bg-[#f5fff8]/85" />
        <div className="mx-auto max-w-[100%] text-center z-20 flex max-lg:flex-col align-center px-20 max-md:px-1 max-md:mt-20">
          <div className="flex-1 w-[80%] m-auto flex flex-col text-start relative">
            <span
              id="primary--stroke"
              className="absolute text-[8rem] top-[-5rem] z-0 text-[#f5fff8] font-montserrat font-extrabold max-md:text-[#f5fff9] max-md:text-[4.5rem] max-md:-top-[2.5rem] max-md:left-1/2 max-md:transform max-md:-translate-x-1/2 max-md:opacity-85"
            >
              TIJAPAY
            </span>
            <div className="z-20">
              <p className="text-[1.2rem] font-[600] tracking-normal text-[#457d57] w-fit max-md:text-[.8rem] max-md:mx-auto">
                Organize all your payments in one place.
              </p>
              <h1 className="text-[3.5rem] font-bold leading-[4rem] tracking-tight text-[#292929] max-md:text-[1.8rem] max-md:text-center max-md:leading-[2rem]">
                Unlock the Full Potential of Your Business
              </h1>
              <p className="mt-3 text-lg leading-relaxed text-gray-600 max-md:text-[.95rem] max-md:text-center">
                Easily integrate Visa/Mastercard, mobile payment systems like
                M-Pesa, and more with Tijapay’s seamless Payment Gateway. By
                signing up today, you can streamline your payment processes,
                enhance customer satisfaction, and accelerate your business
                growth.
              </p>{" "}
              <form
                onSubmit={getStarted}
                className=" border border-[#58b976] rounded-full flex items-center max-w-[400px] p-0.5 gap-4 mt-4"
              >
                <span className="min-w-max px-2 border-r border-gray-200">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21.75 9v.906a2.25 2.25 0 01-1.183 1.981l-6.478 3.488M2.25 9v.906a2.25 2.25 0 001.183 1.981l6.478 3.488m8.839 2.51l-4.66-2.51m0 0l-1.023-.55a2.25 2.25 0 00-2.134 0l-1.022.55m0 0l-4.661 2.51m16.5 1.615a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V8.844a2.25 2.25 0 011.183-1.98l7.5-4.04a2.25 2.25 0 012.134 0l7.5 4.04a2.25 2.25 0 011.183 1.98V19.5z"
                    />
                  </svg>
                </span>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-2 bg-transparent outline-none border-none  rounded-md"
                />
                <input
                  type="submit"
                  value="Get started"
                  className="text-white cursor-pointer bg-[#292929] rounded-full py-2 px-4 hover:bg-[#252525] hover:scale-95 hover:shadow-md transition duration-300 ease-in-out"
                />
              </form>
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
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gradient-to-r bg-white">
        <div className="max-w-7xl mx-auto px-6 text-center relative">
          <span
            id="secondary--stroke"
            className="absolute text-[8rem] top-[-5rem] z-0 text-[#f5fff8] font-montserrat font-extrabold max-md:text-[#f5fff9] max-md:text-[4.5rem] max-md:-top-[2.5rem] max-md:left-1/2 max-md:transform max-md:-translate-x-1/2 max-md:opacity-65"
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
                icon: <ChartNoAxesCombined size={30} />,
              },
              {
                id: "02",
                title: "Risk Mitigation",
                text: "Leverage data-driven insights for smarter decision-making and risk management.",
                icon: <ShieldCheck size={30} />,
              },
              {
                id: "03",
                title: "Seamless Payments",
                text: "Simplify transactions with a unified, secure, and easy-to-use payment system.",
                icon: <CreditCard size={30} />,
              },
              {
                id: "04",
                title: "Advanced Security",
                text: "Safeguard your financial transactions with top-tier encryption and privacy protocols.",
                icon: <Cpu size={30} />,
              },
              {
                id: "05",
                title: "Global Expansion",
                text: "Unlock cross-border opportunities with international payment solutions.",
                icon: <Earth size={30} />,
              },
              {
                id: "06",
                title: "Dedicated Support",
                text: "Get expert assistance anytime, ensuring smooth operations and client satisfaction.",
                icon: <Headphones size={30} />,
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="p-6 bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] cursor-pointer  hover:scale-105 transform transition duration-300 ease-in-out"
              >
                <div className="flex items-center justify-center mb-2 z-0">
                  <span className="text-[#58b976] z-0">{feature.icon}</span>
                </div>
                <h3 className="text-2xl font-semibold text-center text-black z-10">
                  {feature.title}
                </h3>
                <p className="mt-2 text-center text-gray-700 z-20">
                  {feature.text}
                </p>
                <span
                  id="secondary--stroke"
                  className="absolute text-[8rem] -top-[1rem] left-[25%]  text-[#fff] font-montserrat font-extrabold z-[-1] opacity-65"
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
          <TestimonialsCarousel testimonials={testimonials} />
        </div>
      </section>
    </main>
  );
}
