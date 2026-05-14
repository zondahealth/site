import { Button } from './ui/button';
import Link from 'next/link';
import { ArrowRightCircleIcon } from 'lucide-react';
import { cn } from './ui/utils';

const colors = {
  default: 'text-white hover:text-vitality-yellow',
  black: 'text-black hover:text-zonda-blue',
  yellow: 'text-vitality-yellow hover:text-primary',
};

export default function ExploreButton({
  href,
  title,
  color = 'default',
}: {
  href: string;
  title: string;
  color?: 'default' | 'black' | 'yellow';
}) {
  return (
    <Button
      asChild
      variant="link"
      className={cn(
        'text-base font-bold underline-offset-4 hover:underline',
        colors[(color ?? 'default') as keyof typeof colors]
      )}
    >
      <Link href={href}>
        {title} <ArrowRightCircleIcon />
      </Link>
    </Button>
  );
}
