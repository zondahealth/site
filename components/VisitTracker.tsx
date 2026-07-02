'use client';

import { useEffect } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';

export function VisitTracker() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    const src = searchParams.get('src');
    if (!src) {
      return;
    }

    const query = searchParams.toString();
    const pathWithQuery = query ? `${pathname}?${query}` : pathname;

    fetch('/api/visit', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ src, path: pathWithQuery }),
    }).catch(() => {});
  }, [pathname, searchParams]);

  return null;
}
