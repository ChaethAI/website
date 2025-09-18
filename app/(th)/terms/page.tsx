import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'ข้อกำหนดการใช้งาน - Chaeth',
  description: 'ข้อกำหนดและเงื่อนไขการใช้งานบริการ Chaeth - AI ภายในประเทศสำหรับองค์กรไทย',
  keywords: 'ข้อกำหนดการใช้งาน, เงื่อนไข, Chaeth, AI, ประเทศไทย',
  alternates: {
    canonical: 'https://chaeth.com/th/terms',
    languages: {
      'en-US': 'https://chaeth.com/terms',
      'th-TH': 'https://chaeth.com/th/terms',
    },
  },
  openGraph: {
    title: 'ข้อกำหนดการใช้งาน - Chaeth',
    description: 'ข้อกำหนดและเงื่อนไขการใช้งานบริการ Chaeth - AI ภายในประเทศสำหรับองค์กรไทย',
    url: 'https://chaeth.com/th/terms',
    siteName: 'Chaeth',
    locale: 'th_TH',
    type: 'website',
  },
}

export default function ThaiTermsPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">
            ข้อกำหนดการใช้งาน
          </h1>

          <div className="prose prose-lg max-w-none">
            <p className="text-muted-foreground mb-6">
              ข้อกำหนดและเงื่อนไขการใช้งานบริการ Chaeth
              โปรดอ่านข้อกำหนดเหล่านี้อย่างละเอียดก่อนใช้งานบริการของเรา
            </p>

            <h2 className="text-2xl font-semibold mb-4">การยอมรับข้อกำหนด</h2>
            <p className="mb-4">
              การใช้งานบริการ Chaeth ถือว่าคุณได้ยอมรับและตกลงที่จะปฏิบัติตามข้อกำหนดและเงื่อนไขทั้งหมดที่ระบุไว้ในเอกสารนี้
            </p>

            <h2 className="text-2xl font-semibold mb-4">บริการที่ให้</h2>
            <p className="mb-4">
              Chaeth ให้บริการ AI ภายในประเทศสำหรับองค์กรไทย
              บริการครอบคลุมการใช้งาน AI ในการทำงานต่างๆ ขององค์กร
              โดยคำนึงถึงความปลอดภัยและการสอดคล้องกับกฎหมาย PDPA
            </p>

            <h2 className="text-2xl font-semibold mb-4">ความรับผิดชอบของผู้ใช้</h2>
            <p className="mb-4">
              คุณต้องรับผิดชอบในการใช้งานบริการอย่างถูกต้องและเหมาะสม
              รวมถึงการรักษาความลับของข้อมูลการเข้าสู่ระบบและการไม่ละเมิดสิทธิของผู้อื่น
            </p>

            <h2 className="text-2xl font-semibold mb-4">การยกเลิกบริการ</h2>
            <p className="mb-4">
              คุณสามารถยกเลิกบริการได้ตลอดเวลา
              การยกเลิกจะมีผลตามเงื่อนไขที่ระบุในสัญญาการให้บริการ
            </p>

            <h2 className="text-2xl font-semibold mb-4">ติดต่อเรา</h2>
            <p className="mb-4">
              หากคุณมีคำถามเกี่ยวกับข้อกำหนดการใช้งานนี้
              กรุณาติดต่อเราที่ legal@chaeth.com
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
