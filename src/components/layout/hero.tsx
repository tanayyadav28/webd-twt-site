// File: components/Hero.tsx
// This component is the main hero section of your landing page.

export default function Hero() {
  return (
    <section className="bg-black py-20 mb-60 mt-16">
      {/* Container to enter and limit width */}
      <div className="max-w-6xl mx-auto px-6 text-center">
        
        {/* Headline */}
        <h1 className="text-5xl text-white md:text-6xl font-bold mb-6">
          We Grow Your Digital Presence.
        </h1>

        {/* Subtext */}
        <p className="text-lg md:text-xl text-gray-300 mb-8">
          Helping startups and businesses scale online with smart marketing strategies.
        </p>

        {/* Call-to-Action Button */}
        <a
          href="/contact"
          className="bg-purple-600 text-white px-6 py-3 rounded-md text-lg hover:bg-orange-500 transition"
        >
          Get Started
        </a>
      </div>
    </section>
  );
}
