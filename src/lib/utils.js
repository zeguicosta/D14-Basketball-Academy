/**
 * Merge class names (minimal cn utility for shadcn-style components)
 */
export function cn(...classes) {
  return classes.filter(Boolean).join(' ');
}
