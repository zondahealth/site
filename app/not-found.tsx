import Link from "next/link";

export default function NotFound() {
  return (
    <main
      lang="es"
      className="flex min-h-screen flex-col items-center justify-center gap-4 bg-background px-6 text-foreground"
    >
      <h1 className="font-display text-3xl font-medium tracking-tight">
        No encontramos esta página
      </h1>
      <Link href="/" className="text-secondary underline-offset-4 hover:underline">
        Volver al inicio
      </Link>
    </main>
  );
}
