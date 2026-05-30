import styles from './Marquee.module.css';
import { cn } from '../../lib/utils';

interface MarqueeProps {
  items: string[];
  speed?: number;
  inverted?: boolean;
  className?: string;
}

export default function Marquee({ items, speed = 40, inverted = false, className }: MarqueeProps) {
  const style = { '--duration': `${speed}s` } as React.CSSProperties;

  return (
    <div className={cn(styles.marquee, inverted && styles.inverted, className)} aria-hidden="true">
      <div className={styles.track} style={style}>
        {[...items, ...items].map((item, i) => (
          <span key={i} className={styles.item}>
            {item}
            <span className={styles.dot}>·</span>
          </span>
        ))}
      </div>
    </div>
  );
}
