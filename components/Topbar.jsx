"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import IconBxMessageDetail from "@/public/svg/message";
import IconTelephone from "@/public/svg/phone";
import About from "../app/About/page";
import FeeStructure from "@/app/Fee-structure/page";
import AdmissionPage from "@/app/Admission/page";
import CurriculumPage from "@/app/Curriculum/page";
import EarlyYears from "@/app/Early-Years/page";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function Topbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <div>
      <div className="flex justify-between bg-slate-100">
        {/* SCHOOL LOGO AND NAME CONTAINER */}
        <div className="flex p-3 space-x-1 items-center">
          <Image src="/football.png" width={60} height={60} alt="logo" />
          <p className="font-bold text-2xl text-green-600">Arya Primary School</p>
        </div>
        {/* SCHOOL CONTACT INFO */}
        <div className="hidden md:block">
          <div className="flex space-x-6 p-4 text-green-800 font-semibold hover:text-yellow-600 group transition duration-500 ease-in-out">
            <IconTelephone className="mt- w-5 h-7"/>
            <a href="tel:+254306009652" className="group-hover:text-yellow-600 transition duration-500 ease-in-out">
              +254 306009652
            </a>
          </div>
          <div className="flex space-x-6 p-4 text-green-800 font-semibold hover:text-yellow-600 group transition duration-500 ease-in-out">
            <IconBxMessageDetail />
            <a href="mailto:info@aryaschool.ke" className="group-hover:text-yellow-600 transition duration-500  ease-in-out">
              info@aryaschool.ke
            </a>
          </div>
        </div>
      </div>
      {/* PAGES LINKS */}
      <div>
        <div className="flex space-x-6 p-7 justify-between items-center text-white bg-green-700 font-semibold">
          {/* Menu Icon or close icon */}
          <Image
            className="lg:hidden cursor-pointer"
            src={menuOpen ? "/close.png" : "/menu_1.png"} // Dynamically switch icons
            width={20}
            height={20}
            alt={menuOpen ? "close icon" : "menu icon"}
            onClick={toggleMenu}
          />
          {/* Dropdown Menu */}
          {menuOpen && (
            <div className={`absolute bg-green-700 w-screen top-44 right-0 lg:hidden flex flex-col md:mt-10 items-start space-y-2 px-9 pb-1 text-white ${menuOpen ? 'h-96 space-y-8 '  : ''}`}>
              <Link href="/" className="hover:text-yellow-500">Home</Link>
              <Link href="/About" className="hover:text-yellow-500">About</Link>
              <Link href="/Admission" className="hover:text-yellow-500">Admission</Link>
              <Link href="/Fee-structure" className="hover:text-yellow-500">Fee structure</Link>
              <Link href="/Curriculum" className="hover:text-yellow-500">Curriculum</Link>
              <DropdownMenu>
                <DropdownMenuTrigger asChild >
                  <div className="flex items-center hover:text-yellow-500 w-full justify-between">
                    <span>Schools</span>
                    <button onClick={toggleDropdown} className="ml-1">&#9662;</button>
                  </div>
                </DropdownMenuTrigger>
                {dropdownOpen && (
                  <DropdownMenuContent className="bg-green-700 text-white mr-60 pl-10 md:-mr-96  ">
                    {/* <DropdownMenuLabel>Schools</DropdownMenuLabel>
                    <DropdownMenuSeparator /> */}
                    <DropdownMenuItem asChild>
                      <Link href="/Early-Years" className="hover:text-yellow-500">Early Years Education</Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link href="/secondary" className="hover:text-yellow-500">Middle School</Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link href="/highschool" className="hover:text-yellow-500">Junior Secondary</Link>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                )}
              </DropdownMenu>
              <Link href="/Contact" className={`hover:text-yellow-500 ${dropdownOpen ? 'mt-24'  : ''}`}>Contact Us</Link>
            </div>
          )}
          {/* Desktop Links */}
          <div className="hidden lg:flex space-x-7 items-center">
            <Link href="/" className="hover:text-yellow-500">Home</Link>
            <Link href="/About" className="hover:text-yellow-500">About</Link>
            <Link href="/Admission" className="hover:text-yellow-500">Admission</Link>
            <Link href="/Fee-structure" className="hover:text-yellow-500">Fee structure</Link>
            <Link href="/Curriculum" className="hover:text-yellow-500">Curriculum</Link>
            <div className="relative group">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <button className="flex items-center hover:text-yellow-500 group-hover:block"  >
                    Schools <span className="ml-1">&#9662;</span>
                  </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="bg-green-700 text-white ">
                  {/* <DropdownMenuLabel className="px-4 py-2">Schools</DropdownMenuLabel> */}
                  {/* <DropdownMenuSeparator /> */}
                  <DropdownMenuItem asChild>
                    <Link href="/Early-Years" className="block px-4 py-2 hover:text-yellow-500">Early Years Education</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/secondary" className="block px-4 py-2 hover:text-yellow-500">Middle School</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/highschool" className="block px-4 py-2 hover:text-yellow-500">Junior Secondary</Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
            <Link href="/Contact" className="hover:text-yellow-500">Contact Us</Link>
          </div>
          <Link
            href="/"
            className="bg-yellow-600 text-green-800 p-2 font-medium rounded-full hover:bg-green-700 hover:text-white hover:ring-1 ring-white"
          >
            Apply Online
          </Link>
        </div>
      </div>
    </div>
  );
}

