export function cn(...classes: (string | undefined | false | null)[]): string {
  return classes.filter(Boolean).join(' ');
}

export function padIndex(n: number, len = 2): string {
  return String(n).padStart(len, '0');
}
