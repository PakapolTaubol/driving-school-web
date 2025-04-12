import Link from "next/link";
import Image from "next/image";
import {
  ChevronRight,
  Car,
  Award,
  Users,
  MapPin,
  Phone,
  MessageCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import TestimonialCard from "@/components/testimonial-card";
import CourseCard from "@/components/course-card";
import { CONTACT_INFO } from "@/lib/constants";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-sky-100 to-blue-50">
        <div className="px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  สอนขับรถ by ครูเอ้
                </h1>
                <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                  ประชาอุทิศ สุขสวัสดิ์ บ้านคลองสวน ครุใน
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link href="/courses">
                  <Button className="bg-blue-600 hover:bg-blue-700 cursor-pointer">
                    ลงทะเบียนเรียน
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button variant="outline" className="cursor-pointer">
                    ติดต่อเรา
                  </Button>
                </Link>
              </div>
            </div>
            <div className="mx-auto lg:ml-auto">
              <Image
                src="/image/just-grey.png"
                alt="Driving School"
                width={500}
                height={500}
                className="rounded-xl object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                ทำไมต้องเลือกเรา
              </h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                เรามีประสบการณ์การสอนขับรถมากกว่า 15 ปี
                ด้วยทีมครูผู้เชี่ยวชาญและเป็นมิตร
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
            <div className="flex flex-col justify-center space-y-4 text-center">
              <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-blue-100">
                <Car className="h-10 w-10 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold">รถเรียนทันสมัย</h3>
              <p className="text-gray-500 dark:text-gray-400">
                รถเรียนสภาพดี ปลอดภัย พร้อมอุปกรณ์ช่วยเรียนที่ทันสมัย
              </p>
            </div>
            <div className="flex flex-col justify-center space-y-4 text-center">
              <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-blue-100">
                <Award className="h-10 w-10 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold">ครูผู้เชี่ยวชาญ</h3>
              <p className="text-gray-500 dark:text-gray-400">
                ครูผู้สอนมีประสบการณ์สูง ใจเย็น และเข้าใจผู้เรียน
              </p>
            </div>
            <div className="flex flex-col justify-center space-y-4 text-center">
              <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-blue-100">
                <Users className="h-10 w-10 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold">การดูแลเป็นรายบุคคล</h3>
              <p className="text-gray-500 dark:text-gray-400">
                เรียนแบบตัวต่อตัว ปรับการสอนตามความสามารถของผู้เรียน
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
        <div className="px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                หลักสูตรของเรา
              </h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                เรามีหลักสูตรที่หลากหลายเพื่อตอบสนองความต้องการของผู้เรียนทุกระดับ
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-3">
            <CourseCard
              title="หลักสูตรพื้นฐาน"
              description="สำหรับผู้เริ่มต้น เรียนรู้การขับรถเบื้องต้นและกฎจราจร"
              hours="10 ชั่วโมง"
              price="3,500 บาท"
              image="/image/just-grey.png"
            />
            <CourseCard
              title="หลักสูตรมาตรฐาน"
              description="เรียนรู้การขับรถในสถานการณ์จริง พร้อมเตรียมสอบใบขับขี่"
              hours="15 ชั่วโมง"
              price="5,000 บาท"
              image="/image/just-grey.png"
            />
            <CourseCard
              title="หลักสูตรเร่งรัด"
              description="เรียนเข้มข้นในเวลาสั้น สำหรับผู้ที่มีพื้นฐานมาบ้างแล้ว"
              hours="8 ชั่วโมง"
              price="4,000 บาท"
              image="/image/just-grey.png"
            />
          </div>
          <div className="flex justify-center">
            <Link href="/courses">
              <Button className="bg-blue-600 hover:bg-blue-700">
                ดูหลักสูตรทั้งหมด
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="w-full py-12 md:py-24 lg:py-32">
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
          <div className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-3">
            <TestimonialCard
              name="คุณสมชาย"
              text="ครูใจดีมาก สอนละเอียด ทำให้ผมที่ไม่เคยขับรถเลยสามารถขับได้อย่างมั่นใจ"
              image="/image/just-grey.png"
            />
            <TestimonialCard
              name="คุณนภา"
              text="เรียนจบแล้วสอบผ่านใบขับขี่ในครั้งแรก ขอบคุณโรงเรียนสอนขับรถประชาอุทิศมากค่ะ"
              image="/image/just-grey.png"
            />
            <TestimonialCard
              name="คุณวิชัย"
              text="ครูสอนดีมาก ใจเย็น อธิบายเข้าใจง่าย แนะนำเทคนิคดีๆ ในการขับรถหลายอย่าง"
              image="/image/just-grey.png"
            />
          </div>
          <div className="flex justify-center">
            <Link href="/gallery">
              <Button variant="outline">
                ดูรีวิวทั้งหมด
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
        <div className="px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                ติดต่อเรา
              </h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                มีคำถามหรือต้องการข้อมูลเพิ่มเติม ติดต่อเราได้ตามช่องทางด้านล่าง
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-3">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="flex h-20 w-20 items-center justify-center rounded-full bg-blue-100">
                <Phone className="h-10 w-10 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold">โทรศัพท์</h3>
              <p className="text-gray-500 dark:text-gray-400">
                {CONTACT_INFO.phone.phone1}
                {/* <br />
                {CONTACT_INFO.phone.phone2} */}
              </p>
            </div>
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="flex h-20 w-20 items-center justify-center rounded-full bg-blue-100">
                <MessageCircle className="h-10 w-10 text-green-600" />
              </div>
              <h3 className="text-xl font-bold">Line ID</h3>
              <p className="text-gray-500 dark:text-gray-400">
                {CONTACT_INFO.phone.phone1}
              </p>
            </div>
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="flex h-20 w-20 items-center justify-center rounded-full bg-blue-100">
                <MapPin className="h-10 w-10 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold">ที่อยู่</h3>
              <p className="text-gray-500 dark:text-gray-400">
                {CONTACT_INFO.address.line1}
                <br />
                {CONTACT_INFO.address.line2}
                <br />
                {CONTACT_INFO.address.line3}
              </p>
            </div>
          </div>
          <div className="flex justify-center">
            <Link href="/contact">
              <Button className="bg-blue-600 hover:bg-blue-700">
                ติดต่อเราเพิ่มเติม
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
