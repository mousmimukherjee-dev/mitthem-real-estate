"use client"
import Image from "next/image";
import React from "react";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Header = () => {

  const pathName = usePathname()
  
  return (
    <div className="px-10 p-6 flex justify-between shadow-sm fixed top-0 bg-white z-10 w-full">
      <div className="flex gap-12 items-center">
        <Image src={"/logo.svg"} width={150} height={150} alt="logo" />
        <ul className="gap-10 hidden md:flex">
          <Link
            href="/"
            className={`${pathName==="/" && "text-primary"} hover:text-primary font-medium text-sm cursor-pointer`}
          >
            For Sale
          </Link>
          <Link
            href="/"
            className={`${pathName==="/" && "text-primary"} hover:text-primary font-medium text-sm cursor-pointer`}
          >
            For Rent
          </Link>
          <Link
            href="/"
            className="hover:text-primary font-medium text-sm cursor-pointer"
          >
            Agent Finder
          </Link>
        </ul>
      </div>
      <div className="flex gap-2">
        <Button className="flex gap-2">
          {" "}
          <Plus className="h-5 w-5" />
          Post your Add
        </Button>
        <Button variant="outline">Login</Button>
      </div>
    </div>
  );
};

export default Header;
