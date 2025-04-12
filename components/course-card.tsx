import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Clock } from "lucide-react"

interface CourseCardProps {
  title: string
  description: string
  hours: string
  price: string
  image: string
}

export default function CourseCard({ title, description, hours, price, image }: CourseCardProps) {
  return (
    <div className="flex flex-col overflow-hidden rounded-lg border bg-card text-card-foreground shadow">
      <div className="relative h-48 w-full">
        <Image
          src={image || "/image/just-grey.png"}
          alt={title}
          fill
          className="object-cover"
        />
      </div>
      <div className="flex flex-col space-y-4 p-6">
        <h3 className="text-xl font-bold">{title}</h3>
        <p className="text-sm text-muted-foreground">{description}</p>
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Clock className="h-4 w-4" />
          <span>{hours}</span>
        </div>
        <div className="text-lg font-bold text-blue-600">{price}</div>
        <Link href="/courses">
          <Button className="w-full bg-blue-600 hover:bg-blue-700">ลงทะเบียนเรียน</Button>
        </Link>
      </div>
    </div>
  )
}
