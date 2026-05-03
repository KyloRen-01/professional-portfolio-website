"use client";
import Image from "next/image";
import { Button } from "../components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
export default function HeroAboutMeSection() {
  return (
    <section>
      <div className="mx-auto max-w-5xl mb-12">
        <h2 className="mb-4 text-3xl font-semibold font-montserrat">
          About Me
        </h2>
        <div className="grid items-center gap-12 md:grid-cols-2">
          <div className="relative aspect-square">
            <Image
              src="/me.jpg"
              alt="Profile picture"
              fill
              loading="eager"
              className="rounded-lg object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
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
              When I&apos;m off my desk, you can find me scrolling through
              social media, playing Video Games or Badminton, Cooking, or just
              chilling.
            </p>
            <Button
              className=" gap-2 bg-white text-black font-montserrat font-semibold hover:bg-gray-200"
              asChild
            >
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
