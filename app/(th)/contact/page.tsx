import { Metadata } from 'next'
import ContactForm from '@/components/contact/contact_form'

export const metadata: Metadata = {
  title: 'ติดต่อเรา - Chaeth',
  description: 'ติดต่อทีมงาน Chaeth สำหรับข้อมูลเพิ่มเติมเกี่ยวกับโซลูชัน AI ภายในประเทศสำหรับองค์กรไทย',
  keywords: 'ติดต่อ, Chaeth, AI, ประเทศไทย, องค์กร',
  alternates: {
    canonical: 'https://chaeth.com/th/contact',
    languages: {
      'en-US': 'https://chaeth.com/contact',
      'th-TH': 'https://chaeth.com/th/contact',
    },
  },
  openGraph: {
    title: 'ติดต่อเรา - Chaeth',
    description: 'ติดต่อทีมงาน Chaeth สำหรับข้อมูลเพิ่มเติมเกี่ยวกับโซลูชัน AI ภายในประเทศสำหรับองค์กรไทย',
    url: 'https://chaeth.com/th/contact',
    siteName: 'Chaeth',
    locale: 'th_TH',
    type: 'website',
  },
}

export default function ThaiContactPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-4xl font-bold text-center mb-8">
            ติดต่อเรา
          </h1>
          <p className="text-lg text-muted-foreground text-center mb-12">
            พร้อมนำโซลูชัน AI ภายในประเทศมาสู่องค์กรของคุณหรือยัง? บอกเราเกี่ยวกับความต้องการของคุณ
          </p>
          <ContactForm />
        </div>
      </div>
    </div>
  )
}
