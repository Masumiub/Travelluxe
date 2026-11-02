import { ArrowRight, StarIcon } from "./Icons";

const PRODUCTS = [
  {
    src: "/images/product-teal.jpg",
    name: "Verde Signature",
    line: "Cabin · 55 cm · 2.4 kg",
    price: "$389",
    tag: "Best seller",
  },
  {
    src: "/images/product-black.jpg",
    name: "Onyx Pro",
    line: "Check-in · 68 cm · 3.1 kg",
    price: "$449",
    tag: "New",
  },
  {
    src: "/images/product-blue.jpg",
    name: "Azure Cabin",
    line: "Cabin · 55 cm · 2.3 kg",
    price: "$359",
    tag: null,
  },
  {
    src: "/images/product-blush.jpg",
    name: "Blush Voyage",
    line: "Carry-on · 40 cm · 1.9 kg",
    price: "$329",
    tag: "Limited",
  },
];

export default function Collection() {
  return (
    <section id="collection" className="relative scroll-mt-20 bg-shell py-20 sm:py-24 lg:py-28">
      <div className="shell">
        {/* Heading */}
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div data-reveal className="max-w-[560px]">
            <span className="inline-flex items-center gap-2 text-[11.5px] font-semibold uppercase tracking-[0.26em] text-teal">
              <span className="h-px w-7 bg-teal/50" />
              The Collection
            </span>
            <h2 className="mt-4 font-display text-[clamp(1.9rem,4.2vw,3rem)] font-semibold leading-[1.14] tracking-[-0.02em] text-ink">
              Crafted for every
              <span className="text-teal"> kind of escape.</span>
            </h2>
          </div>

          <a
            href="#collection"
            data-reveal
            style={{ transitionDelay: "0.1s" }}
            className="group inline-flex items-center gap-2 self-start font-display text-[14px] font-semibold text-ink transition-colors hover:text-teal md:self-auto"
          >
            View all luggage
            <span className="grid h-9 w-9 place-items-center rounded-full border border-ink/15 transition-all duration-300 group-hover:border-teal group-hover:bg-teal group-hover:text-white">
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
            </span>
          </a>
        </div>

        {/* Grid */}
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
          {PRODUCTS.map((p, i) => (
            <article
              key={p.name}
              data-reveal
              style={{ transitionDelay: `${i * 0.09}s` }}
              className="group relative flex flex-col overflow-hidden rounded-[22px] bg-white shadow-[0_18px_40px_-30px_rgba(7,28,36,0.5)] transition-all duration-500 hover:-translate-y-2 hover:shadow-lift"
            >
              <div className="relative aspect-[4/5] overflow-hidden bg-[linear-gradient(160deg,#0e3540,#06202a)]">
                <img
                  src={p.src}
                  alt={`${p.name} luggage`}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.07]"
                />
                {p.tag && (
                  <span className="absolute left-4 top-4 rounded-full bg-white/92 px-3 py-1 text-[10.5px] font-semibold uppercase tracking-[0.14em] text-ink">
                    {p.tag}
                  </span>
                )}
                <button
                  type="button"
                  className="absolute inset-x-4 bottom-4 flex h-11 items-center justify-center gap-2 rounded-full bg-white/95 font-display text-[13px] font-semibold text-ink opacity-100 backdrop-blur transition-all duration-500 hover:bg-white sm:translate-y-4 sm:opacity-0 sm:group-hover:translate-y-0 sm:group-hover:opacity-100"
                >
                  Add to bag
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>

              <div className="flex flex-1 items-start justify-between gap-3 px-5 py-5">
                <div>
                  <h3 className="font-display text-[15.5px] font-semibold text-ink">{p.name}</h3>
                  <p className="mt-1 text-[12.5px] text-ink/50">{p.line}</p>
                  <div className="mt-2.5 flex items-center gap-0.5 text-[#d9ac5c]">
                    {Array.from({ length: 5 }).map((_, s) => (
                      <StarIcon key={s} className="h-[11px] w-[11px]" />
                    ))}
                    <span className="ml-1.5 text-[11.5px] text-ink/45">4.9</span>
                  </div>
                </div>
                <p className="font-display text-[16px] font-semibold text-teal">{p.price}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
