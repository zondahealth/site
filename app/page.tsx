import { Hero } from "@/components/home/Hero";
import { Products } from "@/components/home/Products";
import { AiInfraBanner } from "@/components/home/AiInfraBanner";
import { ResultsBanner } from "@/components/home/ResultsBanner";
import { ApiBanner } from "@/components/home/ApiBanner";
import { PossibilitiesBanner } from "@/components/home/PossibilitiesBanner";
import { ContactBanner } from "@/components/home/ContactBanner";
import Gradient from "@/components/ui/gradient/Gradient";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground flex flex-col ">
      <Hero />
      <Gradient
        colors={["#f6fbff", "#fffff1", "#ffffff", "#fffefa", "#f7fcff"]}
        className="flex flex-col gap-24"
      >
        <Products />
        <div>
          <AiInfraBanner />
          <ResultsBanner />
          <ApiBanner />
        </div>
        <PossibilitiesBanner />
        <ContactBanner />
      </Gradient>
    </main>
  );
}
