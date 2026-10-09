"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { navLinks, site } from "../data/portfolio";
import { GitHubIcon } from "./ui/Icons";
import { Pill } from "./ui/Pill";
import logo from "../../../public/WDC.png"
/** Barre de navigation flottante + menu plein écran sur mobile. */
export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  // Bloque le scroll quand le menu mobile est ouvert
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      <header className="fixed inset-x-3 top-2.5 z-50 grid h-16 grid-cols-[1fr_auto] items-center rounded-full border border-black/10 bg-paper/90 py-2 pl-6 pr-2.5 backdrop-blur-xl sm:inset-x-6 sm:top-4 md:grid-cols-[1fr_auto_1fr]">
        <a href="#top" aria-label={`${site.name} home`} className="flex h-7 w-[54px] items-center">
          <Image src={logo} alt={site.name} width={108} height={56} className="h-full w-full object-contain object-left" />
        </a>

        <nav aria-label="Primary navigation" className="hidden gap-8 md:flex">
          {navLinks.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="relative text-sm font-semibold after:absolute after:-bottom-1.5 after:left-0 after:h-px after:w-full after:origin-right after:scale-x-0 after:bg-current after:transition-transform after:duration-300 hover:after:origin-left hover:after:scale-x-100"
            >
              {item}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2 justify-self-end">
          <a
            href={site.github}
            target="_blank"
            rel="noreferrer"
            aria-label={`${site.name} on GitHub`}
            className="hidden size-11 place-items-center rounded-full border border-line border-black/10 transition-colors duration-200 hover:bg-ink hover:text-paper sm:grid"
          >
            <GitHubIcon />
          </a>
          <Pill href="#contact" diagonal small variant="dark" className="hidden md:inline-flex">
            Let&apos;s talk
          </Pill>

          {/* Bouton burger : les 2 traits se croisent en X quand le menu est ouvert */}
          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            className="relative size-11 rounded-full bg-black md:hidden"
          >
            <span className={`absolute left-[13px] h-px w-[18px] bg-white transition-all duration-300 ${menuOpen ? "top-[22px] rotate-45" : "top-[18px]"}`} />
            <span className={`absolute left-[13px] h-px w-[18px] bg-white transition-all duration-300 ${menuOpen ? "top-[22px] -rotate-45" : "top-[25px]"}`} />
          </button>
        </div>
      </header>

      <div
        aria-hidden={!menuOpen}
        className={`fixed inset-0 z-40 flex flex-col justify-between bg-acid px-7 pb-8 pt-[120px] transition-all duration-300 md:hidden ${
          menuOpen ? "visible opacity-100" : "invisible opacity-0"
        }`}
      >
        <nav className="grid">
          {navLinks.map((item, index) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={() => setMenuOpen(false)}
              className="border-b border-black/20 py-3.5 text-[clamp(48px,13vw,80px)] leading-none tracking-[-0.055em]"
            >
              <small className="mr-3.5 text-[11px] tracking-normal">0{index + 1}</small>
              {item}
            </a>
          ))}
        </nav>
        <div className="flex flex-col justify-between gap-5 text-xs sm:flex-row">
        
          <a href={`mailto:${site.email}`}>{site.email}</a>
        </div>
      </div>
    </>
  );
}
