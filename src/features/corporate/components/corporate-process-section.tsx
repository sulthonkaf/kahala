const steps = [
  { title: "Brief kebutuhan", description: "Ceritakan pax, tanggal, lokasi, budget, dan tipe acara." },
  { title: "Rekomendasi paket", description: "Tim Kahala bantu pilih format personal cup, sharing box, atau event pack." },
  { title: "Konfirmasi jadwal", description: "Finalisasi menu, delivery slot, dan catatan packaging." },
  { title: "Produksi & delivery", description: "Paket disiapkan fresh dan dikirim sesuai jadwal." },
];

export function CorporateProcessSection() {
  return (
    <section className="rounded-[2rem] bg-green-800 p-6 text-white shadow-2xl shadow-green-950/15 sm:p-8">
      <div className="grid gap-8 lg:grid-cols-[0.72fr_1.28fr] lg:items-start">
        <div>
          <p className="text-sm font-black uppercase tracking-[0.22em] text-yellow-300">How it works</p>
          <h2 className="mt-3 text-3xl font-black tracking-tight">Corporate order tanpa proses yang bertele-tele.</h2>
          <p className="mt-4 text-sm leading-7 text-green-50/85">
            Flow dibuat singkat agar admin, HR, atau PIC event bisa cepat mengunci kebutuhan snack sehat.
          </p>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          {steps.map((step, index) => (
            <article key={step.title} className="rounded-[1.5rem] border border-white/10 bg-white/10 p-5 backdrop-blur">
              <p className="text-sm font-black text-yellow-300">0{index + 1}</p>
              <h3 className="mt-2 text-lg font-black">{step.title}</h3>
              <p className="mt-2 text-sm leading-6 text-green-50/80">{step.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
