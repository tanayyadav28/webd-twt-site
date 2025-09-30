// File: components/Header.tsx
// This component creates a simple site header (navigation bar).

import Link from "next/link"; // Next.js <Link> is used for client-side navigation
import Image from "next/image"; // For optimized images (like a logo)

// Functional component (React style)
export default function Header() {
  return (
    <header className="flex items-center justify-between px-6 py-4 shadow-md">
      {/* LEFT SIDE: Logo or Site Name */}
      <div className="flex items-center space-x-2">
        {/* Logo (optional, replace /logo.png with your file in public folder) */}
        <Image src="/logo.png" alt="Logo" width={40} height={40} />
        <span className="font-bold text-xl">The White Tusk</span>
      </div>

      {/* RIGHT SIDE: Navigation Links */}
      <nav className="space-x-6">
        {/* Each Link here takes user to a route (page). You’ll create these pages later */}
        <Link href="/" className="hover:text-blue-600">Home</Link>
        <Link href="/services" className="hover:text-blue-600">Services</Link>
        <Link href="/about" className="hover:text-blue-600">About</Link>
        <Link href="/contact" className="hover:text-blue-600">Contact</Link>
      </nav>
    </header>
  );
}
