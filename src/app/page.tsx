import Image from "next/image";
import Hero from "@/components/layout/hero";
import Services from "@/components/layout/services";
import Portfolio from "@/components/layout/portfolio";

export default function Home() {
  return (
    <div className="grid [grid-template-rows:20px_1fr_20px] items-center justify-items-center min-h-screen p-20 gap-16 font-sans">
      <main className="flex flex-col gap-8 [grid-row-start:2]">
        <Hero />
        <Services />
        <Portfolio />
      </main>
    </div>
  );
}
