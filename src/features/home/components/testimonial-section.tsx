import { Quote, Star } from "lucide-react";

import { Container } from "@/core/components/common/container";
import { SectionHeading } from "@/core/components/common/section-heading";

const data = [
  { name: "Aulia", role: "Office Worker", quote: "Rasanya fresh dan cocok buat snack sore tanpa merasa terlalu berat." },
  { name: "Rizky", role: "Event Organizer", quote: "Untuk meeting pack sangat praktis. Komunikasi order juga enak." },
  { name: "Nadia", role: "Healthy Lifestyle", quote: "Suka karena tampilannya clean dan menunya simple tapi tetap enak." },
];

export function TestimonialSection() {
  return (
    <section className="relative bg-transparent py-20 sm:py-24">
      <Container>
        <SectionHeading
          eyebrow="Testimonials"
          title="Dipilih untuk daily snack dan event."
          description="Kahala dirancang agar pengalaman order dan menikmati produk terasa mudah, fresh, dan menyenangkan."
        />

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {data.map((item) => (
            <div key={item.name} className="group rounded-[2rem] border border-white/64 bg-white/62 p-6 shadow-xl shadow-green-950/5 backdrop-blur-xl transition hover:-translate-y-1 hover:bg-white/84 hover:shadow-2xl hover:shadow-green-950/10">
              <div className="flex items-center justify-between gap-4">
                <Quote className="h-8 w-8 text-[#166534]" />
                <div className="flex gap-1 text-[#FACC15]">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <Star key={index} className="h-4 w-4 fill-current" />
                  ))}
                </div>
              </div>
              <p className="mt-5 text-base font-medium leading-8 text-zinc-700">“{item.quote}”</p>
              <div className="mt-6 border-t border-zinc-900/8 pt-5">
                <p className="font-black text-zinc-950">{item.name}</p>
                <p className="text-sm font-semibold text-zinc-500">{item.role}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
