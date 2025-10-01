// File: components/Footer.tsx
// This component creates a site footer with some placeholder links and text.

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 py-6 mt-10">
      {/* Container for alignment */}
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
        
        {/* LEFT SIDE: Copyright */}
        <p className="text-sm text-gray-400">
          © {new Date().getFullYear()} The White Tusk. All rights reserved.
        </p>

        {/* RIGHT SIDE: Social / External Links */}
        <div className="flex space-x-6">
          <Link href="/privacy" className="text-sm text-gray-400 hover:text-blue-600">
            Privacy Policy
          </Link>
          <Link href="/terms" className="text-sm text-gray-400 hover:text-blue-600">
            Terms
          </Link>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-gray-400 hover:text-blue-600"
          >
            Instagram
          </a>
        </div>
      </div>
    </footer>
  );
}
