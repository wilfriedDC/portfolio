const links = ["Work", "About", "Services", "Contact"];

export function Navbar() {
  return (
    <header className="fixed left-1/2 top-4 z-50 flex w-[calc(100%-1.5rem)] max-w-3xl -translate-x-1/2 items-center justify-between rounded-full border border-black/15 bg-white/80 px-5 py-2.5 shadow-lg backdrop-blur-xl">
      <a href="#top" className="font-bold">Portfolio</a>

      <nav className="hidden gap-6 text-sm font-semibold sm:flex">
        {links.map((l) => (
          <a key={l} href={`#${l.toLowerCase()}`} className="hover:underline">{l}</a>
        ))}
      </nav>

      <a href="#contact" className="rounded-full bg-black px-4 py-2 text-sm font-semibold text-white">
        Let&apos;s talk
      </a>
    </header>
  );
}