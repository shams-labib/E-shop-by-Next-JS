"use client";

import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="w-full bg-white border-b shadow-sm">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="text-xl font-bold text-blue-600">
          NextItems
        </Link>

        {/* Links */}
        <div className="flex gap-6 text-sm font-medium">
          <Link href="/" className="hover:text-blue-600">
            Home
          </Link>
          <Link href="/items" className="hover:text-blue-600">
            Items
          </Link>
          <Link href="/login" className="hover:text-blue-600">
            Login
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
