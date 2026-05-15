'use client';

import { PhoneFrame } from './PhoneFrame';

function FormField({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="m-0 text-[10px] font-semibold text-[color:var(--fg-2)]">
        {label}
      </p>
      <div className="mt-1.5 flex h-[38px] items-center rounded-lg border border-[color:rgba(21,27,43,0.12)] bg-[#fcfcff] px-3 text-xs text-[color:var(--zonda-ink)]">
        {value}
      </div>
    </div>
  );
}

export function PhoneOrganizaciones() {
  return (
    <PhoneFrame time="14:02">
      {/* Back button */}
      <div className="flex items-center justify-between px-5 pt-4">
        <div className="flex h-6 w-6 items-center justify-center rounded-md bg-[color:rgba(21,27,43,0.06)] text-sm text-[color:var(--zonda-ink)]">
          ‹
        </div>
      </div>

      {/* Header */}
      <div className="px-[22px] pt-6">
        <p className="m-0 text-[11px] font-bold uppercase tracking-[0.08em] text-[color:var(--fg-2)]">
          Conectar organización
        </p>
        <h3 className="mt-3 text-[22px] font-bold leading-tight">
          Conectar con PAMI
        </h3>
        <p className="mt-3 text-xs leading-relaxed text-[color:var(--fg-2)]">
          Ingresá tu usuario y contraseña de PAMI. Solo se usarán para
          autenticarte contra PAMI durante los flujos de atención, nunca se
          mostrarán en pantalla ni se compartirán con terceros.
        </p>
      </div>

      {/* Form fields */}
      <div className="flex flex-col gap-3 px-[22px] pt-6">
        <FormField label="Usuario de PAMI" value="usuario.pami@email.com" />
        <FormField label="Contraseña" value="••••••••" />
      </div>

      {/* Submit button */}
      <div className="mt-auto px-[22px] py-5">
        <div className="flex h-11 items-center justify-center rounded-full bg-[color:var(--zonda-blue)] text-[13px] font-semibold text-white">
          Conectar con PAMI
        </div>
      </div>
    </PhoneFrame>
  );
}
