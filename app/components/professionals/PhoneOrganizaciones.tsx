'use client';

import { PhoneFrame } from './PhoneFrame';
import { useLanguage } from '@/app/components/LanguageProvider';

function FormField({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="m-0 text-[10px] font-semibold text-[#6b7280]">
        {label}
      </p>
      <div className="mt-1.5 flex h-[38px] items-center rounded-lg border border-[#d1d5db] bg-[#fcfcff] px-3 text-xs text-[#0d1117]">
        {value}
      </div>
    </div>
  );
}

export function PhoneOrganizaciones() {
  const { t } = useLanguage();

  return (
    <PhoneFrame time="14:02">
      {/* Back button */}
      <div className="flex items-center justify-between px-5 pt-4">
        <div className="flex h-6 w-6 items-center justify-center rounded-md bg-[#e5e7eb] text-sm text-[#0d1117]">
          ‹
        </div>
      </div>

      {/* Header */}
      <div className="px-[22px] pt-6">
        <p className="m-0 text-[11px] font-bold uppercase tracking-[0.08em] text-[#6b7280]">
          {t('site.products.professionals.phone.connectOrg')}
        </p>
        <h3 className="mt-3 text-[22px] font-bold leading-tight text-[#0d1117]">
          {t('site.products.professionals.phone.connectPami')}
        </h3>
        <p className="mt-3 text-xs leading-relaxed text-[#6b7280]">
          {t('site.products.professionals.phone.pamiHelp')}
        </p>
      </div>

      {/* Form fields */}
      <div className="flex flex-col gap-3 px-[22px] pt-6">
        <FormField
          label={t('site.products.professionals.phone.pamiUser')}
          value="usuario.pami@email.com"
        />
        <FormField
          label={t('site.products.professionals.phone.password')}
          value="••••••••"
        />
      </div>

      {/* Submit button */}
      <div className="mt-auto px-[22px] py-5">
        <div className="flex h-11 items-center justify-center rounded-full bg-[#226ffd] text-[13px] font-semibold text-white">
          {t('site.products.professionals.phone.connectPami')}
        </div>
      </div>
    </PhoneFrame>
  );
}
