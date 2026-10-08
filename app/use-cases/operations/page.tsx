import { MissingComponentPlaceholder } from "@/components/MissingComponentPlaceholder";

const missingComponents = [
  "IdomHero",
  "IntFlow",
  "IntFeatureOffice",
  "IntFeatureField",
  "IntFeatureAudit",
  "IntStatsBand",
  "IntFAQ",
  "IntDemoCTA",
];

export default function OperationsPage() {
  return (
    <main className="bg-background pb-16 pt-24 text-foreground">
      {missingComponents.map((name) => (
        <MissingComponentPlaceholder key={name} name={name} />
      ))}
    </main>
  );
}
