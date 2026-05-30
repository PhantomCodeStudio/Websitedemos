import { useEffect, useRef } from 'react';
import type { ElementType, HTMLAttributes } from 'react';
import { observeReveal, unobserveReveal } from '../../lib/reveal';
import { cn } from '../../lib/utils';

interface RevealProps extends HTMLAttributes<HTMLElement> {
  children?: React.ReactNode;
  className?: string;
  variant?: 'up' | 'left' | 'scale';
  delay?: 0 | 1 | 2 | 3 | 4 | 5;
  as?: ElementType;
}

export default function Reveal({
  children,
  className,
  variant = 'up',
  delay = 0,
  as: Tag = 'div',
  ...rest
}: RevealProps) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    observeReveal(el);
    return () => unobserveReveal(el);
  }, []);

  const variantClass =
    variant === 'left' ? 'reveal-left' :
    variant === 'scale' ? 'reveal-scale' :
    'reveal';

  const delayClass = delay > 0 ? `reveal-delay-${delay}` : '';

  const Component = Tag as ElementType;
  return (
    <Component ref={ref} className={cn(variantClass, delayClass, className)} {...rest}>
      {children}
    </Component>
  );
}
