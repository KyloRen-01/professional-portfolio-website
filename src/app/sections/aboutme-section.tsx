"use client";
import Image from "next/image";
import { Button } from "../components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
export default function HeroAboutMeSection() {
  return (
    <section>
      <div className="mx-auto max-w-5xl mb-12">
        <h2 className="mb-4 text-3xl font-bold">About Me</h2>
        <div className="grid items-center gap-12 md:grid-cols-2">
          <div className="relative aspect-square">
            <Image
              src="/me.jpg"
              alt="Profile picture"
              fill
              className="rounded-lg object-cover"
            />
          </div>
          <div className="space-y-6">
            <p className="text-lg text-muted-foreground">
              I&apos;m a Frontend Developer and Project Manager with a knack for
              developing interactive and accessible web applications. With over
              2 years of experience in web development, I specialize in creating
              and managing responsive and user-friendly interfaces.
            </p>
            <p className="text-lg text-muted-foreground">
              When I&apos;m off my desk, you can find me exploring new
              technologies, playing Video Games, Cooking, or Badminton or just
              chilling.
            </p>
            <Button className="gap-2 bg-white text-black font-montserrat hover:bg-gray-200">
              <Link href="/about">
                More About Me
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
