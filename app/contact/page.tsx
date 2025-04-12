import Link from "next/link";
import { MapPin, Phone, Mail, Facebook, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { CONTACT_INFO } from "@/lib/constants";

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-sky-100 to-blue-50">
        <div className="px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                ติดต่อเรา
              </h1>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                มีคำถามหรือต้องการข้อมูลเพิ่มเติม ติดต่อเราได้ตามช่องทางด้านล่าง
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="px-4 md:px-6">
          <div className="grid gap-10 lg:grid-cols-2">
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold mb-4">ข้อมูลติดต่อ</h2>
                <div className="grid gap-4">
                  <div className="flex items-start gap-4">
                    <Phone className="h-5 w-5 text-blue-600 mt-0.5" />
                    <div>
                      <h3 className="font-bold">โทรศัพท์</h3>
                      <p className="text-sm text-muted-foreground">
                        {CONTACT_INFO.phone.phone1}
                        {/* <br />
                        081-234-5678 */}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <MessageCircle className="h-5 w-5 text-green-600 mt-0.5" />
                    <div>
                      <h3 className="font-bold">Line ID</h3>
                      <p className="text-sm text-muted-foreground">
                        {CONTACT_INFO.phone.phone1}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <MapPin className="h-5 w-5 text-blue-600 mt-0.5" />
                    <div>
                      <h3 className="font-bold">ที่อยู่</h3>
                      <p className="text-sm text-muted-foreground">
                        {CONTACT_INFO.address.line1}
                        <br />
                        {CONTACT_INFO.address.line2}
                        <br />
                        {CONTACT_INFO.address.line3}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <h2 className="text-2xl font-bold mb-4">ติดตามเรา</h2>
                <div className="flex gap-4">
                  <Link
                    href={CONTACT_INFO.social.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 rounded-lg border bg-card p-4 text-card-foreground shadow hover:bg-blue-50"
                  >
                    <Facebook className="h-5 w-5 text-blue-600" />
                    <span>Facebook</span>
                  </Link>
                  <Link
                    href={CONTACT_INFO.social.line}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 rounded-lg border bg-card p-4 text-card-foreground shadow hover:bg-green-50"
                  >
                    <MessageCircle className="h-5 w-5 text-green-600" />
                    <span>Line</span>
                  </Link>
                </div>
              </div>
              <div>
                <h2 className="text-2xl font-bold mb-4">เวลาทำการ</h2>
                <div className="grid gap-2">
                  <div className="flex justify-between">
                    <span>วันจันทร์ - วันศุกร์</span>
                    <span>08:00 - 18:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>วันเสาร์</span>
                    <span>09:00 - 16:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>วันอาทิตย์</span>
                    <span>หยุดทำการ</span>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-4">ส่งข้อความถึงเรา</h2>
              <form className="grid gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="name">ชื่อ-นามสกุล</Label>
                  <Input id="name" placeholder="กรุณากรอกชื่อ-นามสกุล" />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="email">อีเมล</Label>
                  <Input id="email" type="email" placeholder="กรุณากรอกอีเมล" />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="phone">เบอร์โทรศัพท์</Label>
                  <Input id="phone" placeholder="กรุณากรอกเบอร์โทรศัพท์" />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="subject">เรื่อง</Label>
                  <Input id="subject" placeholder="กรุณากรอกหัวข้อเรื่อง" />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="message">ข้อความ</Label>
                  <Textarea
                    id="message"
                    placeholder="กรุณากรอกข้อความ"
                    className="min-h-[150px]"
                  />
                </div>
                <Button className="bg-blue-600 hover:bg-blue-700">
                  ส่งข้อความ
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
        <div className="px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                แผนที่
              </h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                ตำแหน่งที่ตั้งของโรงเรียนสอนขับรถประชาอุทิศ
              </p>
            </div>
          </div>
          <div className="mx-auto max-w-5xl py-12">
            <div className="aspect-[16/9] w-full overflow-hidden rounded-lg border shadow">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3877.2461345738394!2d100.50000000000001!3d13.650000000000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTPCsDM5JzAwLjAiTiAxMDDCsDMwJzAwLjAiRQ!5e0!3m2!1sen!2sth!4v1650000000000!5m2!1sen!2sth"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Google Maps"
                className="aspect-[16/9] w-full"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-blue-600 text-white">
        <div className="px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                พร้อมเริ่มเรียนขับรถกับเราหรือยัง?
              </h2>
              <p className="max-w-[900px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                ลงทะเบียนเรียนวันนี้
                และเริ่มต้นการเดินทางสู่การเป็นผู้ขับขี่ที่มั่นใจและปลอดภัย
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Link href="/courses">
                <Button className="bg-white text-blue-600 hover:bg-gray-100">
                  ลงทะเบียนเรียน
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
