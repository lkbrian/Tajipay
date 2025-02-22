// pages/about.js
import Head from "next/head";
import Image from "next/image";
import { Briefcase, Users } from "lucide-react";

const AboutPage = () => {
  return (
    <div className="container mx-auto p-4 md:p-6">
      <Head>
        <title>About Us</title>
      </Head>
      <h1 className="text-3xl font-bold mb-4">About Us</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <h2 className="text-lg font-bold mb-2">Our Story</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit
            amet nulla auctor, vestibulum magna sed, convallis ex. Cum sociis
            natoque penatibus et magnis dis parturient montes, nascetur
            ridiculus mus.
          </p>
          <p>
            Integer posuere erat a ante venenatis dapibus posuere velit aliquet.
            Cum sociis natoque penatibus et magnis dis parturient montes,
            nascetur ridiculus mus.
          </p>
          <div className="flex items-center mt-4">
            <Briefcase size={24} className="mr-2" />
            <span>Founded in 2020</span>
          </div>
          <div className="flex items-center mt-2">
            <Users size={24} className="mr-2" />
            <span>Team of 10+ members</span>
          </div>
        </div>
        <div>
          <Image
            src="https://placehold.co/400x300"
            alt="Placeholder image"
            width={400}
            height={300}
            className="object-cover"
          />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
        <div>
          <h2 className="text-lg font-bold mb-2">Our Team</h2>
          <div className="flex flex-wrap -mx-2">
            <div className="w-full md:w-1/2 xl:w-1/3 p-2">
              <Image
                src="https://placehold.co/200x200"
                alt="Placeholder image"
                width={200}
                height={200}
                className="object-cover"
              />
              <h3 className="text-lg font-bold mb-1">John Doe</h3>
              <p>CEO</p>
              <div className="flex items-center mt-2">
                <a href="#" className="text-blue-500 hover:text-blue-700">
                  LinkedIn
                </a>
              </div>
            </div>
            <div className="w-full md:w-1/2 xl:w-1/3 p-2">
              <Image
                src="https://placehold.co/200x200"
                alt="Placeholder image"
                width={200}
                height={200}
                className="object-cover"
              />
              <h3 className="text-lg font-bold mb-1">Jane Doe</h3>
              <p>CTO</p>
              <div className="flex items-center mt-2">
                <a href="#" className="text-blue-500 hover:text-blue-700">
                  GitHub
                </a>
              </div>
            </div>
            <div className="w-full md:w-1/2 xl:w-1/3 p-2">
              <Image
                src="https://placehold.co/200x200"
                alt="Placeholder image"
                width={200}
                height={200}
                className="object-cover"
              />
              <h3 className="text-lg font-bold mb-1">Bob Smith</h3>
              <p>Developer</p>
              <div className="flex items-center mt-2">
                <a href="#" className="text-blue-500 hover:text-blue-700">
                  Twitter
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
