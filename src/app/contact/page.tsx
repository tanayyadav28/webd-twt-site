import Image from "next/image";

export default function ContactPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <h1 className="text-5xl text-white font-bold mb-16 text-center mt-10">Contact Us</h1>
      <p className="mt-32text-md text-gray-400 mb-16 text-center">
        If you have any questions or inquiries, feel free to reach out to us! <br />
        We're here to help and look forward to connecting with you.
      </p>
      <div className="grid md:grid-cols-2 gap-8">
        {/* Portfolio Item 1 */}
        <div className="bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-xl transform hover:scale-105 hover:bg-orange-70 transition">
            <div className="relative w-full h-60 mb-10 rounded-xl overflow-hidden">
                <Image src="/images/pfp.jpg" alt="Project 1" fill className="w-full h-60 object-cover mb-10 rounded-xl"/>
            </div>
            <h3 className="text-xl text-gray-200 font-semibold mb-2">Devanshu Karia</h3>
            <p className="text-gray-400 mb-4">
                Upar ki Manzil, Badi Baatcheet.
            </p>
            <a href="#" className="text-orange-500 hover:text-purple-700">Instagram</a>
        </div>
        {/* Portfolio Item 2 */}
        <div className="bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-xl transform hover:scale-105 hover:bg-orange-70 transition">
            <div className="relative w-full h-60 mb-10 rounded-xl overflow-hidden">
                <Image src="/images/pfp.jpg" alt="Project 2" fill className="w-full h-60 object-cover mb-10 rounded-xl" />
            </div>
            <h3 className="text-xl text-gray-200 font-semibold mb-2">Deep Shah</h3>
            <p className="text-gray-400 mb-4">
                Fafda, Jalebi aur Ek Mugga Chai.
            </p>
            <a href="#" className="text-orange-500 hover:text-purple-700">Instagram</a>
        </div>
      </div>
    </div>
  );
}