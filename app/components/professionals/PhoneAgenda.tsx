'use client';

import { PhoneFrame } from './PhoneFrame';

const days = [
  { d: 'Lu', n: '22' },
  { d: 'Ma', n: '23' },
  { d: 'Mi', n: '24' },
  { d: 'Ju', n: '25', active: true },
  { d: 'Vi', n: '26' },
  { d: 'Sá', n: '27' },
  { d: 'Do', n: '28' },
];

const appointments = [
  { time: '09:00', name: 'María Etería', tag: 'Pre-consulta', color: '#226ffd' },
  { time: '10:30', name: 'Juan Martín', tag: 'Control', color: '#0dc958' },
  { time: '12:00', name: 'Sofía Lugones', tag: 'Primera vez', color: '#e6c800' },
];

export function PhoneAgenda() {
  return (
    <PhoneFrame>
      {/* Month header */}
      <div className="flex items-center justify-between px-4 pt-2">
        <span className="text-lg font-bold text-[#0d1117]">Abril 2026</span>
        <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#e8efff] text-sm font-bold text-[#226ffd]">
          +
        </div>
      </div>

      {/* Week strip */}
      <div className="grid grid-cols-7 gap-1 px-4 pt-3">
        {days.map((day) => (
          <div
            key={day.n}
            className={`flex flex-col items-center rounded-[10px] py-2 ${
              day.active
                ? 'bg-[#226ffd] text-white'
                : 'text-[#0d1117]'
            }`}
          >
            <span className="text-[10px] font-semibold opacity-70">
              {day.d}
            </span>
            <span className="mt-0.5 text-[15px] font-bold">{day.n}</span>
          </div>
        ))}
      </div>

      {/* Day label */}
      <div className="px-4 pt-4">
        <p className="m-0 text-[11px] font-bold uppercase tracking-[0.08em] text-[#6b7280]">
          Jueves · 3 turnos
        </p>
      </div>

      {/* Appointment cards */}
      <div className="flex flex-1 flex-col gap-2 px-4 py-2">
        {appointments.map((appt) => (
          <div
            key={appt.time}
            className="flex items-center gap-3 rounded-xl bg-[#edf1fb] px-3.5 py-3"
          >
            <div
              className="h-9 w-1 rounded-sm"
              style={{ background: appt.color }}
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
