'use client';

import { PhoneFrame } from './PhoneFrame';
import { useLanguage } from '@/app/components/LanguageProvider';

const dayNumbers = ['22', '23', '24', '25', '26', '27', '28'];
const appointmentColors = ['#226ffd', '#0dc958', '#e6c800'];

type Appointment = { time: string; name: string; tag: string };

export function PhoneAgenda() {
  const { raw, t } = useLanguage();
  const days = raw<string[]>('site.products.professionals.phone.days');
  const appointments = raw<Appointment[]>(
    'site.products.professionals.phone.appointments'
  );

  return (
    <PhoneFrame>
      {/* Month header */}
      <div className="flex items-center justify-between px-4 pt-2">
        <span className="text-lg font-bold text-[#0d1117]">
          {t('site.products.professionals.phone.month')}
        </span>
        <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#e8efff] text-sm font-bold text-[#226ffd]">
          +
        </div>
      </div>

      {/* Week strip */}
      <div className="grid grid-cols-7 gap-1 px-4 pt-3">
        {days.map((day, index) => (
          <div
            key={dayNumbers[index]}
            className={`flex flex-col items-center rounded-[10px] py-2 ${
              index === 3
                ? 'bg-[#226ffd] text-white'
                : 'text-[#0d1117]'
            }`}
          >
            <span className="text-[10px] font-semibold opacity-70">
              {day}
            </span>
            <span className="mt-0.5 text-[15px] font-bold">
              {dayNumbers[index]}
            </span>
          </div>
        ))}
      </div>

      {/* Day label */}
      <div className="px-4 pt-4">
        <p className="m-0 text-[11px] font-bold uppercase tracking-[0.08em] text-[#6b7280]">
          {t('site.products.professionals.phone.dayLabel')}
        </p>
      </div>

      {/* Appointment cards */}
      <div className="flex flex-1 flex-col gap-2 px-4 py-2">
        {appointments.map((appt, index) => (
          <div
            key={appt.time}
            className="flex items-center gap-3 rounded-xl bg-[#edf1fb] px-3.5 py-3"
          >
            <div
              className="h-9 w-1 rounded-sm"
              style={{ background: appointmentColors[index] }}
            />
            <div className="flex-1">
              <div className="flex items-baseline justify-between">
                <span className="text-[13px] font-bold text-[#0d1117]">
                  {appt.name}
                </span>
                <span className="font-mono text-[11px] text-[#6b7280]">
                  {appt.time}
                </span>
              </div>
              <span className="text-[11px] text-[#6b7280]">{appt.tag}</span>
            </div>
          </div>
        ))}
      </div>
    </PhoneFrame>
  );
}
