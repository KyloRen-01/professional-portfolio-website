"use client";
import { Mail } from "lucide-react";
import { Button } from "../components/ui/button";
import Link from "next/link";
export default function ContactHeroSection() {
  return (
    <section className=" mx-auto px-4 w-full">
      <div className="flex min-h-[60vh] flex-col items-center justify-center gap-4 text-center">
        <h2 className="text-center text-2xl font-montserrat font-bold leading-tight tracking-tighter md:text-2xl lg:leading-[1.1]">
          Ready To Bring Your Ideas To Life?.
        </h2>
        <div className="max-w-[600px] mb-4">
          <p className="text-lg text-muted-foreground">
            {"Let's Talk About How I Can Help."}
          </p>
        </div>
        <Button
          className=" gap-2 bg-white text-black font-montserrat font-semibold hover:bg-gray-200 cursor-pointer"
          asChild
        >
          <Link href="/about">
            Message Me
            <Mail className="h-4 w-4" />
          </Link>
        </Button>
      </div>
    </section>
  );
}
