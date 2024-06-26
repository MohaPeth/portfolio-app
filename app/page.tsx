import Image from "next/image";
import { Header } from "./_compenents/Header";
import Hero from "./_compenents/Hero";
import { Spacing } from "./_compenents/Spacing";
import Status from "./_compenents/Status";

export default function Home() {
  return (
    <main>
      <Header />

      <Spacing size="md" />

      <Hero />

      <Spacing size="md" />

      <Status />

      <Spacing size="md" />
    </main>
  );
}
