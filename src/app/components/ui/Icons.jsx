

/**
 * Flèche animée : elle glisse légèrement quand le parent possède la classe `group`
 * et qu'il est survolé. Passe `className` pour changer sa taille.
 */
export function Arrow({ diagonal = false, className = "size-[19px]" }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.7}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`flex-none transition-transform duration-200 group-hover:-translate-y-px group-hover:translate-x-[3px] ${className}`}
    >
      {diagonal ? <path d="M7 17 17 7M8 7h9v9" /> : <path d="M5 12h14m-5-5 5 5-5 5" />}
    </svg>
  );
}

export function GitHubIcon({ className = "size-[19px]" }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className={`fill-current ${className}`}>
      <path d="M12 2.5a9.5 9.5 0 0 0-3 18.52c.48.09.65-.2.65-.46v-1.68c-2.65.58-3.2-1.13-3.2-1.13-.44-1.1-1.06-1.4-1.06-1.4-.87-.59.06-.58.06-.58.96.07 1.47.99 1.47.99.85 1.46 2.24 1.04 2.79.8.08-.62.33-1.04.6-1.28-2.12-.24-4.34-1.06-4.34-4.7 0-1.04.37-1.89.98-2.55-.1-.24-.42-1.21.09-2.52 0 0 .8-.26 2.61.97A9.1 9.1 0 0 1 12 7.16a9 9 0 0 1 2.38.32c1.81-1.23 2.61-.97 2.61-.97.51 1.31.19 2.28.1 2.52.6.66.97 1.51.97 2.55 0 3.65-2.23 4.45-4.35 4.69.34.3.65.87.65 1.76v2.53c0 .26.17.55.65.46A9.5 9.5 0 0 0 12 2.5Z" />
    </svg>
  );
}
