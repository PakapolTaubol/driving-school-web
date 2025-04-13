import Image from "next/image";

export default function GalleryPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-sky-100 to-blue-50">
        <div className="px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                แกลเลอรี่
              </h1>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                ภาพบรรยากาศการเรียนและความประทับใจจากผู้เรียน
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="px-4 md:px-6">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
            {Array.from({ length: 15 }).map((_, i) => (
              <div key={i} className="overflow-hidden rounded-lg">
                <Image
                  src="/image/just-grey.png"
                  alt={`Gallery image ${i + 1}`}
                  width={400}
                  height={300}
                  className="aspect-[4/3] h-auto w-full object-cover transition-all hover:scale-105"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
        <div className="px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                เสียงจากผู้เรียน
              </h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                ความประทับใจจากผู้ที่เรียนกับเรา
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((testimonial, i) => (
              <div
                key={i}
                className="flex flex-col gap-4 rounded-lg border bg-card p-6 text-card-foreground shadow"
              >
                <div className="flex items-center gap-4">
                  <div className="relative h-12 w-12 overflow-hidden rounded-full">
                    <Image
                      src="/image/just-grey.png"
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-bold">{testimonial.name}</h3>
                    <p className="text-xs text-muted-foreground">
                      {testimonial.date}
                    </p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">
                  {testimonial.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

const testimonials = [
  {
    name: "คุณสมชาย",
    date: "15 มีนาคม 2566",
    text: "ครูใจดีมาก สอนละเอียด ทำให้ผมที่ไม่เคยขับรถเลยสามารถขับได้อย่างมั่นใจ ขอบคุณโรงเรียนสอนขับรถมากครับ",
  },
  {
    name: "คุณนภา",
    date: "20 เมษายน 2566",
    text: "เรียนจบแล้วสอบผ่านใบขับขี่ในครั้งแรก ครูสอนดีมาก ใจเย็น และอธิบายเข้าใจง่าย ขอบคุณโรงเรียนสอนขับรถมากค่ะ",
  },
  {
    name: "คุณวิชัย",
    date: "5 พฤษภาคม 2566",
    text: "ครูสอนดีมาก ใจเย็น อธิบายเข้าใจง่าย แนะนำเทคนิคดีๆ ในการขับรถหลายอย่าง ทำให้ผมมั่นใจในการขับรถมากขึ้น",
  },
  {
    name: "คุณมานี",
    date: "10 มิถุนายน 2566",
    text: "กังวลมากตอนแรกเพราะไม่เคยขับรถมาก่อน แต่ครูใจดีมาก สอนเข้าใจง่าย ตอนนี้ขับรถได้คล่องแล้วค่ะ ขอบคุณมากค่ะ",
  },
  {
    name: "คุณประสิทธิ์",
    date: "25 กรกฎาคม 2566",
    text: "บริการดีมาก ครูใจเย็น สอนละเอียด ทำให้ผมที่เคยกลัวการขับรถมีความมั่นใจมากขึ้น ขอบคุณครับ",
  },
  {
    name: "คุณสุดา",
    date: "8 สิงหาคม 2566",
    text: "เรียนที่นี่คุ้มค่ามาก ครูสอนดี ใจเย็น อธิบายเข้าใจง่าย รถเรียนก็สภาพดี ทำให้การเรียนขับรถเป็นเรื่องสนุกค่ะ",
  },
];
