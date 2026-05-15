import { PublicLayout } from "@/core/components/layout/public-layout";
import { BestSellerSection } from "@/features/home/components/best-seller-section";
import { CategorySection } from "@/features/home/components/category-section";
import { FinalCtaSection } from "@/features/home/components/final-cta-section";
import { HeroSection } from "@/features/home/components/hero-section";
import { HowToOrderSection } from "@/features/home/components/how-to-order-section";
import { ProblemSection } from "@/features/home/components/problem-section";
import { SolutionSection } from "@/features/home/components/solution-section";
import { TestimonialSection } from "@/features/home/components/testimonial-section";
import { WhyKahalaSection } from "@/features/home/components/why-kahala-section";
export default function HomePage() { return <PublicLayout><HeroSection /><ProblemSection /><SolutionSection /><CategorySection /><BestSellerSection /><WhyKahalaSection /><HowToOrderSection /><TestimonialSection /><FinalCtaSection /></PublicLayout>; }
