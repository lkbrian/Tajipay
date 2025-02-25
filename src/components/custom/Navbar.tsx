"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();
  return (
    <nav className="fixed top-0 left-0 w-full bg-[#fff]/70 backdrop-blur-md z-50">
      <div className="max-w-7xl mx-auto px-6 pt-4 flex justify-between items-center">
        <div className="relative w-36 h-12">
          <Image
            src="/tijapay_two.png"
            alt="Logo"
            layout="fill"
            objectFit="contain"
          />
        </div>

        {/* Navigation Links */}
        <div className="flex space-x-6 font-sourceSans text-[1.05rem] font-[550] ">
          <Link
            href="/"
            className={pathname === "/" ? "text-[#58b976] " : "text-[#292929]"}
          >
            Home
          </Link>
          <Link
            href="/about"
            className={
              pathname === "/about" ? "text-[#58b976] " : "text-gray-700"
            }
          >
            About
          </Link>
          <Link
            href="/contact"
            className={
              pathname === "/contact" ? "text-[#58b976] " : "text-gray-700"
            }
          >
            Contact
          </Link>
          <Link
            href="/products"
            className={
              pathname === "/products" ? "text-[#58b976] " : "text-gray-700"
            }
          >
            Products
          </Link>
          <Link
            href="/blogs"
            className={
              pathname === "/blogs" ? "text-[#58b976] " : "text-gray-700"
            }
          >
            Blogs
          </Link>
        </div>
      </div>
    </nav>
  );
}
