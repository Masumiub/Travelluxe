import { ArrowRight, CheckIcon } from "./Icons";

const POINTS = [
  "Aerospace-grade polycarbonate shell that shrugs off baggage handlers",
  "Whisper-quiet 360° spinner wheels tested over 60 km of pavement",
  "Cloud-touch handle with three height stops and a leather grip",
];

const STATS = [
  { value: "2.4", unit: "kg", label: "Feather-light cabin weight" },
  { value: "10", unit: "yr", label: "Warranty on every shell" },
  { value: "38", unit: "L", label: "Packable capacity, expandable" },
];

export default function Story() {
  return (
    <section
      id="story"
      className="relative scroll-mt-20 overflow-hidden bg-deep py-20 sm:py-24 lg:py-28"
    >
      {/* soft ambience */}
      <div className="pointer-events-none absolute -left-40 top-10 h-[420px] w-[420px] rounded-full bg-teal/25 blur-[120px]" />
      <div className="pointer-events-none absolute -right-32 bottom-0 h-[380px] w-[380px] rounded-full bg-sand/10 blur-[130px]" />

      <div className="shell relative grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        {/* Copy */}
        <div>
          <span
            data-reveal="left"
            className="inline-flex items-center gap-2 text-[11.5px] font-semibold uppercase tracking-[0.26em] text-sand"
          >
            <span className="h-px w-7 bg-sand/50" />
            Why Travelluxe
          </span>

          <h2
            data-reveal
            style={{ transitionDelay: "0.08s" }}
            className="mt-4 font-display text-[clamp(1.9rem,4.2vw,3rem)] font-semibold leading-[1.14] tracking-[-0.02em] text-white"
          >
            Built for the journey,
            <span className="text-cream-gradient"> not just the trip.</span>
          </h2>

          <p
            data-reveal
            style={{ transitionDelay: "0.14s" }}
            className="mt-5 max-w-[500px] text-[15.5px] leading-[1.7] text-mist/65"
          >
            Every Travelluxe case begins as a single sheet of recycled polycarbonate and ends as a
            lifetime travel companion — engineered in Milan, refined by 40,000 kilometres of real
            world testing.
          </p>

          <ul className="mt-8 space-y-4">
            {POINTS.map((point, i) => (
              <li
                key={point}
                data-reveal
                style={{ transitionDelay: `${0.2 + i * 0.08}s` }}
                className="group flex gap-3.5"
              >
                <span className="mt-0.5 grid h-[22px] w-[22px] shrink-0 place-items-center rounded-full border border-sand/45 text-sand transition-all duration-300 group-hover:bg-sand group-hover:text-ink">
                  <CheckIcon className="h-[13px] w-[13px]" strokeWidth={2} />
                </span>
                <span className="text-[14.5px] leading-relaxed text-mist/75">{point}</span>
              </li>
            ))}
          </ul>

          <a
            href="#collection"
            data-reveal
            style={{ transitionDelay: "0.46s" }}
            className="group mt-10 inline-flex h-[52px] items-center gap-3 rounded-full bg-cream pl-7 pr-6 font-display text-[14.5px] font-semibold text-ink transition-all duration-300 hover:-translate-y-0.5 hover:bg-white"
          >
            Discover the craft
            <ArrowRight className="h-[17px] w-[17px] transition-transform duration-300 group-hover:translate-x-1.5" />
          </a>
        </div>

        {/* Image */}
        <div data-reveal="zoom" className="relative">
          <div className="relative overflow-hidden rounded-[28px] border border-white/10 shadow-lift">
            <img
              src="/images/lifestyle.jpg"
              alt="Travelluxe cases resting on a sunlit Mediterranean terrace"
              loading="lazy"
              className="h-[340px] w-full object-cover transition-transform duration-[1200ms] ease-out hover:scale-105 sm:h-[440px] lg:h-[520px]"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-deep/70 via-transparent to-transparent" />
          </div>

          {/* floating badge */}
          <div className="glass absolute -bottom-6 left-5 flex items-center gap-3 rounded-[18px] px-4 py-3.5 sm:left-8">
            <span className="font-display text-[26px] font-semibold leading-none text-white">
              40k
            </span>
            <span className="max-w-[110px] text-[11.5px] leading-tight text-white/70">
              kilometres of testing per model
            </span>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="shell relative mt-20 grid gap-px overflow-hidden rounded-[24px] border border-white/10 bg-white/8 sm:grid-cols-3">
        {STATS.map((s, i) => (
          <div
            key={s.label}
            data-reveal
            style={{ transitionDelay: `${i * 0.1}s` }}
            className="group bg-deep/80 px-7 py-8 transition-colors duration-500 hover:bg-[#0b313c]"
          >
            <p className="font-display text-[34px] font-semibold leading-none text-white">
              {s.value}
              <span className="ml-1 text-[16px] font-medium text-sand">{s.unit}</span>
            </p>
            <p className="mt-3 text-[13px] leading-snug text-mist/60">{s.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
