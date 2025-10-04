import Section from "@/components/layout/section";
import ContactForm from "@/components/sections/contactForm";

export default function ContactPage() {
  return (
    <Section>
      <h1 className="text-5xl text-white font-bold mb-16 text-center mt-10">Contact Us</h1>
      <p className="mt-32text-md text-gray-400 mt-32 text-center">
        If you have any questions or inquiries, feel free to reach out to us! <br />
        We're here to help and look forward to connecting with you.
      </p>
      <div>
        <ContactForm />
      </div>
    </Section>
  );
}