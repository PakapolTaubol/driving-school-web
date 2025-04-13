import Link from "next/link";
import { Facebook, MessageCircle } from "lucide-react";
import { CONTACT_INFO } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="sticky bottom-0 w-full border-t bg-background">
      <div className="flex flex-col gap-6 py-4 md:flex-row md:items-center md:justify-center md:py-4 px-4 md:px-6">
        <div className="flex flex-col items-center gap-2 md:flex-row md:gap-8">
          <div className="flex gap-4">
            <Link
              href={CONTACT_INFO.social.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-blue-100 p-2 text-blue-600 hover:bg-blue-200 flex items-center gap-2"
            >
              <Facebook className="h-5 w-5" />
              <span className="sr-only">Facebook</span>
              <span>Facebook</span>
            </Link>
            <Link
              href={CONTACT_INFO.social.line}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-green-100 p-2 text-green-600 hover:bg-green-200 flex items-center gap-2"
            >
              <MessageCircle className="h-5 w-5" />
              <span className="sr-only">Line</span>
              <span>Line</span>
            </Link>
          </div>
        </div>
      </div>
      {/* <div className="border-t py-6">
        <p className="text-center text-sm text-muted-foreground">
          &copy; 2025 ภคพล ทาอุบล. สงวนลิขสิทธิ์.
        </p>
      </div> */}
    </footer>
  );
}
