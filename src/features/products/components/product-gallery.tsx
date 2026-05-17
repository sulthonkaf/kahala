import Image from "next/image";

export function ProductGallery({ image, emoji, name }: { image?: string; emoji: string; name: string }) {
  return (
    <div className="relative aspect-square overflow-hidden rounded-[2.25rem] bg-emerald-50 shadow-2xl shadow-emerald-950/10">
      {image ? (
        <Image
          src={image}
          alt={`${name} Kahala`}
          fill
          sizes="(min-width: 1024px) 50vw, 100vw"
          className="object-cover"
          priority
        />
      ) : (
        <div className="flex h-full items-center justify-center bg-gradient-to-br from-emerald-50 to-amber-50 text-9xl">
          {emoji}
        </div>
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/35 via-transparent to-transparent" />
      <div className="absolute bottom-5 left-5 rounded-full bg-white/90 px-4 py-2 text-sm font-black text-emerald-800 shadow-lg backdrop-blur">
        Fresh daily
      </div>
    </div>
  );
}
