// File: components/Services.tsx
// A simple Services section with 3 feature cards

export default function Services() {
  return (
    <section className="bg-gray-50 p-20">
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* Section Heading */}
        <h2 className="text-3xl md:text-4xl font-bold mb-12">
          Our Services
        </h2>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="bg-white p-10 rounded-lg shadow-md hover:shadow-xl hover:bg-purple-50 transform hover:scale-105 transition">
            <h3 className="text-xl font-semibold mb-4">Brand Identity</h3>
            <p className="text-gray-600">
              Crafting unique brand identities that resonate with your target audience.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white p-10 rounded-lg shadow-md hover:shadow-xl hover:bg-purple-50 transform hover:scale-105 transition">
            <h3 className="text-xl font-semibold mb-4">Social Media Marketing</h3>
            <p className="text-gray-600">
              Engage your audience and grow your brand across all social platforms.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white p-10 rounded-lg shadow-md hover:shadow-xl hover:bg-purple-50 transform hover:scale-105 transition">
            <h3 className="text-xl font-semibold mb-4">Web Design</h3>
            <p className="text-gray-600">
              Create beautiful, responsive, and conversion-focused websites.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
