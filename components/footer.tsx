import Link from "next/link"
import { Facebook, MessageCircle } from "lucide-react"

export default function Footer() {
  return (
    <footer className="w-full border-t bg-background">
      <div className="flex flex-col gap-6 py-8 md:flex-row md:items-center md:justify-between md:py-12">
        <div className="flex flex-col gap-2">
          <Link href="/" className="font-bold text-xl">
            สอนขับรถประชาอุทิศ
          </Link>
          <p className="text-sm text-muted-foreground">โรงเรียนสอนขับรถที่มีคุณภาพและได้มาตรฐาน</p>
        </div>
        <div className="flex flex-col gap-2 md:flex-row md:gap-4">
          <Link href="/courses" className="text-sm hover:underline underline-offset-4">
            หลักสูตร
          </Link>
          <Link href="/gallery" className="text-sm hover:underline underline-offset-4">
            แกลเลอรี่
          </Link>
          <Link href="/contact" className="text-sm hover:underline underline-offset-4">
            ติดต่อเรา
          </Link>
        </div>
        <div className="flex gap-4">
          <Link
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-blue-100 p-2 text-blue-600 hover:bg-blue-200"
          >
            <Facebook className="h-5 w-5" />
            <span className="sr-only">Facebook</span>
          </Link>
          <Link
            href="https://line.me"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-green-100 p-2 text-green-600 hover:bg-green-200"
          >
            <MessageCircle className="h-5 w-5" />
            <span className="sr-only">Line</span>
          </Link>
        </div>
      </div>
      <div className="border-t py-6">
        <p className="text-center text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} สอนขับรถประชาอุทิศ. สงวนลิขสิทธิ์.
        </p>
      </div>
    </footer>
  )
}
