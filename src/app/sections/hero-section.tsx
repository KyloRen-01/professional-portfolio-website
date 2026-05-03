"use client";
import { motion, Variants } from "framer-motion";
import { SiGithub } from "react-icons/si";
import { ArrowRight } from "lucide-react";
import { FaLinkedin } from "react-icons/fa";
import { URLS } from "../../lib/link";
import { Button } from "../components/ui/button";
import Link from "next/link";
export default function HeroSection() {
  const fadeUp: Variants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
  };
  return (
    <section className=" mx-auto px-4">
      <div className="flex min-h-[80vh] flex-col items-center justify-center gap-4 text-center">
        <motion.div
          variants={fadeUp}
          initial="initial"
          animate="animate"
          transition={{ delay: 0.3 }}
        >
          <p className="text-center text-xl font-montserrat font-bold leading-tight tracking-tighter md:text-5xl lg:leading-[1.1]">
            Hello, I&apos;m Kicks
            <br />
            Frontend Developer & Project Manager
          </p>
        </motion.div>
        <motion.div
          variants={fadeUp}
          initial="initial"
          animate="animate"
          transition={{ delay: 0.5 }}
        >
          <p className="max-w-[880px] text-center text-4xl text-muted-foreground sm:text-2xl">
            I build and manage , inclusive products and digital experiences for
            the web.
          </p>
        </motion.div>
        <motion.div
          variants={fadeUp}
          initial="initial"
          animate="animate"
          transition={{ delay: 0.7 }}
        >
          <div className="flex gap-4">
            <Button
              asChild
              className="bg-white text-black font-montserrat font-semibold hover:bg-gray-200"
            >
              <Link href="/projects">
                View Projects <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <div className="flex gap-4">
              <Button
                variant="outline"
                className="border-white! border-2! text-white! bg-black! rounded-md! hover:bg-white! hover:text-black! transition-colors duration-300!"
              >
                <Link
                  href={URLS.MyGithub}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <SiGithub className="h-4 w-4" />
                  <span className="sr-only">GitHub</span>
                </Link>
              </Button>
              <Button
                variant="outline"
                className="border-white! border-2! text-white! bg-black! rounded-md! hover:bg-white! hover:text-black! transition-colors duration-300!"
              >
                <Link
                  href={URLS.MyLinkedIn}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedin className="h-4 w-4" />
                  <span className="sr-only">LinkedIn</span>
                </Link>
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
