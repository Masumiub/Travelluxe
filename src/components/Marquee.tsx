const ITEMS = [
  "Free worldwide shipping over $150",
  "TSA-approved locks",
  "10-year warranty",
  "100-day trial",
  "Recycled polycarbonate",
  "Designed in Milan",
];

export default function Marquee() {
  const row = [...ITEMS, ...ITEMS];

  return (
    <section
      aria-label="Brand promises"
      className="relative overflow-hidden border-y border-white/8 bg-[#06202a] py-4"
    >
      <div
        className="anim-marquee flex w-max items-center gap-10 sm:gap-14"
        style={{
          maskImage: "linear-gradient(90deg,transparent,#000 8%,#000 92%,transparent)",
          WebkitMaskImage: "linear-gradient(90deg,transparent,#000 8%,#000 92%,transparent)",
        }}
      >
        {row.map((item, i) => (
          <span key={`${item}-${i}`} className="flex shrink-0 items-center gap-10 sm:gap-14">
            <span className="font-display text-[11.5px] font-medium uppercase tracking-[0.24em] text-white/55">
              {item}
            </span>
            <span className="h-1 w-1 shrink-0 rounded-full bg-[#dcc08f]/70" />
          </span>
        ))}
      </div>
    </section>
  );
}
