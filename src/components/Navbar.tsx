import { useEffect, useState } from "react";
import { ArrowRight, BagIcon, CloseIcon, LogoMark, MenuIcon, SearchIcon } from "./Icons";

const LINKS = [
  { label: "Home", href: "#home" },
  { label: "Shop", href: "#collection" },
  { label: "About", href: "#story" },
  { label: "Features", href: "#features" },
  { label: "Blog", href: "#journal" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("#home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={[
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled
          ? "bg-[#06202a]/85 py-2 shadow-[0_10px_40px_-20px_rgba(0,0,0,0.7)] backdrop-blur-xl"
          : "bg-transparent py-0",
      ].join(" ")}
    >
      <nav className="shell flex h-[68px] items-center justify-between gap-6" aria-label="Main">
        {/* Logo */}
        <a href="#home" className="group flex shrink-0 items-center gap-2.5">
          <LogoMark className="h-[26px] w-[26px] text-white transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6" />
          <span className="font-display text-[15px] font-semibold tracking-[0.22em] text-white">
            TRAVELUXE
          </span>
        </a>

        {/* Center links */}
        <ul className="hidden items-center gap-8 lg:flex xl:gap-10">
          {LINKS.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                data-active={active === link.href}
                onClick={() => setActive(link.href)}
                aria-current={active === link.href ? "page" : undefined}
                className={[
                  "link-underline font-display text-[13.5px] font-medium tracking-wide transition-colors duration-300",
                  active === link.href ? "text-white" : "text-white/75 hover:text-white",
                ].join(" ")}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Actions */}
        <div className="flex items-center gap-1.5 sm:gap-2.5">
          <button
            type="button"
            aria-label="Search"
            className="hidden h-10 w-10 items-center justify-center rounded-full text-white/85 transition hover:bg-white/12 hover:text-white active:scale-95 sm:flex"
          >
            <SearchIcon className="h-[19px] w-[19px]" />
          </button>

          <button
            type="button"
            aria-label="Cart, 0 items"
            className="relative flex h-10 w-10 items-center justify-center rounded-full text-white/85 transition hover:bg-white/12 hover:text-white active:scale-95"
          >
            <BagIcon className="h-[19px] w-[19px]" />
            <span className="absolute -top-0.5 right-0 grid h-[15px] min-w-[15px] place-items-center rounded-full bg-[#e7c98f] px-[3px] text-[9px] font-semibold text-[#0a2630]">
              0
            </span>
          </button>

          <a
            href="#collection"
            className="group ml-1 hidden h-[40px] items-center gap-2 rounded-full bg-white pl-5 pr-4 font-display text-[13px] font-semibold text-[#0a2630] shadow-[0_10px_30px_-12px_rgba(0,0,0,0.6)] transition hover:-translate-y-0.5 hover:shadow-[0_16px_34px_-14px_rgba(0,0,0,0.7)] sm:inline-flex"
          >
            Shop Now
            <ArrowRight className="h-[15px] w-[15px] transition-transform duration-300 group-hover:translate-x-1" />
          </a>

          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="flex h-10 w-10 items-center justify-center rounded-full text-white transition hover:bg-white/12 lg:hidden"
          >
            {open ? <CloseIcon className="h-5 w-5" /> : <MenuIcon className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile drawer */}
      <div
        className={[
          "overflow-hidden border-t border-white/10 bg-[#06202a]/95 backdrop-blur-xl transition-[max-height,opacity] duration-500 lg:hidden",
          open ? "max-h-[420px] opacity-100" : "max-h-0 opacity-0",
        ].join(" ")}
      >
        <ul className="shell flex flex-col py-3">
          {LINKS.map((link, i) => (
            <li key={link.label}>
              <a
                href={link.href}
                onClick={() => {
                  setActive(link.href);
                  setOpen(false);
                }}
                className={[
                  "flex items-center justify-between border-b border-white/8 py-3.5 font-display text-[15px] transition-colors",
                  i === 0 ? "text-white" : "text-white/70 hover:text-white",
                ].join(" ")}
              >
                {link.label}
                <ArrowRight className="h-4 w-4 text-white/40" />
              </a>
            </li>
          ))}
          <li className="pt-4">
            <a
              href="#collection"
              onClick={() => setOpen(false)}
              className="flex h-12 items-center justify-center gap-2 rounded-full bg-white font-display text-[14px] font-semibold text-[#0a2630]"
            >
              Shop Now
              <ArrowRight className="h-4 w-4" />
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
