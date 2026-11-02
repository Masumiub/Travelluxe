import {
  ArrowRight,
  FeatherIcon,
  LeafIcon,
  LockIcon,
  MedalIcon,
  PlaneIcon,
  PlayIcon,
  ShieldIcon,
} from "./Icons";

const FEATURES = [
  { Icon: FeatherIcon, title: "Lightweight", copy: "Easy to carry" },
  { Icon: ShieldIcon, title: "Durable Build", copy: "Built for adventure" },
  { Icon: LockIcon, title: "TSA Lock", copy: "Travel with confidence" },
  { Icon: MedalIcon, title: "Premium Design", copy: "Style in every journey" },
];

const SWATCHES = [
  { src: "/images/product-teal.jpg", name: "Verde Signature" },
  { src: "/images/product-black.jpg", name: "Onyx Pro" },
  { src: "/images/product-blue.jpg", name: "Azure Cabin" },
  { src: "/images/product-blush.jpg", name: "Blush Voyage" },
];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative isolate flex min-h-[100svh] flex-col overflow-hidden bg-[#06222b] lg:min-h-[880px]"
    >
      {/* ---------- Background ---------- */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <img
          src="/images/hero.jpg"
          alt="Travelluxe signature carry-on standing on a stone pedestal beneath a cream arch on the Mediterranean coast"
          className="anim-kenburns h-full w-full object-cover object-center"
          fetchPriority="high"
          decoding="async"
        />
        {/* legibility scrims */}
        <div className="absolute inset-0 bg-[linear-gradient(97deg,rgba(4,25,32,0.88)_0%,rgba(5,31,40,0.66)_20%,rgba(6,38,48,0.22)_42%,rgba(6,38,48,0)_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(120%_80%_at_78%_38%,rgba(255,244,214,0.14)_0%,rgba(6,38,48,0)_55%)]" />
        <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-[#03181f]/75 via-[#03181f]/25 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-[38%] bg-gradient-to-t from-[#03181f]/78 via-[#03181f]/22 to-transparent" />
      </div>

      {/* ---------- Content ---------- */}
      <div className="shell relative z-10 flex flex-1 flex-col pb-9 pt-[100px] sm:pb-10 sm:pt-[108px] lg:pb-[42px]">
        <div className="max-w-[640px] lg:pt-[5.5vh]">
          {/* Eyebrow badge */}
          <span
            className="glass anim-rise inline-flex items-center gap-2 rounded-full py-[7px] pl-3 pr-4"
            style={{ animationDelay: "0.15s" }}
          >
            <PlaneIcon className="h-[13px] w-[13px] -rotate-12 text-[#f2ddb2]" />
            <span className="text-[11.5px] font-medium tracking-[0.1em] text-white/90">
              Premium Travel Luggage
            </span>
          </span>

          {/* Headline */}
          <h1 className="mt-6 font-display text-[clamp(2.5rem,8.4vw,4.75rem)] font-semibold leading-[1.07] tracking-[-0.025em] sm:mt-7">
            <span className="anim-rise block text-white" style={{ animationDelay: "0.28s" }}>
              Your Journey
            </span>
            <span
              className="text-cream-gradient anim-rise block"
              style={{ animationDelay: "0.4s" }}
            >
              Our Priority
            </span>
          </h1>

          {/* Sub copy */}
          <p
            className="anim-rise mt-5 max-w-[432px] text-[15px] leading-[1.66] text-white/68 sm:text-[16px]"
            style={{ animationDelay: "0.52s" }}
          >
            Discover luggage designed for modern explorers. Lightweight, durable and stylish —
            made to go wherever life takes you.
          </p>

          {/* CTAs */}
          <div
            className="anim-rise mt-8 flex flex-wrap items-center gap-x-7 gap-y-4 sm:mt-9"
            style={{ animationDelay: "0.64s" }}
          >
            <a
              href="#collection"
              className="group relative inline-flex h-[52px] items-center gap-3 overflow-hidden rounded-full bg-white pl-7 pr-6 font-display text-[14.5px] font-semibold text-[#0a2630] shadow-[0_18px_40px_-18px_rgba(0,0,0,0.75)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_24px_50px_-20px_rgba(0,0,0,0.85)]"
            >
              <span className="relative z-10">Shop Collection</span>
              <ArrowRight className="relative z-10 h-[17px] w-[17px] transition-transform duration-300 group-hover:translate-x-1.5" />
              <span className="anim-sheen pointer-events-none absolute inset-y-0 left-0 z-0 w-1/3 bg-[linear-gradient(90deg,transparent,rgba(220,192,143,0.55),transparent)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </a>

            <a
              href="#story"
              className="group inline-flex items-center gap-3 text-white/90 transition-colors hover:text-white"
            >
              <span className="grid h-[46px] w-[46px] place-items-center rounded-full border border-white/45 backdrop-blur-sm transition-all duration-300 group-hover:scale-105 group-hover:border-white group-hover:bg-white/12">
                <PlayIcon className="ml-0.5 h-[15px] w-[15px]" />
              </span>
              <span className="font-display text-[14px] font-medium">Watch Video</span>
            </a>
          </div>
        </div>

        {/* flexible space */}
        <div className="min-h-[30px] flex-1 lg:min-h-[6vh]" />

        {/* ---------- Feature strip ---------- */}
        <ul
          id="features"
          className="grid max-w-[620px] scroll-mt-28 grid-cols-2 gap-x-5 gap-y-7 sm:grid-cols-4 sm:gap-x-3"
        >
          {FEATURES.map(({ Icon, title, copy }, i) => (
            <li
              key={title}
              className="anim-rise group"
              style={{ animationDelay: `${0.8 + i * 0.09}s` }}
            >
              <Icon
                className="h-[25px] w-[25px] text-white/85 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:text-[#f2ddb2]"
                strokeWidth={1.25}
              />
              <p className="mt-3 font-display text-[14px] font-semibold leading-tight text-white">
                {title}
              </p>
              <p className="mt-1 text-[11.5px] leading-snug text-white/52">{copy}</p>
            </li>
          ))}
        </ul>

        {/* ---------- Explore card ---------- */}
        <div
          className="anim-rise mt-8 flex w-full max-w-[430px] items-center gap-3.5 rounded-[18px] p-3 pr-4 glass lg:mt-[6.5vh]"
          style={{ animationDelay: "1.15s" }}
        >
          <div className="flex shrink-0 items-center gap-3">
            <p className="font-display text-[12.5px] font-semibold leading-[1.3] text-white">
              Explore Our
              <br />
              Collection
            </p>
            <a
              href="#collection"
              aria-label="Open the collection"
              className="grid h-[34px] w-[34px] place-items-center rounded-full border border-white/35 text-white transition-all duration-300 hover:border-white hover:bg-white/15"
            >
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>

          <span className="mx-0.5 hidden h-[38px] w-px bg-white/15 sm:block" />

          <div className="no-scrollbar -mx-1 flex flex-1 items-center gap-2 overflow-x-auto px-1">
            {SWATCHES.map((s, i) => (
              <button
                key={s.name}
                type="button"
                title={s.name}
                aria-label={`View ${s.name}`}
                className={[
                  "group relative h-[44px] w-[50px] shrink-0 overflow-hidden rounded-[10px] ring-1 ring-white/20 transition-all duration-300 hover:-translate-y-1 hover:ring-white/70",
                  i === 0 ? "ring-2 ring-white/60" : "",
                ].join(" ")}
              >
                <img
                  src={s.src}
                  alt={s.name}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* ---------- Floating highlight card ---------- */}
      <aside className="anim-drift absolute right-[48px] top-[22.5%] z-10 hidden w-[214px] lg:block xl:right-[56px]">
        <div className="glass flex items-center gap-3 rounded-[16px] p-[11px] transition-transform duration-500 hover:-translate-y-1">
          <span className="grid h-[38px] w-[38px] shrink-0 place-items-center rounded-full bg-white/92 text-[#0f4a52]">
            <LeafIcon className="h-[19px] w-[19px]" strokeWidth={1.4} />
          </span>
          <span className="min-w-0 flex-1">
            <span className="block font-display text-[12.5px] font-semibold text-white">
              Ultra Lightweight
            </span>
            <span className="mt-0.5 block text-[10.5px] leading-tight text-white/62">
              Travel more, Carry less
            </span>
          </span>
          <ArrowRight className="h-[15px] w-[15px] shrink-0 text-white/45" />
        </div>
      </aside>

      {/* ---------- Slide indicator ---------- */}
      <div className="absolute bottom-[196px] right-[46px] z-10 hidden flex-col items-center gap-3 xl:flex">
        <span className="text-[11px] font-medium tracking-[0.12em] text-white/85">01</span>
        <span className="relative h-[54px] w-px bg-white/22">
          <span className="absolute inset-x-0 top-0 h-[18px] bg-white" />
        </span>
        <span className="text-[11px] font-medium tracking-[0.12em] text-white/45">04</span>
      </div>

      {/* ---------- Scroll cue ---------- */}
      <a
        href="#collection"
        className="group absolute bottom-[46px] right-[38px] z-10 hidden flex-col items-center gap-2 xl:flex"
      >
        <span className="grid h-[42px] w-[42px] place-items-center rounded-full border border-white/35 text-white backdrop-blur-sm transition-all duration-300 group-hover:border-white group-hover:bg-white/15">
          <svg
            viewBox="0 0 24 24"
            className="anim-bounce-soft h-[17px] w-[17px]"
            fill="none"
            stroke="currentColor"
            strokeWidth={1.5}
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M12 5v13" />
            <path d="m6 12.5 6 6 6-6" />
          </svg>
        </span>
        <span className="text-[10.5px] tracking-[0.04em] text-white/72 transition-colors group-hover:text-white">
          Scroll Down
        </span>
      </a>
    </section>
  );
}
