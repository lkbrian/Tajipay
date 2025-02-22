"use client";
import { FormEvent, useState } from "react";
// import { Button, Input, TextArea } from "@shadcn/ui";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

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
    <div className="container mx-auto p-4 md:p-6">
      <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <h2 className="text-lg font-bold mb-2">Get in touch</h2>
          <p>
            Email: <a href="mailto:info@example.com">info@example.com</a>
          </p>
          <p>Phone: +1 (555) 123-4567</p>
          <p>Location: 123 Main St, Anytown, USA 12345</p>
        </div>
        <form onSubmit={handleSubmit} className="max-w-md mx-auto p-4 md:p-6">
          <Input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your name"
            className="mb-4"
          />
          <Input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="your@email.com"
            className="mb-4"
          />
          <Textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Your message"
            className="mb-4"
          />
          <Button type="submit" disabled={submitting} className="w-full">
            {submitting ? "Submitting..." : "Send message"}
          </Button>
        </form>
      </div>
    </div>
  );
}
