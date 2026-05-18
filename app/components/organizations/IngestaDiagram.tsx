const sources = [
  { name: 'EHR Hospital', proto: 'FHIR R4', color: '#226ffd' },
  { name: 'Laboratorio', proto: 'HL7v2', color: '#0dc958' },
  { name: 'PAMI / OSDE', proto: 'API REST', color: '#eaea00' },
  { name: 'Wearables', proto: 'Webhook', color: '#7a3eff' },
  { name: 'Excel / CSV', proto: 'Manual', color: '#ff7a3e' },
];

const yPositions = [78, 148, 218, 288, 358];

export function IngestaDiagram() {
  return (
    <div className="relative h-[460px] overflow-hidden rounded-xl border border-[color:rgba(21,27,43,0.08)] bg-[#fcfcff] p-6 shadow-[0_30px_60px_-30px_rgba(7,17,48,0.12)]">
      {/* Grid background */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            'linear-gradient(rgba(21,27,43,.04) 1px, transparent 1px), linear-gradient(90deg, rgba(21,27,43,.04) 1px, transparent 1px)',
          backgroundSize: '20px 20px',
          maskImage:
            'linear-gradient(180deg, transparent, #000 30%, #000 70%, transparent)',
          WebkitMaskImage:
            'linear-gradient(180deg, transparent, #000 30%, #000 70%, transparent)',
        }}
      />

      {/* Connection lines */}
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 400 412"
        className="absolute inset-6"
      >
        {yPositions.map((y, i) => (
          <path
            key={i}
            d={`M152 ${y} C 200 ${y}, 220 206, 270 206`}
            stroke={sources[i].color}
            strokeWidth="1.5"
            fill="none"
            strokeDasharray="3 3"
            opacity=".7"
          />
        ))}
      </svg>

      {/* Sources column */}
      <div className="relative flex h-full flex-col justify-between pr-60">
        {sources.map((s) => (
          <div
            key={s.name}
            className="flex w-[200px] items-center gap-3 rounded-lg border border-[color:rgba(21,27,43,0.08)] bg-[#fcfcff] px-3.5 py-2.5 shadow-[0_8px_20px_-16px_rgba(7,17,48,0.2)]"
          >
            <span
              className="h-2 w-2 shrink-0 rounded-full"
              style={{
                background: s.color,
                boxShadow: `0 0 0 4px ${s.color}22`,
              }}
            />
            <div>
              <p className="text-[13px] font-bold text-[color:var(--zonda-ink)]">
                {s.name}
              </p>
              <p className="mt-0.5 font-mono text-[10px] text-[color:var(--fg-3)]">
                {s.proto}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Zonda core */}
      <div className="absolute right-6 top-1/2 w-40 -translate-y-1/2 overflow-hidden rounded-xl bg-zonda-blue-dark p-5 text-center text-white shadow-[0_30px_60px_-24px_rgba(7,17,48,0.55)]">
        <div
          className="pointer-events-none absolute inset-0 opacity-50"
          style={{
            background:
              "url('/bg/movement/dark-blue-lines.png') center/cover",
          }}
        />
        <div className="relative">
          <p className="font-mono text-[10px] tracking-[0.08em] text-[color:var(--zonda-yellow)]">
            ZONDA
          </p>
          <p className="mt-1 text-[13px] font-bold">Intelligence Layer</p>
          <div className="mt-3 flex flex-col gap-1.5">
            {['Normalizar', 'Identificar', 'Clasificar', 'Auditar'].map(
              (l) => (
                <div
                  key={l}
                  className="rounded bg-white/10 px-2 py-1.5 text-[11px] font-medium"
                >
                  {l}
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
