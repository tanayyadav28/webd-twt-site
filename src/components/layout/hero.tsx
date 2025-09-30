// File: components/Hero.tsx
// This component is the main hero section of your landing page.

export default function Hero() {
  return (
    <section className="bg-white py-20">
      {/* Container to center and limit width */}
      <div className="max-w-6xl mx-auto px-6 text-center">
        
        {/* Headline */}
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          We Grow Your Digital Presence.
        </h1>

        {/* Subtext */}
        <p className="text-lg md:text-xl text-gray-600 mb-8">
          Helping startups and businesses scale online with smart marketing strategies.
        </p>

        {/* Call-to-Action Button */}
        <a
          href="/contact"
          className="bg-blue-600 text-white px-6 py-3 rounded-md text-lg hover:bg-blue-700 transition"
        >
          Get Started
        </a>
      </div>
    </section>
  );
}
