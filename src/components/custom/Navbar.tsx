"use client";

import { AlignRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Navbar() {
  const pathname = usePathname();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Define the navigation links in an array
  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
    { href: "/products", label: "Products" },
    { href: "/blogs", label: "Blogs" },
  ];

  // Function to toggle sidebar visibility
  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  return (
    <nav className="fixed top-0 left-0 w-full backdrop-blur-md z-50">
      <div className="max-w-7xl mx-auto px-6 pt-4 flex justify-between items-center bg-[#fff]/70">
        <div className="relative w-36 h-12">
          <Image
            src="/tijapay_two.png"
            alt="Logo"
            fill
            sizes="100%"
            style={{ objectFit: "contain" }}
          />
        </div>

        {/* Desktop Navigation Links */}
        <div className="flex space-x-6 font-sourceSans text-[1rem] font-[500] max-md:hidden">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              prefetch={true}
              className={
                pathname === link.href
                  ? "text-[#58b976] font-[600] underline decoration-solid underline-offset-4 decoration-2"
                  : "text-[#292929]"
              }
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Sidebar Toggle Button */}
        <button className="md:hidden p-2 text-gray-800" onClick={toggleSidebar}>
          <span className="text-[#292929]">
            <AlignRight size={35} />
          </span>
        </button>

        {/* Sidebar */}
        <div
          style={{
            boxShadow:
              "rgba(17, 17, 26, 0.1) 0px 4px 16px, rgba(17, 17, 26, 0.05) 0px 8px 32px",
          }}
          className={`fixed top-[1.9rem] right-6 w-72 h-full transform transition-transform duration-300 ease-in-out z-[2000] ${
            sidebarOpen ? "visible" : "hidden"
          }`}
        >
          <div className="bg-[#fff] rounded-md relative p-2">
            <div className="flex justify-center items-center m-2 pt-1 absolute right-0 rounded-full w-7 h-7 bg-gray-200">
              <button onClick={toggleSidebar} className="text-2xl">
                &times;
              </button>
            </div>
            <div className="flex flex-col space-y-4 px-2 py-1 mt-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  prefetch={true}
                  href={link.href}
                  onClick={() => setSidebarOpen(!sidebarOpen)}
                  className={
                    pathname === link.href
                      ? "text-[#58b976] font-[600] underline decoration-solid underline-offset-4 decoration-2"
                      : "text-gray-700"
                  }
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
