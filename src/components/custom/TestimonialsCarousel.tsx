import React, { useState, useEffect } from "react";
import { Quote } from "lucide-react";

type TestimonialType = {
  text: string;
  name: string;
};

export default function TestimonialsCarousel({
  testimonials,
}: {
  testimonials: TestimonialType[];
}) {
  const [visibleTestimonials, setVisibleTestimonials] = useState<
    TestimonialType[]
  >([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [transitioning, setTransitioning] = useState(false);

  useEffect(() => {
    if (testimonials && testimonials.length >= 2) {
      setVisibleTestimonials([testimonials[0], testimonials[1]]);
    }
  }, [testimonials]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!transitioning) {
        setTransitioning(true);
        setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
      }
    }, 10000); // Change every 10 seconds

    return () => clearInterval(interval);
  }, [testimonials, transitioning]);

  useEffect(() => {
    if (testimonials && testimonials.length >= 2) {
      setVisibleTestimonials([
        testimonials[currentIndex],
        testimonials[(currentIndex + 1) % testimonials.length],
      ]);

      setTimeout(() => setTransitioning(false), 1000); // Reset transitioning after 1 second (duration of the transition)
    }
  }, [currentIndex, testimonials]);

  if (!testimonials || testimonials.length < 2) {
    return null;
  }

  return (
    <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6 relative ">
      {visibleTestimonials.map((testimonial, index) => (
        <div
          key={index}
          className={`p-6 bg-transparent rounded-lg flex flex-col justify-between transition-transform duration-1000 ease-in-out ${
            transitioning
              ? index === 0
                ? "transform translate-x-[15%] opacity-80"
                : "transform translate-x-[15%] opacity-100"
              : "transform translate-x-0"
          }`}
        >
          <div>
            <div className="flex justify-center mb-4">
              <span className="text-[#58b976] z-0">
                <Quote size={30} />
              </span>
            </div>
            <blockquote className="text-gray-600 mb-4">
              {testimonial.text}
            </blockquote>
          </div>
          <div className="border-t border-gray-200 pt-4">
            <h4 className="font-semibold text-center">{testimonial.name}</h4>
          </div>
        </div>
      ))}
    </div>
  );
}
