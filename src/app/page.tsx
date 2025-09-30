import Image from "next/image";
import Hero from "@/components/layout/hero";
import styles from "./page.module.css";
import Services from "@/components/layout/services";
import Portfolio from "@/components/layout/portfolio";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Hero />
        <Services />
        <Portfolio />
      </main>
    </div>
  );
}
