"use client";
import { FormEvent, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Image from "next/image";

export default function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    // Add your submission logic here (e.g., send an email using a service like Formspree or Netlify Forms)
    console.log("Form submitted:", { name, email, message });
    setSubmitting(false);
  };

  return (
    <div className="w-full mt-[4rem] bg-[#f8fafc]">
      {/* Image Section */}
      <div className="w-full h-[35vh] relative overflow-hidden rounded-lg shadow-lg">
        <Image
          src="/people_img.jpg" // Replace with your image URL
          alt="Company Overview Image"
          layout="fill" // Makes the image cover the entire div
          objectFit="cover" // Ensures the image covers the div entirely
          className="absolute top-0 left-0 transition-transform duration-500 ease-in-out hover:scale-110"
        />
        <h2 className="text-4xl font-extrabold text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          Contact Us
        </h2>
      </div>

      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-[#1F2937]">
              Get in Touch
            </h3>
            <p className="text-lg text-gray-600">
              We’d love to hear from you! Reach out via the contact details
              below, or fill in the form.
            </p>
            <div className="space-y-4">
              <p className="text-lg text-gray-600">
                <strong>Email:</strong>{" "}
                <a
                  href="mailto:info@example.com"
                  className="text-[#3B82F6] hover:underline"
                >
                  info@example.com
                </a>
              </p>
              <p className="text-lg text-gray-600">
                <strong>Phone:</strong> +1 (555) 123-4567
              </p>
              <p className="text-lg text-gray-600">
                <strong>Location:</strong> 123 Main St, Anytown, USA 12345
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <form
            onSubmit={handleSubmit}
            className="bg-white shadow-xl rounded-lg p-8 space-y-6"
          >
            <h3 className="text-2xl font-semibold text-[#1F2937]">
              Send Us a Message
            </h3>

            <Input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your name"
              className="mb-4 p-4 border-2 border-gray-300 rounded-lg w-full focus:outline-none focus:border-[#3B82F6] transition duration-300"
            />
            <Input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your@email.com"
              className="mb-4 p-4 border-2 border-gray-300 rounded-lg w-full focus:outline-none focus:border-[#3B82F6] transition duration-300"
            />
            <Textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Your message"
              className="mb-4 p-4 border-2 border-gray-300 rounded-lg w-full focus:outline-none focus:border-[#3B82F6] transition duration-300"
            />
            <Button
              type="submit"
              disabled={submitting}
              className="w-full bg-[#3B82F6] text-white font-semibold py-3 rounded-lg hover:bg-[#2563EB] transition duration-300"
            >
              {submitting ? "Submitting..." : "Send Message"}
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}
