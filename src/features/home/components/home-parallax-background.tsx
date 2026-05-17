import Image from "next/image";
import { KAHALA_IMAGES } from "@/core/constants/asset.constant";

const fruitNotes = [
  { label: "fresh daily", className: "left-[7%] top-[10%] rotate-[-8deg]" },
  { label: "sweet control", className: "right-[8%] top-[34%] rotate-[7deg]" },
  { label: "office ready", className: "left-[10%] top-[64%] rotate-[5deg]" },
];

export function HomeParallaxBackground() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(180deg,#FFF7ED_0%,#FFFFFF_24%,#ECFDF5_48%,#FFF7ED_72%,#FFFFFF_100%)]" />
      <div
        data-kahala-parallax
        data-speed="42"
        className="absolute -left-32 top-[5%] h-[30rem] w-[30rem] rounded-full bg-green-200/55 blur-3xl will-change-transform"
      />
      <div
        data-kahala-parallax
        data-speed="-34"
        className="absolute -right-28 top-[24%] h-[28rem] w-[28rem] rounded-full bg-orange-200/45 blur-3xl will-change-transform"
      />
      <div
        data-kahala-parallax
        data-speed="28"
        className="absolute left-[18%] top-[72%] h-[24rem] w-[24rem] rounded-full bg-yellow-200/34 blur-3xl will-change-transform"
      />
      <div
        data-kahala-parallax
        data-speed="-24"
        className="absolute right-[16%] top-[58%] h-[20rem] w-[20rem] rounded-full bg-pink-200/28 blur-3xl will-change-transform"
      />

      <div
        data-kahala-parallax
        data-speed="58"
        className="absolute -right-20 top-[7%] hidden h-80 w-80 overflow-hidden rounded-[2.5rem] border border-white/50 opacity-[0.26] shadow-2xl shadow-green-950/10 will-change-transform lg:block"
      >
        <Image src={KAHALA_IMAGES.freshFruitSpread} alt="" fill sizes="288px" className="object-cover" />
      </div>
      <div
        data-kahala-parallax
        data-speed="-52"
        className="absolute -left-24 top-[43%] hidden h-80 w-80 overflow-hidden rounded-full border border-white/60 opacity-[0.24] shadow-2xl shadow-orange-950/10 will-change-transform lg:block"
      >
        <Image src={KAHALA_IMAGES.breakfastFruitBowls} alt="" fill sizes="320px" className="object-cover" />
      </div>
      <div
        data-kahala-parallax
        data-speed="38"
        className="absolute right-[5%] top-[76%] hidden h-72 w-72 overflow-hidden rounded-[2.25rem] border border-white/60 opacity-[0.24] shadow-2xl shadow-green-950/10 will-change-transform lg:block"
      >
        <Image src={KAHALA_IMAGES.citrusTable} alt="" fill sizes="256px" className="object-cover" />
      </div>

      {fruitNotes.map((note, index) => (
        <div
          key={note.label}
          data-kahala-parallax
          data-speed={index % 2 === 0 ? "24" : "-18"}
          className={`absolute hidden rounded-full border border-white/70 bg-white/70 px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-green-800 shadow-lg shadow-green-950/5 backdrop-blur will-change-transform md:block ${note.className}`}
        >
          {note.label}
        </div>
      ))}

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(255,255,255,0.54),transparent_34rem),linear-gradient(90deg,rgba(255,247,237,0.54),rgba(255,255,255,0.16),rgba(236,253,245,0.38))]" />
      <div className="absolute inset-0 bg-[radial-gradient(rgba(34,197,94,0.1)_1px,transparent_1px)] [background-size:22px_22px] opacity-60" />
    </div>
  );
}
