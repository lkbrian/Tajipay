// pages/about.js
import Image from "next/image";
import { Target, Eye, Handshake } from "lucide-react";

const AboutPage = () => {
  return (
    <div className="w-full mt-[4rem]">
      {/* Image Section with 35vh height */}
      <div className="w-full h-[35vh] relative overflow-hidden rounded-lg shadow-lg">
        <Image
          src="/people_img.jpg" // Replace with your image URL
          alt="Company Overview Image"
          layout="fill" // Makes the image cover the entire div
          objectFit="cover" // Ensures the image covers the div entirely
          className="absolute top-0 left-0 transition-transform duration-500 ease-in-out hover:scale-110"
        />
        <h2 className="text-4xl font-extrabold text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          About
        </h2>
      </div>

      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between mx-auto mb-12">
          <div className="max-w-4xl mx-auto relative">
            <div className="relative">
              <h1 className="text-4xl font-extrabold mt-8 text-center z-10 text-[#1F2937]">
                About Us
              </h1>
              <h2 className="text-2xl font-semibold mb-4 z-10 text-[#1F2937] text-center">
                Company Overview
              </h2>
              <h6
                id="third--stroke"
                className="text-[6rem] absolute top-[-51%] left-[25%] text-[#fff] font-montserrat font-extrabold -z-10"
              >
                ABOUT
              </h6>
            </div>

            <p className="text-md text-gray-700 text-center">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit
              amet nulla auctor, vestibulum magna sed, convallis ex. Cum sociis
              natoque penatibus et magnis dis parturient montes, nascetur
              ridiculus mus.Integer posuere erat a ante venenatis dapibus
              posuere velit aliquet. Cum sociis natoque penatibus et magnis dis
              parturient montes, nascetur ridiculus mus.
            </p>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "Mission",
              icon: <Target size={30} />,
              description:
                "Our mission is to deliver exceptional value and quality to our customers through innovative solutions and sustainable practices.",
            },
            {
              title: "Vision",
              icon: <Eye size={30} />,
              description:
                "Our vision is to become the leading provider in our industry, empowering communities and creating long-lasting positive change.",
            },
            {
              title: "Values",
              icon: <Handshake size={30} />,
              description:
                "Our values are integrity, innovation, and inclusion, and we are committed to operating with transparency and respect in all that we do.",
            },
          ].map((section, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-lg p-6 text-center flex flex-col items-center justify-center hover:shadow-2xl transition-shadow duration-300 ease-in-out"
            >
              <div className="text-4xl text-[#58b976] mb-4">{section.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-[#1F2937]">
                {section.title}
              </h3>
              <p className="text-sm text-gray-600">{section.description}</p>
            </div>
          ))}
        </div>
      </div>
      <div className=" py-8 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-semibold text-gray-800 text-center mb-12">
            Our Journey
          </h2>
          <div className="flex flex-wrap gap-6 justify-center">
            {[
              {
                title: "The Beginning",
                year: "2010",
                content:
                  "In 2010, a small team of entrepreneurs came together to create a company focused on providing tech solutions. Starting small, our dedication to innovation and quality set us apart.",
              },
              {
                title: "Expansion",
                year: "2015",
                content:
                  "By 2015, we established a global presence. Our solutions were used by clients across industries. Our expansion was fueled by customer satisfaction and improvement.",
              },
              {
                title: "Leadership",
                year: "2020",
                content:
                  "By 2020, we became a recognized leader, with products setting the standard. Our commitment to sustainability and customer success was evident.",
              },
            ].map((milestone, index) => (
              <div key={index} className="w-[300px] h-fit min-w-[250px] p-6">
                {" "}
                {/* Increased card sizes */}
                <h3 className="text-xl font-semibold text-gray-900 mb-2 text-center">
                  {milestone.title}
                </h3>
                <div className="w-16 h-[1px] bg-gray-300 mx-auto mb-4"></div>
                <p className="font-bold text-center mb-2">{milestone.year}</p>
                <p className="text-gray-700 leading-relaxed">
                  {milestone.content}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
