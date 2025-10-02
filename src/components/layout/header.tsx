// File: components/Header.tsx
// This component creates a simple site header (navigation bar).

import Link from "next/link"; // Next.js <Link> is used for client-side navigation
import Image from "next/image"; // For optimized images (like a logo)

// Functional component (React style)
export default function Header() {
  return (
    <header className="bg-gray-900 flex items-center justify-between px-10 py-4 shadow-md">
      {/* LEFT SIDE: Logo or Site Name */}
      <div className="flex items-center space-x-2">
        {/* Logo (optional, replace /logo.png with your file in public folder) */}
        <Link href="/">
          <Image src="/images/twt_logo.png" alt="Logo" width={120} height={50} />
        </Link>
      </div>

      {/* RIGHT SIDE: Navigation Links */}
      <nav className="hidden md:flex space-x-6">
        {/* Each Link here takes user to a route (page). You’ll create these pages later */}
        <Link href="/" className="text-semibold text-gray-300 hover:text-purple-600">Home</Link>
        <Link href="/services" className="text-semibold text-gray-300 hover:text-purple-600">Services</Link>
        <Link href="/about" className="text-semibold text-gray-300 hover:text-purple-600">About</Link>
        <Link href="/contact" className="text-semibold text-gray-300 hover:text-purple-600">Contact</Link>
      </nav>
      <div className="md:hidden">
        <button className="text-gray-600 focus:outline-none">
          ☰
        </button>
      </div>
    </header>
  );
}
