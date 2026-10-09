
import { Arrow } from "./Icons";


/** Classes du bouton "pilule". Exportées pour pouvoir aussi styler un <button>. */
export function pillClass({ variant = "acid", small = false } = {}) {
  return [
    "group inline-flex w-fit cursor-pointer items-center justify-center rounded-full font-[650]",
    "transition duration-200 hover:-translate-y-[3px] hover:shadow-[0_10px_30px_rgb(11_11_12/0.15)]",
    small ? "min-h-[46px] gap-3.5 px-[18px] text-sm" : "min-h-[54px] gap-6 px-[22px]",
    variant === "dark" ? "bg-ink text-paper" : "bg-acid text-ink",
  ].join(" ");
}

/** Lien-bouton avec flèche. */
export function Pill({ href, children, diagonal, download, className = "", ...style }) {
  return (
    <a href={href} download={download} className={`${pillClass(style)} ${className}`}>
      {children} <Arrow diagonal={diagonal} />
    </a>
  );
}
