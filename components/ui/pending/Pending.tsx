import type { ReactNode } from "react";

export function Pending({ children }: { children: ReactNode }) {
  return (
    <mark
      data-pending=""
      className="rounded-md border border-dashed border-[#e8b63c]/60 bg-[#fffaf0] px-1.5 py-0.5 font-mono text-[0.8em] font-medium text-[#9a6800]"
    >
      {children}
    </mark>
  );
}
