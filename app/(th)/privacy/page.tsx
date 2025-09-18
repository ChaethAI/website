import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'นโยบายความเป็นส่วนตัว - Chaeth',
  description: 'นโยบายความเป็นส่วนตัวของ Chaeth - AI ภายในประเทศสำหรับองค์กรไทย',
  keywords: 'นโยบายความเป็นส่วนตัว, PDPA, Chaeth, AI, ประเทศไทย',
  alternates: {
    canonical: 'https://chaeth.com/th/privacy',
    languages: {
      'en-US': 'https://chaeth.com/privacy',
      'th-TH': 'https://chaeth.com/th/privacy',
    },
  },
  openGraph: {
    title: 'นโยบายความเป็นส่วนตัว - Chaeth',
    description: 'นโยบายความเป็นส่วนตัวของ Chaeth - AI ภายในประเทศสำหรับองค์กรไทย',
    url: 'https://chaeth.com/th/privacy',
    siteName: 'Chaeth',
    locale: 'th_TH',
    type: 'website',
  },
}

export default function ThaiPrivacyPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">
            นโยบายความเป็นส่วนตัว
          </h1>

          <div className="prose prose-lg max-w-none">
            <p className="text-muted-foreground mb-6">
              Chaeth ให้ความสำคัญกับความเป็นส่วนตัวและการคุ้มครองข้อมูลส่วนบุคคลของคุณ
              นโยบายความเป็นส่วนตัวนี้จะอธิบายถึงวิธีที่เราจัดการและปกป้องข้อมูลของคุณ
            </p>

            <h2 className="text-2xl font-semibold mb-4">การเก็บรวบรวมข้อมูล</h2>
            <p className="mb-4">
              เราจะเก็บรวบรวมเฉพาะข้อมูลที่จำเป็นในการให้บริการ AI ภายในประเทศสำหรับองค์กรของคุณ
              ข้อมูลทั้งหมดจะถูกจัดเก็บและประมวลผลภายในประเทศไทย สอดคล้องกับกฎหมาย PDPA
            </p>

            <h2 className="text-2xl font-semibold mb-4">การใช้ข้อมูล</h2>
            <p className="mb-4">
              ข้อมูลของคุณจะถูกใช้เพื่อวัตถุประสงค์ในการให้บริการ AI เท่านั้น
              เราจะไม่ใช้ข้อมูลของคุณเพื่อฝึกโมเดล AI หรือแบ่งปันให้กับบุคคลที่สามโดยไม่ได้รับความยินยอม
            </p>

            <h2 className="text-2xl font-semibold mb-4">การรักษาความปลอดภัย</h2>
            <p className="mb-4">
              เราประยุกต์ใช้มาตรการรักษาความปลอดภัยระดับองค์กรเพื่อปกป้องข้อมูลของคุณ
              รวมถึงการเข้ารหัสข้อมูล การควบคุมการเข้าถึง และการตรวจสอบอย่างต่อเนื่อง
            </p>

            <h2 className="text-2xl font-semibold mb-4">ติดต่อเรา</h2>
            <p className="mb-4">
              หากคุณมีคำถามเกี่ยวกับนโยบายความเป็นส่วนตัวนี้
              กรุณาติดต่อเราที่ privacy@chaeth.com
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
