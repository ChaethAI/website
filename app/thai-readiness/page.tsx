import { ThaiHero } from "@/components/readiness_thai_page/thai_hero";
import { ThaiStatisticsGrid } from "@/components/readiness_thai_page/thai_statistics_grid";
import { ThaiInsights } from "@/components/readiness_thai_page/thai_benefits_grid";
import { ThaiFinalCta } from "@/components/readiness_thai_page/thai_final_cta";
import { GetInTouchButton } from "@/components/global/get_in_touch_button";
import { hero, finalCta } from "@/content/readiness/thailand_en";

export default function ThaiReadinessPage() {
  return (
    <>
      <ThaiHero
        content={hero}
        actions={<GetInTouchButton variant="secondary" size="lg" />}
      />
      <ThaiStatisticsGrid />
      <ThaiInsights />
      <ThaiFinalCta content={finalCta} />
    </>
  );
}
