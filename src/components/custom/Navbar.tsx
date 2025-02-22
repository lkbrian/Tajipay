"use client";

import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-transparent backdrop-blur-md z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        {/* <div className="text-2xl font-bold text-white">
          <Image src="tijapay_two.png" className="mr-5 h-6 sm:h-9" alt="logo" />
        </div> */}
        <div className="relative w-36 h-12">
          <Image
            src="/tijapay_two.png"
            alt="Logo"
            layout="fill"
            objectFit="contain"
          />
        </div>

        {/* Navigation Links */}
        <div className="flex space-x-6">
          <Link href="/" className="">
            Home
          </Link>
          <Link href="/about" className="">
            About
          </Link>
          <Link href="/contact" className="">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}
