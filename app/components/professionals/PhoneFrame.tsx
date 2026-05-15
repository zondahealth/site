'use client';

import type { ReactNode } from 'react';
import { cn } from '../ui/utils';

function SvgSignal() {
  return (
    <svg width="14" height="10" viewBox="0 0 14 10" fill="none">
      <rect x="0" y="6" width="2" height="4" rx="0.5" fill="currentColor" />
      <rect x="4" y="4" width="2" height="6" rx="0.5" fill="currentColor" />
      <rect x="8" y="2" width="2" height="8" rx="0.5" fill="currentColor" />
      <rect x="12" y="0" width="2" height="10" rx="0.5" fill="currentColor" />
    </svg>
  );
}

function SvgWifi() {
  return (
    <svg width="14" height="10" viewBox="0 0 14 10" fill="none">
      <path
        d="M7 9.5L8.5 8L7 6.5L5.5 8L7 9.5Z"
        fill="currentColor"
      />
      <path
        d="M2 4.5C3.5 3 5.2 2.2 7 2.2C8.8 2.2 10.5 3 12 4.5"
        stroke="currentColor"
        strokeWidth="1.2"
        fill="none"
      />
      <path
        d="M3.8 6.2C4.7 5.3 5.8 4.8 7 4.8C8.2 4.8 9.3 5.3 10.2 6.2"
        stroke="currentColor"
        strokeWidth="1.2"
        fill="none"
      />
    </svg>
  );
}

function SvgBattery() {
  return (
    <svg width="22" height="10" viewBox="0 0 22 10" fill="none">
      <rect
        x="0.5"
        y="0.5"
        width="18"
        height="9"
        rx="2"
        stroke="currentColor"
        fill="none"
      />
      <rect x="2" y="2" width="14" height="6" rx="1" fill="currentColor" />
      <rect
        x="19.5"
        y="3.5"
        width="1.5"
        height="3"
        rx="0.5"
        fill="currentColor"
      />
    </svg>
  );
}

type PhoneFrameProps = {
  children: ReactNode;
  time?: string;
  className?: string;
};

export function PhoneFrame({
  children,
  time = '10:54',
  className,
}: PhoneFrameProps) {
  return (
    <div
      className={cn(
        'relative w-[280px] h-[580px] rounded-[44px] bg-[#0d0d0d] p-2.5 shadow-[0_30px_60px_-20px_rgba(7,17,48,0.5),0_0_0_1px_rgba(0,0,0,0.6)_inset]',
        className
      )}
    >
      <div className="relative flex h-full w-full flex-col overflow-hidden rounded-[36px] bg-[#fcfcff]">
        {/* Status bar */}
        <div className="flex items-center justify-between px-[22px] pt-2.5 pb-1 text-xs font-bold text-[color:var(--zonda-ink)]">
          <span>{time}</span>
          <div className="absolute left-1/2 top-2 h-[22px] w-20 -translate-x-1/2 rounded-full bg-[#0d0d0d]" />
          <span className="flex items-center gap-1">
            <SvgSignal />
            <SvgWifi />
            <SvgBattery />
          </span>
        </div>
        {children}
      </div>
    </div>
  );
}
