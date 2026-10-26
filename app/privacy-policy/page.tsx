import { MissingComponentPlaceholder } from "@/components/MissingComponentPlaceholder";

export const metadata = {
  title: "Política de privacidad",
  description: "Política de privacidad de Zonda.",
};

export default function PrivacyPolicyPage() {
  return (
    <main className="bg-background pb-16 pt-24 text-foreground">
      <MissingComponentPlaceholder
        name="Privacy policy content"
        className="min-h-128"
      />
    </main>
  );
}
