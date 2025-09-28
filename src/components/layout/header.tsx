import Link from "next/link";

export default function Header() {
  const navItems = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header className="w-full bg-white shadow">
      <div className="mx-auto max-w-7xl px-4 py-4 flex justify-between items-center">
        {/* Logo / Brand */}
        <Link href="/" className="text-2xl font-bold text-gray-900">
          DigiAgency
        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex space-x-6">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-gray-600 hover:text-black transition"
            >
              {item.name}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
