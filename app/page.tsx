import Hero from "@/components/hero";
import Intro from "@/components/intro";
import Explainer from "@/components/explainer";
import { CompactExplainers } from "@/components/compact_explainers";
import CaseStudies from "@/components/case_studies";
import UseCases from "@/components/use_cases";
import FinalCTA from "@/components/cta";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <>
      <Hero />
      <Intro />
      <Explainer />
      <CompactExplainers />
      <CaseStudies />
      <UseCases />
      <FinalCTA />
      <Footer />
    </>
  );
}
