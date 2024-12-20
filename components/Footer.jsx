
"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import IconLocationSharp from "@/public/svg/Location";
import IconTelephone from "@/public/svg/phone";
import IconBxMessageDetail from "@/public/svg/message";
export default function Footer() {
  const [showScrollButton, setShowScrollButton] = useState(false);

  // Monitor scroll position and toggle visibility of scroll button
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollButton(true); // Show button after 300px scroll
      } else {
        setShowScrollButton(false); // Hide button when scrolled up
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Scroll to the top of the page smoothly
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="bg-[url('/footer.svg')]  bg-cover  flex flex-col md:h-[100vh] h-[200vh] pt-17">
      <div className="flex-grow place-content-center md:-mb-20">
        <div className="md:grid md:grid-cols-4 gap-4 md:items-center">
          {/* SCHOOL LOGO AND NAME CONTAINER */}
          <div className="flex-col">
            <div className="flex p-3 space-x-1 items-center">
              <Image src="/football.png" width={60} height={60} alt="logo" />
              <p className="font-bold text-2xl text-[#146f39]">Arya Primary School</p>
            </div>
            {/* SOCIAL MEDIA ICONS */}
            <div className="flex -mb-3 mt-2 space-x-2 ml-2">
              <Image src="/facebook.png" width={20} height={20} alt="facebook icon" />
              <Image src="/instagram.png" width={20} height={20} alt="instagram icon" />
              <Image src="/twitter.png" width={20} height={20} alt="twitter icon" />
              <Image src="/tiktok.png" width={20} height={20} alt="tiktok icon" />
              <Image src="/youtube.png" width={20} height={20} alt="youtube icon" />
            </div>
          </div>

          {/* VISION */}
          <div className="p-4 flex flex-col space-y-4">
            <p className="text-green-800 font-bold text-2xl">Our vision</p>
            <p className="font-semibold">
              To embrace diversity and inclusion to inspire positive change in youth and the community
            </p>
            <Link
              href="/"
              className="text-green-900 ring-1 font-semibold ring-green-800 py-2 px-4 w-40 rounded-full hover:bg-yellow-600 hover:text-black transition duration-500 ease-in-out"
            >
              Learn More
            </Link>
          </div>

          {/* CONTACT US */}
          <div className="p-4">
            <h1 className="text-green-900 font-extrabold text-2xl">Contact Us</h1>
            <div className="flex flex-col space-y-3 mt-4">
              <div className="flex space-x-6 group transition duration-500 ease-in-out">
                {/* <Image
                  className="rounded-full transition duration-500 ease-in-out group-hover:bg-yellow-600"
                  src="/phone-50.png"
                  width={20}
                  height={20}
                  alt="phone icon"
                /> */}
                <IconTelephone  className="transition w-10 h-5 mt-1 duration-500 ease-in-out group-hover:text-yellow-600"/>
                <a href="tel:+254306009652" className="transition duration-500 ease-in-out group-hover:text-yellow-600">
                  +254 306009652
                </a>
              </div>
              <div className="flex space-x-6 group transition duration-500 ease-in-out">
                
                <IconBxMessageDetail className="w-10 h-5 mt-2 transition duration-500 ease-in-out group-hover:text-yellow-600"/>

                <a href="mailto:info@aryaschool.ke" className="transition duration-500 ease-in-out group-hover:text-yellow-600">
                  info@aryaschool.ke
                </a>
              </div>
              <div className="flex space-x-6 group transition duration-500 ease-in-out">
                
                <IconLocationSharp className="w-10 h-5 mt-2 ml-2 transition duration-500 ease-in-out group-hover:text-yellow-600" />
                <a href="tel:+254306009652" className="transition duration-500 ease-in-out group-hover:text-yellow-600">
                  Majengo Location Division, Mvita constituency
                </a>
              </div>
            </div>
          </div>

          {/* APPLY NOW BUTTON */}
          <div className="justify-center flex md:justify-center mt-4 md:col-start-4 md:col-span-2">
            <Link href="/" className="bg-green-900 py-3 px-12 rounded-full text-white hover:ring-1 hover:ring-yellow-700">
              Apply Now
            </Link>
          </div>
        </div>
      </div>

      {/* FOOTER COPYRIGHT */}
      <footer className="p-4 bg-[#eaf3ed] flex flex-col justify-between md:flex-row md:h-[16vh]  h-[32vh] space-y-4 md:items-center md:justify-between mt-auto">
        <p>&copy; 2024 Arya Primary School. All rights reserved.</p>
        <p>Design by <strong>Ali</strong></p>
      </footer>

      {/* Floating Scroll-to-Top Button */}
      {showScrollButton && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-green-900 text-white p-3 rounded-full shadow-lg hover:bg-green-700 transition duration-300 ease-in-out"
          aria-label="Scroll to top"
        >
          <Image src="/up-arrow-48.png" width={30} height={30} alt="top arrow" />
        </button>
      )}
    </div>
  );
}
