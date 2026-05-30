import { Link } from 'react-router-dom';
import styles from './Button.module.css';
import { cn } from '../../lib/utils';

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  to?: string;
  variant?: 'primary' | 'ghost' | 'text';
  className?: string;
  onClick?: () => void;
  type?: 'button' | 'submit';
}

export default function Button({
  children,
  href,
  to,
  variant = 'primary',
  className,
  onClick,
  type = 'button',
}: ButtonProps) {
  const cls = cn(styles.btn, styles[variant], className);

  if (to) {
    return <Link to={to} className={cls}>{children}</Link>;
  }
  if (href) {
    return <a href={href} className={cls} target="_blank" rel="noopener noreferrer">{children}</a>;
  }
  return (
    <button type={type} className={cls} onClick={onClick}>
      {children}
    </button>
  );
}
