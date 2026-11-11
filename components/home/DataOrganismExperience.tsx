type DataOrganismExperienceProps = { className?: string };

/** Static 75% organism state: no scroll transition, only its ambient motion. */
export function DataOrganismExperience({ className = "" }: DataOrganismExperienceProps) {
  return (
    <div className={`relative h-[360px] w-full overflow-hidden sm:h-[500px] lg:h-[680px] ${className}`}>
      <iframe
        src="/api/data-organism?embedded=1&progress=1&zoom=1.06"
        title="Organismo de datos"
        className="h-full w-full border-0"
      />
    </div>
  );
}
