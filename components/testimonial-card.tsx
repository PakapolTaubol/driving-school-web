import Image from "next/image"

interface TestimonialCardProps {
  name: string
  text: string
  image: string
}

export default function TestimonialCard({ name, text, image }: TestimonialCardProps) {
  return (
    <div className="flex flex-col items-center gap-4 rounded-lg border bg-card p-6 text-card-foreground shadow">
      <div className="relative h-20 w-20 overflow-hidden rounded-full">
        <Image
          src={image || "/placeholder.svg?height=100&width=100&bgcolor=%23e5e5e5"}
          alt={name}
          fill
          className="object-cover"
        />
      </div>
      <div className="space-y-2 text-center">
        <h3 className="font-bold">{name}</h3>
        <p className="text-sm text-muted-foreground">{text}</p>
      </div>
    </div>
  )
}
