import { ThaiHero } from "@/components/readiness_thai_page/thai_hero";
import { ThaiStatisticsGrid } from "@/components/readiness_thai_page/thai_statistics_grid";
import { ThaiInsights } from "@/components/readiness_thai_page/thai_benefits_grid";
import { ThaiFinalCta } from "@/components/readiness_thai_page/thai_final_cta";

export default function ThaiReadinessPage() {
  const heroContent = {
    accent: "🇹🇭 Data residency in Thailand",
    title: "Local-first AI for Thai enterprises",
    subtitle: "Professional Class AI for Your Enterprise",
  };

  const finalCtaContent = {
    title: "Interested to unleash AI across your organization?",
    message: "Tell us about your environment and goals. Let's plan a pilot.",
  };

  return (
    <>
      <ThaiHero content={heroContent} />
      <ThaiStatisticsGrid />
      <ThaiInsights />
      <ThaiFinalCta content={finalCtaContent} />
    </>
  );
}
