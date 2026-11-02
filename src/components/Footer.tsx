import { ArrowRight, LogoMark } from "./Icons";

const COLUMNS = [
  {
    title: "Shop",
    links: ["Cabin luggage", "Check-in", "Carry-on", "Travel accessories", "Gift cards"],
  },
  {
    title: "Company",
    links: ["Our story", "Materials", "Sustainability", "Careers", "Press"],
  },
  {
    title: "Support",
    links: ["Shipping & returns", "Warranty", "Care guide", "Track order", "Contact us"],
  },
];

export default function Footer() {
  return (
    <footer id="contact" className="relative scroll-mt-20 overflow-hidden bg-[#04161d] pt-20">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-sand/40 to-transparent" />

      <div className="shell">
        {/* Newsletter */}
        <div
          data-reveal
          className="flex flex-col gap-8 border-b border-white/8 pb-14 lg:flex-row lg:items-center lg:justify-between"
        >
          <div className="max-w-[440px]">
            <h2 className="font-display text-[clamp(1.6rem,3.2vw,2.25rem)] font-semibold leading-tight tracking-[-0.02em] text-white">
              Join the journey.
            </h2>
            <p className="mt-3 text-[14.5px] leading-relaxed text-mist/60">
              Early access to new colourways, travel guides and 10% off your first case.
            </p>
          </div>

          <form
            className="flex w-full max-w-[440px] flex-col gap-3 sm:flex-row"
            onSubmit={(e) => e.preventDefault()}
          >
            <label className="sr-only" htmlFor="newsletter-email">
              Email address
            </label>
            <input
              id="newsletter-email"
              type="email"
              required
              placeholder="you@email.com"
              className="h-[52px] flex-1 rounded-full border border-white/15 bg-white/6 px-6 text-[14px] text-white placeholder:text-white/35 transition focus:border-sand/60 focus:bg-white/10 focus:outline-none"
            />
            <button
              type="submit"
              className="group inline-flex h-[52px] items-center justify-center gap-2 rounded-full bg-white px-7 font-display text-[14px] font-semibold text-ink transition-all duration-300 hover:-translate-y-0.5 hover:bg-cream"
            >
              Subscribe
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </button>
          </form>
        </div>

        {/* Links */}
        <div className="grid gap-12 py-14 lg:grid-cols-[1.4fr_repeat(3,1fr)]">
          <div data-reveal>
            <a href="#home" className="group inline-flex items-center gap-2.5">
              <LogoMark className="h-[26px] w-[26px] text-white transition-transform duration-500 group-hover:rotate-6" />
              <span className="font-display text-[15px] font-semibold tracking-[0.22em] text-white">
                TRAVELUXE
              </span>
            </a>
            <p className="mt-5 max-w-[300px] text-[13.5px] leading-relaxed text-mist/55">
              Premium travel luggage designed for modern explorers. Lightweight, durable and
              stylish — made to go wherever life takes you.
            </p>
          </div>

          {COLUMNS.map((col, i) => (
            <nav key={col.title} data-reveal style={{ transitionDelay: `${0.08 * (i + 1)}s` }}>
              <h3 className="font-display text-[12px] font-semibold uppercase tracking-[0.2em] text-white/85">
                {col.title}
              </h3>
              <ul className="mt-5 space-y-3">
                {col.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#collection"
                      className="group inline-flex items-center gap-2 text-[13.5px] text-mist/55 transition-colors hover:text-white"
                    >
                      <span className="h-px w-0 bg-sand transition-all duration-300 group-hover:w-3" />
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col items-center justify-between gap-4 border-t border-white/8 py-7 sm:flex-row">
          <p className="text-[12.5px] text-mist/45">
            © {new Date().getFullYear()} Travelluxe. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            {["Instagram", "Pinterest", "Journal"].map((s) => (
              <a
                key={s}
                href="#home"
                className="text-[12.5px] text-mist/45 transition-colors hover:text-white"
              >
                {s}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
