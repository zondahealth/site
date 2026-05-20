'use client';

import { PhoneFrame } from './PhoneFrame';
import { useLanguage } from '@/app/components/LanguageProvider';

function SparkleIcon() {
  return (
    <svg width="11" height="11" viewBox="0 0 12 12" fill="none">
      <path d="M6 0L7 5L12 6L7 7L6 12L5 7L0 6L5 5L6 0Z" fill="#7a3eff" />
    </svg>
  );
}

function SoapBlock({
  label,
  text,
  dim,
}: {
  label: string;
  text: string;
  dim?: boolean;
}) {
  return (
    <div
      className={`rounded-lg border border-[#e0d4ff] px-3 py-2.5 ${
        dim ? 'bg-[#f8f5ff]' : 'bg-[#f0ebff]'
      }`}
    >
      <p className="m-0 text-[9px] font-bold uppercase tracking-[0.08em] text-[#7a3eff]">
        {label}
      </p>
      <p className="mt-1 text-[11.5px] leading-snug text-[#0d1117]">
        {text}
      </p>
    </div>
  );
}

const waveformHeights = [8, 14, 10, 18, 6, 12, 16, 9, 14, 11, 7, 13, 17, 10, 6, 12];

export function PhoneRegistros() {
  const { t } = useLanguage();

  return (
    <PhoneFrame time="16:38">
      {/* Patient header */}
      <div className="flex items-center justify-between px-5 pt-4">
        <div className="flex items-center gap-2.5">
          <div className="h-8 w-8 rounded-full bg-gradient-to-br from-[#9b7cff] to-[#bf95ff]" />
          <div>
            <p className="m-0 text-xs font-bold text-[#0d1117]">M. Etería</p>
            <p className="m-0 text-[10px] text-[#9ca3af]">
              {t('site.products.professionals.phone.evolution')}
            </p>
          </div>
        </div>
        <div className="h-6 w-6 rounded-md bg-[#e5e7eb]" />
      </div>

      {/* AI badge */}
      <div className="px-[18px] pt-4">
        <p className="m-0 flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-[0.08em] text-[#7a3eff]">
          <SparkleIcon /> {t('site.products.professionals.phone.structuredByAi')}
        </p>
      </div>

      {/* SOAP blocks */}
      <div className="flex flex-1 flex-col gap-2.5 px-[18px] pt-2">
        <SoapBlock
          label={t('site.products.professionals.phone.subjective')}
          text={t('site.products.professionals.phone.clinicalText')}
        />
        <SoapBlock
          label={t('site.products.professionals.phone.objective')}
          text={t('site.products.professionals.phone.objectiveText')}
        />
        <SoapBlock
          label={t('site.products.professionals.phone.plan')}
          text={t('site.products.professionals.phone.treatmentText')}
          dim
        />
      </div>

      {/* Voice recording bar */}
      <div className="flex items-center gap-2.5 border-t border-[#e5e7eb] px-[18px] py-3">
        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#7a3eff]">
          <svg width="14" height="16" viewBox="0 0 14 16" fill="none">
            <rect x="4" y="2" width="6" height="9" rx="3" fill="#fff" />
            <path
              d="M2 8.5C2 11.3 4.2 13.5 7 13.5C9.8 13.5 12 11.3 12 8.5"
              stroke="#fff"
              strokeWidth="1.4"
              strokeLinecap="round"
            />
            <line
              x1="7"
              y1="13.5"
              x2="7"
              y2="15.5"
              stroke="#fff"
              strokeWidth="1.4"
              strokeLinecap="round"
            />
          </svg>
        </div>
        <div className="flex flex-1 items-center gap-0.5" style={{ height: 20 }}>
          {waveformHeights.map((h, i) => (
            <div
              key={i}
              className="w-[3px] rounded-sm bg-[#7a3eff]"
              style={{ height: h, opacity: 0.4 + (i % 4) * 0.15 }}
            />
          ))}
        </div>
        <span className="font-mono text-[11px] text-[#6b7280]">
          0:34
        </span>
      </div>
    </PhoneFrame>
  );
}
