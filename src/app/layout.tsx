import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import Hero from "@/components/layout/hero";
import "./globals.css";

export const metadata = {
  title: "DigiAgency",
  description: "Digital Marketing Agency Landing Page",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
