import Link from "next/link";

import { Button } from "@/components/ui/button/button";
import Glow, { ORBIT_BORDER_COLORS } from "@/components/ui/glow/Glow";
import Gradient from "@/components/ui/gradient/Gradient";

export function ContactBanner() {
  return (
    <section
      aria-label="Contacto"
      className="px-6 pt-8 pb-24 sm:px-10 sm:pt-10 sm:pb-32 lg:px-16 lg:pt-12 lg:pb-40"
    >
      <Glow
        className="mx-auto w-full max-w-6xl bg-transparent"
        colors={ORBIT_BORDER_COLORS}
        radius={16}
        opacity={0.7}
      >
        <Gradient
          colors={["#04060c", "#08101c", "#0c1830", "#03050a"]}
          softness={0.36}
          grain={0.4}
          className="
            flex min-h-[420px] w-full flex-col items-center
            justify-center gap-8 overflow-hidden rounded-lg px-8 py-20
            text-center sm:min-h-[480px] sm:px-12 lg:px-16
          "
        >
          <h2 className="font-display max-w-3xl text-3xl font-medium leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
            Datos que Fluyen,
            <br />
            Salud que funciona
          </h2>
          <Button variant="black" asChild>
            <Link href="#contacto">Contactate</Link>
          </Button>
        </Gradient>
      </Glow>
    </section>
  );
}
