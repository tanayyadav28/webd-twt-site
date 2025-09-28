import Link from "next/link";

export default function Footer() {
  const footerLinks = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <footer className="w-full bg-gray-900 text-gray-300">
      <div className="mx-auto max-w-7xl px-4 py-10 md:px-8">
        <div className="flex flex-col md:flex-row md:justify-between md:items-center">
          {/* Logo / Brand */}
          <div className="mb-6 md:mb-0">
            <Link href="/" className="text-2xl font-bold text-white">
              DigiAgency
            </Link>
            <p className="mt-2 text-sm text-gray-400">
              Building your digital presence with impact.
            </p>
          </div>

          {/* Links */}
          <nav className="flex flex-wrap gap-4 md:gap-6">
            {footerLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="hover:text-white transition"
              >
                {link.name}
              </Link>
            ))}
          </nav>
        </div>

        {/* Divider */}
        <div className="mt-8 border-t border-gray-700 pt-6 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} DigiAgency. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
