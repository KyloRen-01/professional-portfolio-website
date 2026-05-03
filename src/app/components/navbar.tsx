"use client";
import { NavBarLinks } from "../../lib/link";
import Link from "next/link";
import { Button } from "./ui/button";
export default function Navbar() {
  return (
    <nav className="top-0 z-50 flex h-24 w-full flex-row items-center justify-between gap-5 border-b bg-background/95 px-6 backdrop-blur supports-[backdrop-filter]:bg-background/60 md:sticky md:px-20">
      <div className="flex flex-row items-center gap-3 lg:gap-5">
        <Link href={"/"}>
          <nav>
            <span className="text-lg font-montserrat font-bold cursor-pointer">
              kirbycalong
            </span>
            <span className="text-md font-poppins font-extrabold">.com</span>
          </nav>
        </Link>
        {NavBarLinks.map((link, index) => (
          <nav
            key={index}
            className="font-montserrat text-lg cursor-pointer hover:text-gray-400 transition-colors duration-300"
          >
            {link.name}
          </nav>
        ))}
      </div>
      <div className="flex gap-4 items-center">
        <Button className="bg-white! cursor-pointer! hover:bg-gray-200! transition-all! duration-300!  rounded-md! text-black! text-md! font-montserrat! font-semibold!">
          Contact Me
        </Button>
        <Button className="bg-white! cursor-pointer! hover:bg-gray-200! transition-all! duration-300!  rounded-md! text-black! text-md! font-montserrat! font-semibold!">
          View Resume
        </Button>
      </div>
    </nav>
  );
}
