// File: components/Services.tsx
// A simple Services section with 3 feature cards

export default function Services() {
  return (
    <section className="bg-gray-800 py-20 px-10 rounded-lg">
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* Section Heading */}
        <h2 className="text-4xl text-white md:text-4xl font-bold mb-24">
          Our Services
        </h2>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="bg-gray-700 p-10 rounded-lg shadow-md hover:shadow-xl hover:bg-purple-900 transform hover:scale-105 transition">
            <div className="p-10 mb-12">
              <h3 className="text-xl text-gray-200 font-semibold mb-4">Brand Identity</h3>
            </div>
            <p className="text-gray-400">
              Crafting unique brand identities that resonate with your target audience.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-gray-700 p-10 rounded-lg shadow-md hover:shadow-xl hover:bg-purple-900 transform hover:scale-105 transition">
            <div className="p-10 mb-5">
              <h3 className="text-xl text-gray-200 font-semibold mb-4">Social Media Marketing</h3>
            </div>
            <p className="text-gray-400">
              Engage your audience and grow your brand across all social platforms.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-gray-700 p-10 rounded-lg shadow-md hover:shadow-xl hover:bg-purple-900 transform hover:scale-105 transition">
            <div className="p-10 mb-12">
              <h3 className="text-xl text-gray-200 font-semibold mb-4">Web Design</h3>
            </div>
            <p className="text-gray-400">
              Create beautiful, responsive, and conversion-focused websites.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
