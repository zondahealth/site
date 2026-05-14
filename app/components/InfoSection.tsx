import Image from 'next/image';

export type InfoSectionItem = {
  label: string;
  text: string;
};

export type InfoSectionData = {
  title: string;
  description: string;
  items: InfoSectionItem[];
  image?: string;
};

type InfoSectionProps = {
  section: InfoSectionData;
  index: number;
  variant?: 'dark' | 'light';
  contained?: boolean;
};

export function InfoSection({
  section,
  index,
  variant = 'light',
  contained = false,
}: InfoSectionProps) {
  const dark = variant === 'dark';

  return (
    <section className={dark ? 'bg-black' : 'bg-default'}>
      <div className={`py-20 md:py-20 ${contained ? 'layout-shell' : 'max-w-7xl mx-auto px-6 lg:px-8'}`}>
        {/* Divider */}
        <div
          className={`border-t mb-12 ${dark ? 'border-white/15' : 'border-black/10'}`}
        />

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-12 lg:gap-20">
          {/* Left — number + title + description */}
          <div>
            <p
              className={`text-sm font-space-grotesk mb-6 ${dark ? 'text-vitality-yellow' : 'text-zonda-blue'}`}
            >
              0{index + 1} /
            </p>
            <h2
              className={`text-3xl md:text-4xl font-bold font-space-grotesk mb-6 ${dark ? 'text-white' : 'text-gray-900'}`}
            >
              {section.title}
            </h2>
            <p
              className={`text-base leading-relaxed ${dark ? 'text-white/60' : 'text-gray-500'}`}
            >
              {section.description}
            </p>
          </div>

          {/* Right — 3 columns, subgrid aligns number/title/text rows */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-x-10 gap-y-4">
            {section.items.map((item, j) => (
              <div
                key={item.label}
                className="grid sm:grid-rows-subgrid sm:row-span-3"
              >
                <p
                  className={`text-sm font-space-grotesk ${dark ? 'text-vitality-yellow' : 'text-zonda-blue'}`}
                >
                  0{j + 1} —
                </p>
                <h3
                  className={`text-xl md:text-2xl font-bold font-space-grotesk ${dark ? 'text-white' : 'text-gray-900'}`}
                >
                  {item.label}
                </h3>
                <p
                  className={`leading-relaxed text-sm ${dark ? 'text-white/60' : 'text-gray-500'}`}
                >
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>

        {section.image && (
          <div
            className={`mt-20 relative h-[500px] overflow-hidden rounded-md border ${dark ? 'border-white/15' : 'border-black/10'}`}
          >
            <Image
              src={section.image}
              alt={section.title}
              fill
              className="object-cover object-center"
            />
          </div>
        )}
      </div>
    </section>
  );
}
