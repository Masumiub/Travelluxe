import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

const base = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

/* Brand mark — a butterfly / wing monogram */
export function LogoMark({ className = "", ...props }: IconProps) {
  return (
    <svg viewBox="0 0 40 40" className={className} aria-hidden="true" {...props}>
      <path
        d="M20 20.6C20 12.9 14.9 6.6 7.6 4.3c-1.5-.5-2.7 1-2 2.4C8.4 12.3 13.6 16.6 20 17.6"
        fill="currentColor"
        opacity="0.95"
      />
      <path
        d="M20 20.6c0-7.7 5.1-14 12.4-16.3 1.5-.5 2.7 1 2 2.4C31.6 12.3 26.4 16.6 20 17.6"
        fill="currentColor"
        opacity="0.6"
      />
      <path
        d="M20 20.4c0 7.7-5.1 14-12.4 16.3-1.5.5-2.7-1-2-2.4C8.4 28.7 13.6 24.4 20 23.4"
        fill="currentColor"
        opacity="0.6"
      />
      <path
        d="M20 20.4c0 7.7 5.1 14 12.4 16.3 1.5.5 2.7-1 2-2.4C31.6 28.7 26.4 24.4 20 23.4"
        fill="currentColor"
      />
    </svg>
  );
}

export function SearchIcon({ className = "", ...props }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" {...base} {...props}>
      <circle cx="11" cy="11" r="6.5" />
      <path d="m16 16 4.5 4.5" />
    </svg>
  );
}

export function BagIcon({ className = "", ...props }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" {...base} {...props}>
      <path d="M4.5 7.5h15l-1 12.2a1.6 1.6 0 0 1-1.6 1.4H7.1a1.6 1.6 0 0 1-1.6-1.4L4.5 7.5Z" />
      <path d="M9 9.6V6.4a3 3 0 0 1 6 0v3.2" />
    </svg>
  );
}

export function ArrowRight({ className = "", ...props }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" {...base} {...props}>
      <path d="M4.5 12h14" />
      <path d="m13 6.5 5.5 5.5L13 17.5" />
    </svg>
  );
}

export function ArrowUpRight({ className = "", ...props }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" {...base} {...props}>
      <path d="M7 17 17 7" />
      <path d="M8.5 7H17v8.5" />
    </svg>
  );
}

export function ChevronDown({ className = "", ...props }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" {...base} {...props}>
      <path d="m6 9.5 6 6 6-6" />
    </svg>
  );
}

export function PlayIcon({ className = "", ...props }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" fill="currentColor" {...props}>
      <path d="M9 6.6c0-.8.9-1.3 1.6-.9l7.2 4.4c.7.4.7 1.4 0 1.8L10.6 16.3c-.7.4-1.6-.1-1.6-.9V6.6Z" />
    </svg>
  );
}

export function PlaneIcon({ className = "", ...props }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" fill="currentColor" {...props}>
      <path d="M21.3 3.2c.6-.6-.2-1.5-.9-1.1L3.2 11.3c-.7.4-.5 1.4.3 1.5l4.6.8 1.6 4.9c.2.7 1.2.8 1.5.1l2-4 4.4 1.4c.7.2 1.3-.5 1-1.2L21.3 3.2Z" />
    </svg>
  );
}

export function LeafIcon({ className = "", ...props }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" {...base} {...props}>
      <path d="M20 4c0 9-5.2 13.4-11 13.4A5 5 0 0 1 4 12.4C4 7.6 9.4 4 20 4Z" />
      <path d="M4.6 20c1.4-4.3 4.2-7.4 8.6-9.4" />
    </svg>
  );
}

export function FeatherIcon({ className = "", ...props }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" {...base} {...props}>
      <path d="M19.5 4.5c2 2 .4 6.6-2.4 9.4-2.2 2.2-4.9 3.1-6.6 2.4L4 22" />
      <path d="M19.5 4.5 10.4 13.6" />
      <path d="M14.9 9.1h4.2M12.6 11.4h3.2" />
    </svg>
  );
}

export function ShieldIcon({ className = "", ...props }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" {...base} {...props}>
      <path d="M12 3 5 5.6v5.6c0 4.4 2.9 7.9 7 9.8 4.1-1.9 7-5.4 7-9.8V5.6L12 3Z" />
      <path d="m9.2 12.1 2 2 3.6-4" />
    </svg>
  );
}

export function LockIcon({ className = "", ...props }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" {...base} {...props}>
      <rect x="4.75" y="10.25" width="14.5" height="10" rx="2.4" />
      <path d="M8.3 10V7.7a3.7 3.7 0 0 1 7.4 0V10" />
      <path d="M12 14.2v2.4" />
    </svg>
  );
}

export function MedalIcon({ className = "", ...props }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" {...base} {...props}>
      <circle cx="12" cy="9.4" r="5.1" />
      <path d="m9.2 13.9-1.7 6.4 4.5-2.3 4.5 2.3-1.7-6.4" />
      <path d="m12 6.9.9 1.8 2 .3-1.5 1.4.4 2-1.8-1-1.8 1 .4-2L9.1 9l2-.3.9-1.8Z" />
    </svg>
  );
}

export function MenuIcon({ className = "", ...props }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" {...base} {...props}>
      <path d="M4 7h16M4 12h16M4 17h16" />
    </svg>
  );
}

export function CloseIcon({ className = "", ...props }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" {...base} {...props}>
      <path d="M6 6l12 12M18 6 6 18" />
    </svg>
  );
}

export function StarIcon({ className = "", ...props }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" fill="currentColor" {...props}>
      <path d="m12 3.6 2.5 5.2 5.7.8-4.1 4 1 5.7-5.1-2.8-5.1 2.8 1-5.7-4.1-4 5.7-.8L12 3.6Z" />
    </svg>
  );
}

export function CheckIcon({ className = "", ...props }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" {...base} {...props}>
      <path d="m5 12.5 4.5 4.5L19 7.5" />
    </svg>
  );
}
