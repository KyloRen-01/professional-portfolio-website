import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";
import { URLS } from "../lib/link";
import { Mail } from "lucide-react";
import { SiGithub } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";
const Footer = () => {
  return (
    <footer className="border-t">
      <div className=" mx-auto px-12 py-8">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-xl text-muted-foreground">
            © {new Date().getFullYear()} Kirby Calong. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <Link
              href={URLS.MyGithub}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="ghost" size="icon">
                <SiGithub className="h-8 w-8" />
              </Button>
            </Link>
            <Link
              href={URLS.MyLinkedIn}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="ghost" size="icon">
                <FaLinkedin className="h-8 w-8" />
              </Button>
            </Link>

            <Link href={URLS.MyEmail} target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" size="icon">
                <Mail className="h-8 w-8" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
