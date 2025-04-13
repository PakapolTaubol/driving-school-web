import Link from "next/link";
import Image from "next/image";
import { ChevronRight, Clock, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { CONTACT_INFO } from "@/lib/constants";

export default function CoursesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-sky-100 to-blue-50">
        <div className="px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                หลักสูตรของเรา
              </h1>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                เรามีหลักสูตรที่หลากหลายเพื่อตอบสนองความต้องการของผู้เรียนทุกระดับ
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Courses Detail Section */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="px-4 md:px-6">
          <div className="grid gap-10 lg:gap-16">
            {/* Course 1 */}
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter">
                    หลักสูตรพื้นฐาน
                  </h2>
                  <p className="text-gray-500 md:text-lg dark:text-gray-400">
                    สำหรับผู้เริ่มต้น เรียนรู้การขับรถเบื้องต้นและกฎจราจร
                  </p>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Clock className="h-4 w-4" />
                  <span>10 ชั่วโมง</span>
                </div>
                <ul className="grid gap-2">
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-green-500" />
                    <span>เรียนรู้พื้นฐานการขับรถ</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-green-500" />
                    <span>กฎจราจรและป้ายจราจร</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-green-500" />
                    <span>การจอดรถและการกลับรถ</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-green-500" />
                    <span>การขับรถในเมือง</span>
                  </li>
                </ul>
                <div className="text-2xl font-bold text-blue-600">
                  3,500 บาท
                </div>
                <div>
                  <Link href={CONTACT_INFO.social.line}>
                    <Button className="bg-blue-600 hover:bg-blue-700 cursor-pointer">
                      ลงทะเบียนเรียน
                      <ChevronRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="mx-auto lg:ml-auto">
                <Image
                  src="/image/course/checklist.jpg"
                  alt="หลักสูตรพื้นฐาน"
                  width={600}
                  height={400}
                  className="rounded-xl object-cover"
                />
              </div>
            </div>

            {/* Course 2 */}
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="flex flex-col justify-center space-y-4 lg:order-last">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter">
                    หลักสูตรมาตรฐาน
                  </h2>
                  <p className="text-gray-500 md:text-lg dark:text-gray-400">
                    เรียนรู้การขับรถในสถานการณ์จริง พร้อมเตรียมสอบใบขับขี่
                  </p>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Clock className="h-4 w-4" />
                  <span>15 ชั่วโมง</span>
                </div>
                <ul className="grid gap-2">
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-green-500" />
                    <span>ทุกอย่างในหลักสูตรพื้นฐาน</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-green-500" />
                    <span>การขับรถบนทางด่วน</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-green-500" />
                    <span>การแก้ไขสถานการณ์ฉุกเฉิน</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-green-500" />
                    <span>การเตรียมตัวสอบใบขับขี่</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-green-500" />
                    <span>ฝึกสอบข้อเขียนและสอบปฏิบัติ</span>
                  </li>
                </ul>
                <div className="text-2xl font-bold text-blue-600">
                  5,000 บาท
                </div>
                <div>
                <Link href={CONTACT_INFO.social.line}>
                  <Button className="bg-blue-600 hover:bg-blue-700 cursor-pointer">
                    ลงทะเบียนเรียน
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                  </Link>
                </div>
              </div>
              <div className="mx-auto lg:mr-auto lg:order-first">
                <Image
                  src="/image/course/drive-test.jpeg"
                  alt="หลักสูตรมาตรฐาน"
                  width={600}
                  height={400}
                  className="rounded-xl object-cover"
                />
              </div>
            </div>

            {/* Course 3 */}
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter">
                    หลักสูตรเร่งรัด
                  </h2>
                  <p className="text-gray-500 md:text-lg dark:text-gray-400">
                    เรียนเข้มข้นในเวลาสั้น สำหรับผู้ที่มีพื้นฐานมาบ้างแล้ว
                  </p>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Clock className="h-4 w-4" />
                  <span>8 ชั่วโมง</span>
                </div>
                <ul className="grid gap-2">
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-green-500" />
                    <span>ทบทวนพื้นฐานการขับรถ</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-green-500" />
                    <span>เทคนิคการขับรถขั้นสูง</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-green-500" />
                    <span>การเตรียมตัวสอบใบขับขี่</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-green-500" />
                    <span>ฝึกสอบข้อเขียนและสอบปฏิบัติ</span>
                  </li>
                </ul>
                <div className="text-2xl font-bold text-blue-600">
                  4,000 บาท
                </div>
                <div>
                <Link href={CONTACT_INFO.social.line}>
                  <Button className="bg-blue-600 hover:bg-blue-700 cursor-pointer">
                    ลงทะเบียนเรียน
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                  </Link>
                </div>
              </div>
              <div className="mx-auto lg:ml-auto">
                <Image
                  src="/image/course/car-highway.jpg"
                  alt="หลักสูตรเร่งรัด"
                  width={600}
                  height={400}
                  className="rounded-xl object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Price Comparison */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
        <div className="px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                เปรียบเทียบหลักสูตร
              </h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                เลือกหลักสูตรที่เหมาะกับความต้องการของคุณ
              </p>
            </div>
          </div>
          <div className="mx-auto max-w-5xl py-12">
            <Table>
              <TableCaption>รายละเอียดหลักสูตรและราคา</TableCaption>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[200px]">รายละเอียด</TableHead>
                  <TableHead>หลักสูตรพื้นฐาน</TableHead>
                  <TableHead>หลักสูตรมาตรฐาน</TableHead>
                  <TableHead>หลักสูตรเร่งรัด</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className="font-medium">จำนวนชั่วโมง</TableCell>
                  <TableCell>10 ชั่วโมง</TableCell>
                  <TableCell>15 ชั่วโมง</TableCell>
                  <TableCell>8 ชั่วโมง</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">พื้นฐานการขับรถ</TableCell>
                  <TableCell>
                    <Check className="h-4 w-4 text-green-500" />
                  </TableCell>
                  <TableCell>
                    <Check className="h-4 w-4 text-green-500" />
                  </TableCell>
                  <TableCell>
                    <Check className="h-4 w-4 text-green-500" />
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">กฎจราจร</TableCell>
                  <TableCell>
                    <Check className="h-4 w-4 text-green-500" />
                  </TableCell>
                  <TableCell>
                    <Check className="h-4 w-4 text-green-500" />
                  </TableCell>
                  <TableCell>
                    <Check className="h-4 w-4 text-green-500" />
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">
                    การขับรถบนทางด่วน
                  </TableCell>
                  <TableCell>-</TableCell>
                  <TableCell>
                    <Check className="h-4 w-4 text-green-500" />
                  </TableCell>
                  <TableCell>
                    <Check className="h-4 w-4 text-green-500" />
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">
                    เตรียมสอบใบขับขี่
                  </TableCell>
                  <TableCell>-</TableCell>
                  <TableCell>
                    <Check className="h-4 w-4 text-green-500" />
                  </TableCell>
                  <TableCell>
                    <Check className="h-4 w-4 text-green-500" />
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">เทคนิคขั้นสูง</TableCell>
                  <TableCell>-</TableCell>
                  <TableCell>-</TableCell>
                  <TableCell>
                    <Check className="h-4 w-4 text-green-500" />
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">ราคา</TableCell>
                  <TableCell className="font-bold">3,500 บาท</TableCell>
                  <TableCell className="font-bold">5,000 บาท</TableCell>
                  <TableCell className="font-bold">4,000 บาท</TableCell>
                </TableRow>
              </TableBody>
            </Table>
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
              
              <Link href={CONTACT_INFO.social.line}>
              <Button className="bg-white text-blue-600 hover:bg-gray-100 cursor-pointer">
                ลงทะเบียนเรียน
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
                  </Link>
              <Link href="/contact">
                <Button
                  variant="outline"
                  className="border-white text-blue-600 hover:bg-blue-700"
                >
                  ติดต่อเรา
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
