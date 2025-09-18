import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import th from '@/content/th'
import En from '@/content/en'
import Hero from '@/components/hero'
import Intro from '@/components/intro'
import Explainer from '@/components/explainer'
import UseCases from '@/components/use_cases'
import CaseStudies from '@/components/case_studies'
import PricingPlans from '@/components/pricing_plans'
import Cta from '@/components/cta'

export const metadata: Metadata = {
  title: 'Chaeth - AI ภายในประเทศสำหรับองค์กรไทย',
  description: 'AI ระดับมืออาชีพที่เพิ่มขีดความสามารถองค์กรของคุณ พร้อมการเก็บข้อมูลในประเทศไทย สอดคล้อง PDPA',
  keywords: 'AI, ประเทศไทย, PDPA, องค์กร, บุคลากร, ธุรกิจ, ท้องถิ่น',
  alternates: {
    canonical: 'https://chaeth.com/th',
    languages: {
      'en-US': 'https://chaeth.com',
      'th-TH': 'https://chaeth.com/th',
    },
  },
  openGraph: {
    title: 'Chaeth - AI ภายในประเทศสำหรับองค์กรไทย',
    description: 'AI ระดับมืออาชีพที่เพิ่มขีดความสามารถองค์กรของคุณ พร้อมการเก็บข้อมูลในประเทศไทย สอดคล้อง PDPA',
    url: 'https://chaeth.com/th',
    siteName: 'Chaeth',
    locale: 'th_TH',
    type: 'website',
  },
}

export default function ThaiHomePage() {
  return (
    <main className="min-h-screen">
      <Hero content={th.hero} ui={th.ui} />
      <Intro highlights={th.introHighlights} />
      <Explainer explainers={th.explainers} dialogs={th.explainerDialogs} ui={th.ui} />
      <UseCases
        useCases={th.useCases}
        pills={th.useCasePills}
        dialogs={th.useCaseDialogs}
        ui={th.ui}
      />
      <CaseStudies caseStudies={th.caseStudies} ui={th.ui} />
      <PricingPlans pricing={th.pricing} />
      <Cta cta={th.cta} />
    </main>
  )
}