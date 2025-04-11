"use client";

import Link from "next/link";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useMobile } from "@/hooks/use-mobile";

export default function Header() {
  const isMobile = useMobile();

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="flex h-16 items-center justify-between px-4 md:px-6">
        <div className="flex items-center">
          <Link
            href="/"
            className="flex items-center font-bold text-xl md:text-2xl"
          >
            สอนขับรถประชาอุทิศ
          </Link>
        </div>
        {isMobile ? (
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="shrink-0">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <nav className="grid gap-6 text-lg font-medium">
                <Link
                  href="/"
                  className="flex items-center hover:text-blue-600 transition-colors"
                >
                  หน้าแรก
                </Link>
                <Link
                  href="/courses"
                  className="flex items-center hover:text-blue-600 transition-colors"
                >
                  หลักสูตร
                </Link>
                <Link
                  href="/gallery"
                  className="flex items-center hover:text-blue-600 transition-colors"
                >
                  แกลเลอรี่
                </Link>
                <Link
                  href="/contact"
                  className="flex items-center hover:text-blue-600 transition-colors"
                >
                  ติดต่อเรา
                </Link>
                <Link href="/courses">
                  <Button className="w-full bg-blue-600 hover:bg-blue-700">
                    ลงทะเบียนเรียน
                  </Button>
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
        ) : (
          <nav className="flex items-center gap-6 text-sm font-medium">
            <Link
              href="/"
              className="flex items-center hover:text-blue-600 transition-colors"
            >
              หน้าแรก
            </Link>
            <Link
              href="/courses"
              className="flex items-center hover:text-blue-600 transition-colors"
            >
              หลักสูตร
            </Link>
            <Link
              href="/gallery"
              className="flex items-center hover:text-blue-600 transition-colors"
            >
              แกลเลอรี่
            </Link>
            <Link
              href="/contact"
              className="flex items-center hover:text-blue-600 transition-colors"
            >
              ติดต่อเรา
            </Link>
            <Link href="/courses">
              <Button className="flex items-center bg-blue-600 hover:bg-blue-700">
                ลงทะเบียนเรียน
              </Button>
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
}
