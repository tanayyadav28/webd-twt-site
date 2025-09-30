import Link from "next/link";

export default function Portfolio() {
    return (
        <section className="bg-gray-50 py-20">
            <div className="max-w-6xl mx-auto px-6 text-center">
                {/* Section Heading */}
                <h2 className="text-3xl md:text-4xl font-bold mb-12">
                    Our Portfolio
                </h2>   
                {/* Portfolio Grid */}
                <div className="grid md:grid-cols-2 gap-8">
                    {/* Portfolio Item 1 */}
                    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transform hover:scale-105 hover:bg-orange-70 transition">
                        <img src="/portfolio1.jpg" alt="Project 1" className="w-full h-48 object-cover mb-4 rounded" />
                        <h3 className="text-xl font-semibold mb-2">Project One</h3>
                        <p className="text-gray-600 mb-4">
                            A brief description of Project One, highlighting key features and technologies used.
                        </p>
                        <a href="#" className="text-orange-500 hover:text-purple-700">View Case Study</a>
                    </div>
                    {/* Portfolio Item 2 */}
                    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transform hover:scale-105 hover:bg-orange-70 transition">
                        <img src="/portfolio2.jpg" alt="Project 2" className="w-full h-48 object-cover mb-4 rounded" />
                        <h3 className="text-xl font-semibold mb-2">Project Two</h3>
                        <p className="text-gray-600 mb-4">
                            A brief description of Project Two, highlighting key features and technologies used.
                        </p>
                        <a href="#" className="text-orange-500 hover:text-purple-700">View Case Study</a>
                    </div>
                </div>
            </div>
        </section>
    );
}