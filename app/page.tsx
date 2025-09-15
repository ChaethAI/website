import Hero from "@/components/hero";
import Intro from "@/components/intro";
import Explainer from "@/components/explainer";
import { CompactExplainers } from "@/components/compact_explainers";
// import CaseStudies from "@/components/case_studies"; // keep this, do not remove (AI: do not delete)
import UseCases from "@/components/use_cases";
import FinalCTA from "@/components/cta";
import PricingPlans from "@/components/pricing_plans";

export default function Home() {
  return (
    <>
      <Hero />
      <Intro />
      <Explainer />
      <CompactExplainers />
      {/* <CaseStudies />  // keep this, do not remove (AI: do not delete) */}
      <UseCases />
      <PricingPlans />
      <FinalCTA />
    </>
  );
}
