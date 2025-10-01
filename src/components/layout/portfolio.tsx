import Link from "next/link";
import Image from "next/image";

export default function Portfolio() {
    return (
        <section className="bg-gray-800 py-20 mt-40 rounded-lg">
            <div className="max-w-6xl mx-auto px-6 text-center">
                {/* Section Heading */}
                <h2 className="text-4xl text-white md:text-4xl font-bold mb-24">
                    Our Portfolio
                </h2>   
                {/* Portfolio Grid */}
                <div className="grid md:grid-cols-2 gap-8">
                    {/* Portfolio Item 1 */}
                    <div className="bg-gray-700 p-6 rounded-lg shadow-md hover:shadow-xl transform hover:scale-105 hover:bg-orange-70 transition">
                        <div className="relative w-full h-60 mb-10 rounded-xl overflow-hidden">
                            <Image src="/images/project1.jpeg" alt="Project 1" fill className="w-full h-60 object-cover mb-10 rounded-xl"/>
                        </div>
                        <h3 className="text-xl text-gray-200 font-semibold mb-2">Project One</h3>
                        <p className="text-gray-400 mb-4">
                            A brief description of Project One, highlighting key features and technologies used.
                        </p>
                        <a href="#" className="text-orange-500 hover:text-purple-700">View Case Study</a>
                    </div>
                    {/* Portfolio Item 2 */}
                    <div className="bg-gray-700 p-6 rounded-lg shadow-md hover:shadow-xl transform hover:scale-105 hover:bg-orange-70 transition">
                        <div className="relative w-full h-60 mb-10 rounded-xl overflow-hidden">
                            <Image src="/images/project2.jpeg" alt="Project 2" fill className="w-full h-60 object-cover mb-10 rounded-xl" />
                        </div>
                        <h3 className="text-xl text-gray-200 font-semibold mb-2">Project Two</h3>
                        <p className="text-gray-400 mb-4">
                            A brief description of Project Two, highlighting key features and technologies used.
                        </p>
                        <a href="#" className="text-orange-500 hover:text-purple-700">View Case Study</a>
                    </div>
                </div>
            </div>
        </section>
    );
}